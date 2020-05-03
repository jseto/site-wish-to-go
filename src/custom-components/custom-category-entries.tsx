import * as React from "react";
import { EntryCard } from "../components/entry-card";
import { CategoryEntriesProps, CategoryEntries } from "../components/category-entries";

interface CustomCategoryEntriesProps extends CategoryEntriesProps {
	noImage: boolean;
}

export const CustomCategoryEntries = ( props: CustomCategoryEntriesProps ) => (
	<CategoryEntries {...props}>
		{
			item => {
				const { noImage } = props

				return (
					<EntryCard
						heading={ <span dangerouslySetInnerHTML={{ __html: item.tableOfContents.items[0].title }}/> }
						excerpt={ item.frontmatter.description || item.excerpt }
						imagePath={ !noImage && item.fields.featuredImage }
						slug={ item.fields.slug }
					/>
				)
			}
		}
	</CategoryEntries>
)
