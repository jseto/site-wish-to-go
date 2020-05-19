import * as React from "react"
import { FormEvent, Component, ReactChildren } from "react"
import { WaitingSpinner } from "../components/waiting-spinner"

interface ContactFormProps {
	children: ReactChildren
}

interface ContactFormState {
	submitting: boolean;
	submitted: boolean;
}

export class ContactForm extends Component<ContactFormProps, ContactFormState> {
	constructor( props: Readonly<ContactFormProps> ) {
		super( props )
		this.state = {
			submitted: false,
			submitting: false
		}
	}
	
	render() {
		const { submitted, submitting } = this.state

		return (
			<div>
				{ !submitted &&
					<WaitingSpinner waiting={ submitting }>
						<form 
							className="form narrow center"
							action="https://formspree.io/mgenoaqo" 
							method="POST"
							onSubmit={ event => this.handleSubmit( event )}
						>
							<h2>How can I help you?</h2>
							<div className="field">
								<div className="control">
									<input className="input" placeholder="Enter your name" type="text" name="name"/>
								</div>
							</div>
							<div className="field">
								<div className="control">
									<input className="input" placeholder="Enter your email" type="email" name="email" required/>
								</div>
							</div>
							<div className="field">
								<div className="control">
									<textarea className="textarea" placeholder="Explain how we can help you" name="text" required/>
								</div>
							</div>
							<div className="field">
								<div className="control">
									<button className="button is-primary is-fullwidth" type="submit">Send</button>
								</div>
							</div>
						</form>
					</WaitingSpinner>
				}

				{ submitted &&
					this.props.children
				}
			</div>
		)
	}

	private handleSubmit( event: FormEvent ) {
		const form = event.target as HTMLFormElement
		const data = new FormData( form )
		
		this.setState({ submitting: true })

		event.preventDefault()
		fetch( form.action, {
			method: form.method,
      body: data
		}).finally( ()=> this.setState({
			submitting: false,
			submitted: true
		}))
	}
}