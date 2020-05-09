import * as React from "react"
import { StartWishToGo } from "../wish-to-go-plugin/start-wish-to-go";
import GoogleIcon from "@fortawesome/fontawesome-free/svgs/brands/google.svg";


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
				<h2>Create your Account</h2>
				<div className="email-sign-up">
					<div className="field control">
						<input
							className="input"
							placeholder="Your name"
							type="text"
							onChange={ event => this.setState({ name: event.target.value })}
							value={name}
						/>
					</div>
					<div className="field control">
						<input
							className="input"
							placeholder="Your blog domain name"
							type="text"
							onChange={ event => this.setState({ blogDomain: event.target.value })}
							value={blogDomain}
						/>
					</div>
					<div className="field control">
						<input
							className="input"
							placeholder="Your email address"
							type="email"
							onChange={ event => this.setState({ email: event.target.value })}
							value={email}
						/>
					</div>
					<div className="field control">
						<input
							className="input"
							placeholder="Choose a password"
							type="password"
							onChange={event => this.setState({ password: event.target.value })}
							value={password}
						/>
					</div>

					<div className="field control is-grouped is-grouped-centered">
						<button	
							className="button is-success"
							onClick={ () => this.signWithEmail( email, password, name, blogDomain ) }
						>
							Subscribe with Email
						</button>
					</div>
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
		)
	}

	private signWithEmail( email: string, password: string, name: string, blogDomain: string ) {
		const { plan } = this.props
		
		this.auth().signUp({ 
			authProvider: 'email', 
			email: email, 
			password: password,
			blogDomain: blogDomain,
			name: name,
			verificationLink: `https://wish-to-go.com/${plan === 'backpacker'? 'payed' : 'payment'}?plan=${plan}`,
		}).then( userCredential => {
			this.setState({ error: '' });
			console.log( 'Signed Up with Email', userCredential )
			window.location.href = `/verification-email-sent`
		}).catch( error => {
			this.setState({ error: 'Cannot sign up. Reason: ' + error });
		})
	}

	private signWithProvider( provider: string ) {
		const { plan } = this.props

		this.auth().signUp({ 
			authProvider: provider,
		}).then( userCredential => {
			this.setState({ error: '' });
			console.log( 'Signed Up with ' + provider, userCredential )
			window.location.href = `/${plan === 'backpacker'? 'payed' : 'payment'}?plan=${plan}`
		}).catch( error => {
			this.setState({ error: 'Cannot sign up. Reason: ' + error });
		})
	}

	private auth(): Auth {
		return window[ 'wtgAuth' ]()
	}
}
