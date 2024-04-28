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
					<span>Biz haqimizda</span>
				</h2>
				<div className='mt-4 flex items-center gap-1'>
					<Home className='size-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						Bosh sahifa
					</Link>
					<Dot />
					<p className=' text-muted-foreground'>Biz haqimizda</p>
				</div>
			</div>
			<h1 className='text-center font-createRound text-4xl'>
				Bizning dizaynerlarizmiz <br /> va bizning jamoamiz.
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
					Biz ning har bir maqolamizda sizga foydali malumotlar bor har birini
					sinchkovlik ilan kuzating va video darslikni koring
				</p>
			</div>

			<h2 className='section-title my-12 text-center font-createRound text-4xl'>
				<span>Bizning o`qituvchilar</span>
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
