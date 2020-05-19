import * as React from "react"
import { WishCounterWidget } from "./wtg-widgets"
import { ScriptLoader } from "../components/script-loader"
import { siteMetadata } from "../../gatsby-config.js"

interface StartWishToGoProps {
	noCounter?: boolean;
}

export class StartWishToGo extends React.Component< StartWishToGoProps > {

	private initScript() {
		window[ 'wtgInit' ]()
	}

	componentWillUnmount() {
    if ( window[ 'wtgDismount' ] ) window[ 'wtgDismount' ]()
  }

	render() {
		const scriptUrl = siteMetadata.scriptUrl + '/wish-to-go.main.js'

		return (
			<>
				<ScriptLoader	initScript={ ()=> this.initScript() }>
				
					<script type="text/javascript" src={ scriptUrl }/>
				
				</ScriptLoader>

				{ !this.props.noCounter && <WishCounterWidget />	}
			</>
		)
	}
}