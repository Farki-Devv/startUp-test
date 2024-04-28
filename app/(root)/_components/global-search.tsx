'use client'
import SearchCard from '@/components/card/search'
import { Badge } from '@/components/ui/badge'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { popularCategories, popularTags } from '@/constants'
import { getSearchBlogs } from '@/service/blog.service'
import { IBlog } from '@/types'
import { debounce } from 'lodash'
import { Loader2, Minus, Search } from 'lucide-react'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'

function GlobalSearch() {
	const [isLoading, setIsLoading] = useState(false)
	const [blogs, setBlogs] = useState<IBlog[]>([])

	const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value.toLowerCase()

		if (text && text.length > 2) {
			setIsLoading(true)
			const data = await getSearchBlogs(text)
			setBlogs(data)
			setIsLoading(false)
		} else {
			setBlogs([])
			setIsLoading(false)
		}
	}

	const debounceSearch = debounce(handleSearch, 400)

	return (
		<Drawer>
			<DrawerTrigger>
				<div className='flex cursor-pointer items-center gap-1 rounded-sm px-3 py-2 transition-colors hover:bg-blue-400/20'>
					<span className='hidden md:flex'>Search</span>
					<Search className='size-4' />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className='container mx-auto max-w-6xl py-12'>
					<Input
						className='bg-secondary'
						placeholder='Type to search blog...'
						onChange={debounceSearch}
						disabled={isLoading}
					/>
					{isLoading && <Loader2 className='mx-auto mt-4 animate-spin' />}
					{blogs.length ? (
						<div className='mt-8 font-createRound text-2xl'>
							{blogs.length} Results found.
						</div>
					) : null}
					<div className='mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6'>
						{blogs &&
							blogs.map(blog => <SearchCard key={blog.slug} {...blog} />)}
					</div>
					{blogs.length ? <Separator className='mt-3' /> : null}
					<div className='mt-4 flex flex-col space-y-2'>
						<div className='flex items-center gap-2'>
							<p className='font-createRound text-2xl'>
								See posts by categories
							</p>
							<Minus />

							<Link href={'/categories'}>
								<DrawerClose className='text-blue-500 underline hover:opacity-90'>
									See all
								</DrawerClose>
							</Link>
						</div>
						<div className='flex flex-wrap gap-2'>
							{popularCategories.map(item => (
								<Link key={item.slug} href={`/categories/${item.slug}`}>
									<DrawerClose>
										<Badge variant={'secondary'}>{item.name}</Badge>
									</DrawerClose>
								</Link>
							))}
						</div>
					</div>

					<div className='mt-4 flex flex-col space-y-2'>
						<div className='flex items-center gap-2'>
							<p className='font-createRound text-2xl'>See posts by tags</p>
							<Minus />
							<Link href={'/tags'}>
								<DrawerClose className='text-blue-500 underline hover:opacity-90'>
									See all
								</DrawerClose>
							</Link>
						</div>
						<div className='flex flex-wrap gap-2'>
							{popularTags.map(item => (
								<Link key={item.slug} href={`/tags/${item.slug}`}>
									<DrawerClose>
										<Badge variant={'secondary'}>{item.name}</Badge>
									</DrawerClose>
								</Link>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GlobalSearch
