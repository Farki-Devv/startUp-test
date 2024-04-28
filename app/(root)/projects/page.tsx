import { Button } from '@/components/ui/button'
import { Dot, Home, Send } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Page() {
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[40vh] flex-col items-center justify-end'>
				<h2 className='section-title mt-2 text-center font-createRound text-4xl'>
					<span>Loyihalar</span>
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
					<p className='text-muted-foreground'>Loyihalar</p>
				</div>
			</div>

			<div className='mx-auto mt-4 flex max-w-4xl flex-col	 items-center justify-center gap-y-2'>
				<span className='text-center'>
					Assalomu alikum do`slar bu sahifada InshaAlloh loyihalar ham
					chiqadi.Sizning fikringiz men uchun qiziq agarda sizda qandaydur idea
					bo`lsa menga yozung men o`sha loyihani qilishga harakat qilaman{' '}
				</span>

				<Link href={'/contact'} className='text-blue-400'>
					<Button>
						Idea yuborish <Send className='ml-2 flex size-4 items-center' />
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default Page
