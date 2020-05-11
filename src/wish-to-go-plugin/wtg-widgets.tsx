import * as React from 'react'

export const WishWidget = ( props ) => (
	<span 
		dangerouslySetInnerHTML={{ __html: `
			<WishWidget ${ propsToString( props ) }/>
		`}}
	/>
)

export const TravelPlanWidget = ( props ) => (
	<span 
		dangerouslySetInnerHTML={{ __html: `
			<TravelPlanWidget ${ propsToString( props ) }/>
		`}}
	/>
)

export const WishCounterWidget = ( props ) => (
	<span 
		dangerouslySetInnerHTML={{ __html: `
			<div class="stick-to-bottom">
				<WishCounterWidget ${ propsToString( props ) }/>
			</div>
		`}}
	/>
)

export const ShareTripWidget = ( props ) => (
	<span 
		dangerouslySetInnerHTML={{ __html: `
			<ShareTripWidget ${ propsToString( props ) }/>
		`}}
	/>
)

function propsToString( props: {} ) {
	return Object.keys( props ).map( 
		item => `${ camelToSnakeCase( item ) }="${ props[ item ] }"`
	).join(' ')
}

function camelToSnakeCase( str: string, snakeChar: string = '-' ) {
	return str[0].toLowerCase() + str.slice(1).replace(/([A-Z])/g, g => snakeChar + g[0].toLowerCase() );
}
