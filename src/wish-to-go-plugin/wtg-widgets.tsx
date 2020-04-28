import * as React from 'react'

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
			<WishCounterWidget ${ propsToString( props ) }/>
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
		item => `${ item }="${ props[ item ] }"`
	).join(' ')
}