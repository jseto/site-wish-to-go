import * as React from "react"
import { Layout } from "../components/layout"
import SEO from "../components/seo"
import { WaitingSpinner } from "../components/waiting-spinner"

interface VerifiedProps {
  location: Location
}

const Verified = ({ location }: VerifiedProps ) => {

	const params = new URLSearchParams( location.search )
  const convertKitParams = {
    api_key: 'HXiYqOJtt8OTEMIcAsw1kQ',                                // cSpell: disable-line
    name: params.get( 'name' ),
    email: params.get( 'email' ),
    fields: {
      blog: params.get( 'blogDomain' ),
      plan: params.get( 'plan' )
    }
  }
	
	fetch( 'https://api.convertkit.com/v3/forms/1374007/subscribe', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify( convertKitParams )

  })
  .then( () => window.location.href = '/plans/subscription/subscribed/' )
  .catch( error => console.log( error ) )

	return(
		<Layout>
      <WaitingSpinner waiting={true}>
        <h1 style={{ margin: '25vh auto' }}>Loading</h1>
      </WaitingSpinner>
		</Layout>
  )
}

export default Verified

