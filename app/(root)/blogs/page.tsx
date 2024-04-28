import BlogCard from '@/components/card/blog'

import { getBlogs } from '@/service/blog.service'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
export const metadata: Metadata = {
	title: 'Barcha maqolalar',
}

async function Page() {
	const blogs = await getBlogs()
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[40vh] flex-col items-center justify-end'>
				<h2 className='section-title text-center font-createRound text-4xl'>
					<span>Maqolalar</span>
				</h2>
				<div className='mt-4 flex items-center gap-1'>
					<Home />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Bosh sahifa
					</Link>
					<Dot />
					<p className='text-muted-foreground'>maqolalar</p>
				</div>
			</div>
			<div className='mt-24 grid grid-cols-2 gap-x-4 gap-y-24 max-md:grid-cols-1'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}

export default Page
