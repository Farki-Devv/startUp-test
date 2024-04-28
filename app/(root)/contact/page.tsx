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
					<span>Kotakt</span>
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
					<p className='text-muted-foreground'>Kontakt</p>
				</div>
			</div>

			<div className='mt-6 grid grid-cols-2 gap-4 max-md:grid-cols-1'>
				<div className='flex flex-col'>
					<h1 className='font-createRound text-4xl'>
						Contact Farrux Ganiboyev
					</h1>
					<p className='mt-2 text-muted-foreground'>
						Menga email orqali murojat qilsihingiz yki shu contact formaga habar
						yuborishingiz mumkin
					</p>

					<div className='mt-12 flex items-center gap-3'>
						<Mail className='size-4' />
						<p className='text-sm'>ganiboyevfarrux468@gmail.com</p>
					</div>
					<div className='mt-2 flex items-center gap-3'>
						<Phone className='size-4' />
						<p className='text-sm'>94 947 20 41</p>
					</div>
				</div>

				<div>
					<h1 className='mb-2 font-createRound text-4xl'>Kontakt Form</h1>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
