import AuthorCard from '@/components/card/author'
import { getAuthora } from '@/service/author.service'
import { Dot, Home } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
	title: 'Biz haqimizda',
}
async function Page() {
	const authors = await getAuthora()
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[40vh] flex-col items-center justify-center'>
				<h2 className='section-title text-center font-createRound text-4xl'>
					<span>About</span>
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
					<p className=' text-muted-foreground'>About</p>
				</div>
			</div>
			<h1 className='text-center font-createRound text-4xl'>
				We are the sammi, <br /> Team of content writers and designers.
			</h1>

			<div className='mt-6 grid min-h-96 grid-cols-4 gap-4'>
				<div className='relative col-span-2 h-80 max-md:col-span-4'>
					<Image
						src={'/about/01.jpg'}
						alt='about'
						fill
						className='rounded-md object-cover'
					/>
				</div>
				<div className='relative h-80 self-end max-md:col-span-2 max-md:h-72'>
					<Image
						src={'/about/00.jpg'}
						alt='about'
						fill
						className='rounded-md object-cover'
					/>
				</div>
				<div className='relative h-80  max-md:col-span-2 max-md:h-72'>
					<Image
						src={'/about/02.jpg'}
						alt='about'
						fill
						className='rounded-md object-cover'
					/>
				</div>
			</div>

			<div className='mx-auto mt-12 flex max-w-6xl flex-col space-y-4 text-center text-muted-foreground'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
					minima in delectus perspiciatis, sit ex nulla recusandae ab aliquam,
					voluptas labore? Necessitatibus nulla assumenda dolore porro amet
					consequuntur accusantium laboriosam.
				</p>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde atque
					vitae mollitia nobis laudantium nihil necessitatibus at! Vero odio
					iusto, autem mollitia, eos ad, ipsam architecto inventore optio magnam
					ea.
				</p>
			</div>

			<h2 className='section-title my-12 text-center font-createRound text-4xl'>
				<span>Our writers</span>
			</h2>

			<div className='flex justify-around max-md:flex-col max-md:items-center max-md:space-y-4'>
				{authors.map(c => (
					<AuthorCard key={c.name} {...c} />
				))}
			</div>
		</div>
	)
}

export default Page
