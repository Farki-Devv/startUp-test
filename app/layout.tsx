/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Crete_Round, Work_Sans } from 'next/font/google'
import './globals.css'
import React from 'react'
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme-provider'
import NextTopLoader from 'nextjs-toploader'
const createRound = Crete_Round({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-createRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})
export const metadata: Metadata = {
	metadataBase: new URL('https://ganiboyev.com'),
	title: 'Frontend dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar , maslahatlar, projectlar va dasturlash sohasidagi eng so`nggi xabarlar. Bizning blogda dasturlashni o`rganish va rivojlantrish uchun qo`llanma topishingiz mumkin.',
	authors: [{ name: 'Farrux Ganiboyev', url: 'https://ganiboyev.com' }],
	icons: { icon: '/logo.svg' },
	keywords:
		"Farrux Ganiboyev, dasturlash darslari ,dasturlashga oid maqolalar, reactjs, nextjs, javascript, typescript, nodejs, html, css, tailwind, bootstrap, dasturlash sohasi, dasturlash maqolalari uzbek tilida ,dasturlash darslari o'zbek tilida ",
	openGraph: {
		title: 'Frontend dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar , maslahatlar, projectlar va dasturlash sohasidagi eng so`nggi xabarlar. Bizning blogda dasturlashni o`rganish va rivojlantrish uchun qo`llanma topishingiz mumkin.',
		type: 'website',
		url: 'https://test-blog.sammi.ac',
		locale: 'en_EN',
		images: 'https://media.graphassets.com/kXL006lyRnW46IKTHdHs',
		countryName: 'Uzbekistan',
		siteName: 'blog',
		emails: 'ganiboyevfarrux468@gmail.com',
	},
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${createRound.variable} ${workSans.variable}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NextTopLoader />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export default RootLayout
