import * as React from "react"
import { StartWishToGo } from "../wish-to-go-plugin/start-wish-to-go";
import GoogleIcon from "@fortawesome/fontawesome-free/svgs/brands/google.svg";
import { Link } from "gatsby";

interface UserCredential {
	authId: string;
	email: string;
	name?: string;
	blogDomain: string;
	pictureUrl?: string;
}

interface SignData {
	authProvider: string; 
	name?: string;
	email?: string; 
	blogDomain?: string;
	password?: string;
	verificationLink?: string;
}

interface Auth {
	signUp( signData: SignData ): Promise<UserCredential>;
	login( signData: SignData ): Promise<UserCredential>;
	logout(): Promise<void>;
}

interface SubscribeProps {
	plan: string;
	searchParams: string;
}

interface SubscribeState {
	email: string;
	password: string;
	blogDomain: string;
	name: string;
	error: string;
}

export class Subscribe extends React.Component<SubscribeProps, SubscribeState> {
	static initialized = false;
	constructor( props: SubscribeProps ) {
		super( props )

		this.state = {
			email: '',
			password:'',
			blogDomain: '',
			name: '',
			error: ''
		}
	}

	render() {
		const { email, password, blogDomain, name, error } = this.state

		return (
			<div className="subscribe">
				<div className="subscribe-box">
					<h2>Create your Account</h2>
					<div className="email-sign-up">
						<form onSubmit={ event => this.signWithEmail( email, password, name, blogDomain, event ) }>
							<div className="field control">
								<input
									className="input"
									placeholder="Your name"
									type="text"
									autoComplete="name"
									onChange={ event => this.setState({ name: event.target.value })}
									value={name}
								/>
							</div>
							<div className="field control">
								<input
									className="input"
									placeholder="Your blog domain name"
									type="text"
									autoComplete="url"
									onChange={ event => this.setState({ blogDomain: event.target.value })}
									value={blogDomain}
								/>
							</div>
							<div className="field control">
								<input
									className="input"
									placeholder="Your email address"
									type="email"
									autoComplete="email"
									onChange={ event => this.setState({ email: event.target.value })}
									value={email}
								/>
							</div>
							<div className="field control">
								<input
									className="input"
									placeholder="Choose a password"
									type="password"
									autoComplete="current-password"
									onChange={event => this.setState({ password: event.target.value })}
									value={password}
								/>
							</div>
							<div className="field control is-grouped is-grouped-centered">
								<button	className="button is-success is-fullwidth" type="submit">
									Subscribe with Email
								</button>
							</div>
						</form>
					</div>

					<hr/>

					<div className="social-sign-up">
						<button 
							className="button is-info is-fullwidth"
							onClick={() => this.signWithProvider( 'google' ) }
						>
							<span>Subscribe with Google</span>
							<GoogleIcon/>
						</button>
						{/* <button 
							className="button is-info is-fullwidth"
							onClick={() => this.signWithProvider( 'facebook' )}
						>
							<span>Subscribe with Facebook</span>
							<span className="icon">
								<i className=" fab fa-facebook"></i>
							</span>
						</button> */}
					</div>
					
					<div className={`error ${ error? '' : 'shrink-to-hide'}`}>
						{ error &&
							<p>{ error }</p>
						}
					</div>
					
					<StartWishToGo noCounter={true}/>
				</div>

				<small>
					By subscribing to our service, you agree to our 
					<Link to="/legal/terms/"> Terms and Conditions</Link> and
					<Link to="legal/privacy-policy/"> Privacy Policy</Link>.
				</small>
			</div>		
		)
	}

	private getVerifiedURL( defaultParams?: { email?: string, name?: string, blogDomain?: string } ) {
		const params = {
			plan: this.props.plan,
			email: defaultParams?.email || this.state.email,
			blogDomain: defaultParams?.blogDomain || this.state.blogDomain,
			name: defaultParams?.name || this.state.name
		}

		const queryString = Object.keys( params ).filter( key => params[key]).map( 
			key => `${ encodeURIComponent(key) }=${ encodeURIComponent( params[ key ] ) }`
		).join('&')

		return `/verified?${ queryString }`
	}

	private signWithEmail( email: string, password: string, name: string, blogDomain: string, event: React.FormEvent ) {
		event.preventDefault()

		this.auth().signUp({ 
			authProvider: 'email', 
			email: email, 
			password: password,
			blogDomain: blogDomain,
			name: name,
			verificationLink: 'https://wish-to-go.com' + this.getVerifiedURL()
		}).then( () => {
			this.setState({ error: '' });
			window.location.href = `/plans/subscription/verification-email-sent/`
		}).catch( error => {
			this.setState({ error: 'Cannot sign up. Reason: ' + error });
		})
	}

	private signWithProvider( provider: string ) {
		this.auth().signUp({ 
			authProvider: provider,
		}).then( userCredential => {
			this.setState({ error: '' });
			window.location.href = this.getVerifiedURL({ 
				name: userCredential.name,
				email: userCredential.email
			})
		}).catch( error => {
			this.setState({ error: 'Cannot sign up. Reason: ' + error });
		})
	}

	private auth(): Auth {
		return window[ 'wtgAuth' ]()
	}
}
