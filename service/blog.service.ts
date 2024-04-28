import { IArchivedBlog, IBlog } from '@/types'
import request, { gql } from 'graphql-request'

const graphqlApi = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: false }) {
				title
				author {
					name
					image {
						url
					}
				}
				category {
					name
					slug
				}
				descriptions
				tag {
					name
					slug
				}
				image {
					url
				}
				createdAt
				contenent {
					html
				}
				slug
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlApi, query)
	return blogs
}

export const getDetailedBlog = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				author {
					name
					bio
					id
					image {
						url
					}
				}
				youtubeurl
				contenent {
					html
				}

				createdAt
				image {
					url
				}
				slug
				category {
					name
					slug
				}
				tag {
					name
					slug
				}

				title
			}
		}
	`
	const { blog } = await request<{ blog: IBlog }>(graphqlApi, query, { slug })
	return blog
}

export const getSearchBlogs = async (title: string) => {
	const query = gql`
		query MyQuery($title: String!) {
			blogs(where: { title_contains: $title }) {
				id
				title
				image {
					url
				}
				slug
				createdAt
			}
		}
	`
	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlApi, query, {
		title,
	})
	return blogs
}

export const getArchiveBlogs = async () => {
	const query = gql`
		query MyQuery {
			blogs(where: { archive: true }) {
				title
				createdAt
				slug
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlApi, query)
	const filteredBlogs = blogs.reduce(
		(acc: { [year: string]: IArchivedBlog }, blog: IBlog) => {
			const year = blog.createdAt.substring(0, 4)
			if (!acc[year]) {
				acc[year] = { year, blogs: [] }
			}
			acc[year].blogs.push(blog)
			return acc
		},
		{}
	)
	const results: IArchivedBlog[] = Object.values(filteredBlogs)
	return results
}
