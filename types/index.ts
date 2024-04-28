import { ReactNode } from 'react'

export interface ChildProps {
	children: ReactNode
}
export interface IArchivedBlog {
	year: string
	blogs: IBlog[]
}
export interface IBlog {
	title: string
	descriptions: string
	author: IAuthor
	category: ICatergoryAndTags
	tag: ICatergoryAndTags
	image: {
		url: string
	}
	createdAt: string
	contenent: { html: string }
	slug: string
}
export interface IAuthor {
	name: string
	id: string
	image: {
		url: string
	}
	blogs: IBlog[]
	bio: string
}
export interface ICatergoryAndTags {
	name: string
	slug: string
}
