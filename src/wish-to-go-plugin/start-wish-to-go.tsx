import * as React from "react"
import { WishCounterWidget } from "./wtg-widgets"
import { ScriptLoader } from "../components/script-loader"

interface StartWishToGoProps {
	noCounter: boolean;
}

export class StartWishToGo extends React.Component< StartWishToGoProps > {

	private initScript() {
		window[ 'wtgInit' ]()
	}

	componentWillUnmount() {
    if ( window[ 'wtgDismount' ] ) window[ 'wtgDismount' ]()
  }

	render() {
		return (
			<ScriptLoader 
				script="https://wish-to-go.com/wish-to-go.main.js"
				initScript={ ()=> this.initScript() }
			>
				{ !this.props.noCounter && <WishCounterWidget />	}
			</ScriptLoader>
		)
	}
}