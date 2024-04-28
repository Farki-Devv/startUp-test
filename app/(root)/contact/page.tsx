import ContactForm from '@/components/forms/contact'
import { Dot, Home, Mail, Phone } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'


export const metadata: Metadata = {
	title: 'Kontakt ma`lumotlari',
}
function ContactPage() {
	return (
		<div className='mx-auto max-w-6xl'>
			<div className='relative flex min-h-[40vh] flex-col items-center justify-end'>
				<h2 className='section-title mt-2 text-center font-createRound text-4xl'>
					<span>Contact</span>
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
					<p className='text-muted-foreground'>Contact</p>
				</div>
			</div>

			<div className='mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1'>
				<div className='flex flex-col'>
					<h1 className='font-createRound text-4xl'>Contact Sammi</h1>
					<p className='mt-2 text-muted-foreground'>
						I am here to help and answer any question you might have. I look
						forward to hearing from you
					</p>

					<div className='mt-12 flex items-center gap-3'>
						<Mail className='size-4' />
						<p className='text-sm'>info@sammi.ac</p>
					</div>
					<div className='mt-2 flex items-center gap-3'>
						<Phone className='size-4' />
						<p className='text-sm'>+98 02 296 4902</p>
					</div>
				</div>

				<div>
					<h1 className='mb-2 font-createRound text-4xl'>Contact form</h1>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
