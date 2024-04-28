'use client'
import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'

import Link from 'next/link'
import React from 'react'
import GlobalSearch from './global-search'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Mobile from './mobile'

function Navbar() {
	const pathname = usePathname()
	return (
		<div className='fixed inset-0 z-40 h-[10vh] border-b bg-background backdrop-blur-sm'>
			<div className='container mx-auto flex h-[10vh] w-full max-w-6xl items-center justify-between'>
				{/* logo */}
				<Link href={'/'}>
					<span className='font-createRound text-4xl'>Ganiboyev</span>
				</Link>
				{/* nav links */}
				<div className='hidden gap-2 md:flex'>
					{navLinks.map((nav, index) => (
						<Link
							key={nav.name}
							href={nav.route}
							className={cn(
								'cursor-pointer rounded-md px-3 py-1 transition-colors',
								pathname === nav.route && 'text-blue-400',
								index === navLinks.length - 1 &&
									'text-white-400 border-purple-400 border-[1px]' // Eng oxirgi elementga qizil rang berish
							)}
						>
							{nav.name}
							{index === navLinks.length - 1 && (
								<span className='float-end ml-2 text-xs'>new</span>
							)}{' '}
							{/* Eng oxirgi elementga "new" yozuvini qo'shish */}
						</Link>
					))}
				</div>
				{/* search */}
				<div className='flex items-center gap-1'>
					{/* globalsearch */}
					<GlobalSearch />
					{/* themings */}
					<ModeToggle />
					{/* mobile */}
					<Mobile />
				</div>
			</div>
		</div>
	)
}

export default Navbar
