import BlogCard from '@/components/card/blog'
import { getBlogsByCategory } from '@/service/category.service'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export async function generateMetadata({
	params,
}: {
	params: { slug: string }
}) {
	const blog = await getBlogsByCategory(params.slug)

	return {
		title: blog.name,
	}
}
async function Page({ params }: { params: { slug: string } }) {
	const category = await getBlogsByCategory(params.slug)
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[30vh] flex-col items-center justify-end'>
				<h2 className='section-title mt-2 text-center font-createRound text-4xl'>
					<span>{category.name}</span>
				</h2>

				<div className='mt-4 flex items-center gap-1'>
					<Home className='size-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Home
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Category</p>
				</div>
			</div>
			<div className='mt-24 grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1'>
				{category.blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}

export default Page
