import BlogCard from '@/components/card/blog'
import { getDetailedAuthor } from '@/service/author.service'
import Image from 'next/image'

async function Page({ params }: { params: { id: string } }) {
	const author = await getDetailedAuthor(params.id)

	return (
		<div className='mx-auto max-w-6xl pt-36'>
			<div className='mt-6 flex items-center gap-6 max-md:flex-col'>
				<Image
					src={author.image.url}
					alt='author'
					width='200'
					height='200'
					className='rounded-md max-md:self-start'
				/>
				<div className='flex flex-1 flex-col space-y-4'>
					<p className='text-xl text-muted-foreground'>
						<span className='font-bold text-white'>{author.blogs.length}</span>{' '}
						Published posts
					</p>
					<h2 className='font-createRound text-3xl'>{author.name}</h2>
					<p className='line-clamp-2 max-w-xl text-muted-foreground'>
						{author.bio}
					</p>
				</div>
			</div>

			<h2 className='section-title my-12 text-center font-createRound text-4xl'>
				<span>Published posts</span>
			</h2>

			<div className='mt-24 flex flex-col space-y-24'>
				{author.blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} />
				))}
			</div>
		</div>
	)
}

export default Page
