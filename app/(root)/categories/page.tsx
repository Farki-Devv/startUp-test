import CategoriesTags from '@/components/card/categories-tags'
import { getCategories } from '@/service/category.service'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
	title: 'Barcha kategoryalar',
}

async function Page() {
	const categories = await getCategories()
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[30vh] flex-col items-center justify-end'>
				<h2 className='section-title mt-2 text-center font-createRound text-4xl'>
					<span>Categories</span>
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
					<p className='text-muted-foreground'>Categories</p>
				</div>
			</div>
			<div className='mt-24 grid grid-cols-1 gap-x-4 gap-y-24  md:grid-cols-2 lg:grid-cols-3 '>
				{categories.map(item => (
					<CategoriesTags key={item.slug} {...item} type='categories' />
				))}
			</div>
		</div>
	)
}

export default Page
