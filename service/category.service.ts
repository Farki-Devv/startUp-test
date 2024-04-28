import { IBlog, ICatergoryAndTags } from '@/types'
import request, { gql } from 'graphql-request'
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getCategories = async () => {
	const query = gql`
		query MyQuery {
			categories {
				name
				slug
			}
		}
	`
	const { categories } = await request<{ categories: ICatergoryAndTags[] }>(
		graphqlApi,
		query
	)
	return categories
}
export const getBlogsByCategory = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			category(where: { slug: $slug }) {
				blogs {
					descriptions
					author {
						name
						bio
						image {
							url
						}
					}
					contenent {
						html
					}

					createdAt
					image {
						url
					}
					slug
					tag {
						name
						slug
					}
					category {
						name
						slug
					}
					title
				}
				name
			}
		}
	`
	const { category } = await request<{
		category: { blogs: IBlog[]; name: string }
	}>(graphqlApi, query, {
		slug,
	})
	return category
}
