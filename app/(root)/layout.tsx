import { ChildProps } from '@/types'
import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import { Toaster } from 'sonner'

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			<div className='container'>
				{children}
				<Toaster />
			</div>
			<Footer />
		</main>
	)
}

export default Layout
