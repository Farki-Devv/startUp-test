import { ICatergoryAndTags } from '@/types'
import { Layers2, Tags } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props extends ICatergoryAndTags {
	type: 'categories' | 'tags'
}
function CategoriesTags(item: Props) {
	return (
		<Link
			href={`/${item.type}/${item.slug}`}
			className=' flex items-center gap-4 rounded-md bg-secondary p-4 shadow-md transition-colors hover:bg-secondary/80 dark:shadow-white/20 md:p-8'
		>
			{item.type === 'categories' ? <Layers2 /> : <Tags />}
			<h1 className='font-createRound text-2xl'>{item.name} </h1>
		</Link>
	)
}

export default CategoriesTags
