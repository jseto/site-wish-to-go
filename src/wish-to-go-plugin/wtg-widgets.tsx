import * as React from 'react'
import './wtg-widget-style.scss'

export const WishWidget = ( props ) => (
	<span 
		dangerouslySetInnerHTML={{ __html: `
			<WishWidget ${ propsToString( props ) }/>
		`}}
	/>
)

export const TripPlannerWidget = ( props ) => (
	<span 
		dangerouslySetInnerHTML={{ __html: `
			<TripPlannerWidget ${ propsToString( props ) }/>
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
	props['userId'] && Object.keys( props ).forEach( prop => console.log( prop, props[prop]))
	return Object.keys( props ).map( 
		item => `${ camelToSnakeCase( item ) }="${ props[ item ] }"`
	).join(' ')
}

function camelToSnakeCase( str: string, snakeChar: string = '-' ) {
	return str[0].toLowerCase() + str.slice(1).replace(/([A-Z])/g, g => snakeChar + g[0].toLowerCase() );
}
