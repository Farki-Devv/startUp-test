import BlogCard from '@/components/card/blog'
import BgArrow from '@/components/shared/bg-arrow'
import { getBlogs } from '@/service/blog.service'

async function Page() {
	const blogs = await getBlogs()
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[60vh] items-center justify-center'>
				<h1 className='max-w-2xl text-center font-createRound text-3xl md:text-4xl lg:text-5xl'>
					Frontend - Dasturlashga oid maqolalar va darsliklar to`plami
				</h1>
				<BgArrow />
			</div>
			<h2 className='section-title text-center font-createRound text-4xl'>
				<span>Mashhur bloglar</span>
			</h2>
			<div className='mt-24 flex flex-col space-y-24'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} />
				))}
			</div>
		</div>
	)
}

export default Page
