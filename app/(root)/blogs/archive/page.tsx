import { getArchiveBlogs } from '@/service/blog.service'
import { format } from 'date-fns'
import { Archive, Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Arxivdagi maqolalar',
}


async function ArchivePage() {
	const blogs = await getArchiveBlogs()

	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[40vh] flex-col items-center justify-end'>
				<p className='text-lg text-muted-foreground'>Showing posts from</p>
				<h2 className='section-title mt-2 text-center font-createRound text-4xl'>
					<span>Archive</span>
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
					<Link
						href={'/blogs'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Blogs
					</Link>
					<Dot />
					<p className='text-muted-foreground'>Archive</p>
				</div>
			</div>
			{blogs.map(blog => (
				<>
					<div className='mt-8 flex flex-col space-y-3'>
						<div className='relative'>
							<span className='relative z-20 font-createRound text-5xl'>
								{blog.year}
							</span>
							<Archive className='absolute size-16 -translate-x-4 -translate-y-12 opacity-10' />
						</div>
					</div>
					<div className='mt-8 flex flex-col space-y-2'>
						{blog.blogs.map(item => (
							<div
								className='flex gap-2 text-lg text-muted-foreground'
								key={item.slug}
							>
								<p>{format(new Date(item.createdAt), 'dd MMM')}</p>
								<Dot className='size-8 text-white' />
								<Link
									href={`/blogs/${item.slug}`}
									className='cursor-pointer hover:text-white hover:underline'
								>
									{item.title}
								</Link>
							</div>
						))}
					</div>
				</>
			))}
		</div>
	)
}

export default ArchivePage
