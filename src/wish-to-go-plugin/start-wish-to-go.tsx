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
		const scriptUrl = siteMetadata.siteUrl + '/wish-to-go.main.js'

		return (
			<ScriptLoader 
				script={ scriptUrl }
				initScript={ ()=> this.initScript() }
			>
				{ !this.props.noCounter && <WishCounterWidget />	}
			</ScriptLoader>
		)
	}
}