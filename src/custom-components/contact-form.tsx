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
			<>
				{ !submitted &&
					<WaitingSpinner waiting={ submitting }>
						<form 
							action="https://formspree.io/mgenoaqo" 
							method="POST"
							onSubmit={ event => this.handleSubmit( event )}
						>
							<div className="field">
								<div className="control">
									<input className="input" placeholder="Enter your name" type="text" name="name"/>
								</div>
							</div>
							<div className="field">
								<div className="control">
									<input className="input" placeholder="Enter your email" type="email" name="email"/>
								</div>
							</div>
							<div className="field">
								<div className="control">
									<textarea className="textarea" placeholder="Explain how we can help you" name="text"/>
								</div>
							</div>
							<div className="field">
								<div className="control">
									<button className="button is-primary" type="submit">Send</button>
								</div>
							</div>
						</form>
					</WaitingSpinner>
				}

				{ submitted &&
					this.props.children
				}
			</>
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