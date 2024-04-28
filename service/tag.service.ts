import { IBlog, ICatergoryAndTags } from '@/types'
import request, { gql } from 'graphql-request'
const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getTags = async () => {
	const query = gql`
		query MyQuery {
			tags {
				name
				slug
			}
		}
	`
	const { tags } = await request<{ tags: ICatergoryAndTags[] }>(
		graphqlApi,
		query
	)
	return tags
}
export const getBlogsByTag = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			tag(where: { slug: $slug }) {
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
	const { tag } = await request<{ tag: { blogs: IBlog[]; name: string } }>(
		graphqlApi,
		query,
		{
			slug,
		}
	)
	return tag
}
