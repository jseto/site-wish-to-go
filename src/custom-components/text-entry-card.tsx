import * as React from "react";
import { EntryCardProps } from "../components/entry-card";
import { Link } from "gatsby";

export const TextEntryCard = ( props: EntryCardProps ) => (
	
	<Link to={ props.slug }>
		<h3>{ props.heading }</h3>
	</Link>
)
