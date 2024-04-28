import { IAuthor } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!
export const getAuthora = async () => {
	const query = gql`
		query MyQuery {
			authors {
				name
				id
				bio
				image {
					url
				}
				blogs {
					id
				}
			}
		}
	`
	const { authors } = await request<{ authors: IAuthor[] }>(graphqlApi, query)
	return authors
}
export const getDetailedAuthor = async (id: string) => {
	const query = gql`
		query MyQuery($id: ID) {
			author(where: { id: $id }) {
				bio
				image {
					url
				}
				name
				id
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
			}
		}
	`
	const { author } = await request<{
		author: IAuthor
	}>(graphqlApi, query, {
		id,
	})
	return author
}
