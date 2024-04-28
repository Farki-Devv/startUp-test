'use client'
import { IBlog } from '@/types'
import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Badge } from '../ui/badge'
import { cn, getReadingTime } from '@/lib/utils'
import { format } from 'date-fns'
interface Props extends IBlog {
	isVertical?: boolean
}
function BlogCard(blog: Props) {
	return (
		<div
			className={cn(
				'group grid  gap-4 ',
				blog.isVertical ? 'grid-cols-1 ' : 'grid-cols-1 md:grid-cols-2'
			)}
		>
			<Link href={`/blogs/${blog.slug}`}>
				<div className='relative rounded-md bg-secondary'>
					<Image
						width={650}
						height={336}
						src={blog.image.url}
						alt=''
						className='-translate-y-6 rounded-md object-cover px-2 grayscale transition-transform group-hover:-translate-y-7 group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3 md:px-7'
					/>
				</div>
			</Link>
			<div className='flex flex-col space-y-2'>
				<Link href={`/blogs/${blog.slug}`} className='flex flex-col space-y-2'>
					{/* time info */}
					<div className='flex items-center gap-4 '>
						<div className='flex items-center gap-2'>
							<CalendarDays className='size-4' />
							<p>{format(new Date(blog.createdAt), ' MMM dd, yyyy')}</p>
						</div>
						<Minus />
						<div className='flex items-center gap-2'>
							<Clock className='size-4' />
							<p>{getReadingTime(blog.contenent.html)} min read</p>
						</div>
					</div>
					{/* title */}
					<h2 className='font-createRound text-3xl transition-colors group-hover:text-blue-400 max-md:text-2xl'>
						{blog.title}
					</h2>
					<p className='line-clamp-3 text-muted-foreground'>
						{blog.descriptions}
					</p>
				</Link>

				{/* author */}
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-2'>
						<Image
							src={blog.author.image.url}
							alt=''
							width={30}
							height={30}
							className='rounded-md object-cover'
						/>
						<p>by {blog.author.name}</p>
					</div>
					<Dot />
					<div className='flex items-center gap-2'>
						<Link href={`/tags/${blog.tag.slug}`}>
							<Badge variant={'secondary'} role='button'>
								<Tag className='mr-2 size-4' />
								{blog.tag.name}
							</Badge>
						</Link>
						<Link href={`/categories/${blog.category.slug}`}>
							<Badge variant={'outline'} role='button'>
								<Layers2 className='mr-2 size-4' />
								{blog.category.name}
							</Badge>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
