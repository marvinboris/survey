import NextHead from 'next/head'
import { ReactNode, useState } from 'react'

import { useContentContext } from '../../../app/contexts/content'
import ItemsContext, { ItemsType } from '../../../app/contexts/items'

import Toolbar from './toolbar'

interface LayoutProps {
    menu: 'question_1' | 'question_2' | 'question_3'
    progress: number
    children: ReactNode
}

export default function Layout({ menu, progress, children }: LayoutProps) {
    const [items, setItems] = useState<ItemsType>([])
    
    const { content } = useContentContext()
    const { cms: { frontend: { pages: { [menu]: cms } } } } = content!

    return <ItemsContext.Provider value={{ items, setItems }}>
        <div className='min-h-screen flex flex-col relative bg-secondary-100'>
            <Toolbar title={cms.page_title} description={cms.page_description} progress={progress} />

            <div className="main-wrapper">
                {children}
            </div>
        </div>
    </ItemsContext.Provider>
}

interface PageParams {
    link: string
    title: string
    description: string
}

export const Head = ({ link, title, description }: PageParams) => <NextHead>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={link} />

    <meta property='og:title' content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={link} />

    <meta property='twitter:title' content={title} />
    <meta property="twitter:description" content={description} />
</NextHead>