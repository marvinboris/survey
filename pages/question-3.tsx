import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'

import { useContentContext } from '../app/contexts/content'
import { useItemsContext } from '../app/contexts/items'
import { Range } from '../app/models'
import { RangeInterface } from '../app/models/range'

import Layout, { Head } from '../components/frontend/navigation/layout'
import ItemBlock from '../components/frontend/ui/blocks/item'
import Button from '../components/frontend/ui/form/button'

import { NextPageWithLayout } from './_app'

const Question3Page: NextPageWithLayout<{ ranges: RangeInterface[] }> = ({ ranges }) => {
    const router = useRouter()

    const { content } = useContentContext()
    const { items, cms: { global: { app_name }, frontend: { components: { form }, pages: { question_3: cms } } } } = content!

    const { items: selected } = useItemsContext()
    const itemsContent = items.filter(item => selected.map(item => item.id).includes(item.id!)).map(item => <ItemBlock key={`item-${item.id}`} {...item} addons={ranges} addon="range" />)

    useEffect(() => {
        if (selected.length === 0) router.push('/question-1')
      }, [router, selected.length])

    return <>
        <Head link='/question-3' title={`${cms.title} | ${app_name}`} description={cms.description} />
        <main>
            <section className="container space-y-[116.29px] md:space-y-[34px] pb-[70.5px] md:pb-0">
                <div className='md:flex justify-center'>
                    {itemsContent}
                </div>

                <div className='text-center md:text-right'>
                    <Link href='/question-4'>
                        <Button icon={ArrowRightIcon}><span className='font-medium'>{form.continue}</span></Button>
                    </Link>
                </div>
            </section>
        </main>
    </>
}

Question3Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout menu="question_3" progress={3}>{page}</Layout>
}

export async function getServerSideProps() {
    const ranges = await Range.find()

    return { props: { ranges: JSON.parse(JSON.stringify(ranges.map(range => range.toObject()))) } }
}

export default Question3Page