import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useEffect } from 'react'

import { classNames } from '../app/helpers/utils'
import { useContentContext } from '../app/contexts/content'
import { useItemsContext } from '../app/contexts/items'
import { Range } from '../app/models'
import { RangeInterface } from '../app/models/range'
import { ProductInterface } from '../app/models/product'

import Layout, { Head } from '../components/frontend/navigation/layout'
import Button from '../components/frontend/ui/form/button'

import { NextPageWithLayout } from './_app'

type ItemBlockProps = ProductInterface & { ranges: RangeInterface[] }

const ItemBlock = ({ id, name, photo, ranges }: ItemBlockProps) => {
    const { content } = useContentContext()
    const { cms: { frontend: { components: { item_block } } } } = content!

    const { items, setItems } = useItemsContext()
    const { range } = items.find(item => item.id === id)!

    return <div className='px-[8.645px] w-1/5'>
        <div className={classNames('px-4 rounded-[26.4571px] border-[0.88px] bg-white', range !== undefined ? "border-green" : "border-red")}>
            <div className="py-6 flex items-center">
                <div className="bg-secondary-100 rounded-[12.3467px] mr-[13.23px] w-[53px] flex-none p-1">
                    <Image width={200} height={200} src={photo!} alt={name} className="object-contain w-full h-full" />
                </div>

                <div className='space-y-[5.81px]'>
                    <div className="font-semibold text-sm">{name}</div>
                    <div className="text-[10.58px]">{range !== undefined ? <span>{item_block.selected} <CheckCircleIcon className='inline-block w-3 text-green' /></span> : <span className='text-red'>{item_block.select}</span>}</div>
                </div>
            </div>

            <div className="h-[0.88px]">
                <div className='h-full inline-block w-1/2 bg-gradient-to-l from-secondary-200 to-transparent' />
                <div className='h-full inline-block w-1/2 bg-gradient-to-r from-secondary-200 to-transparent' />
            </div>

            <div className="py-8 space-y-[6.17px]">
                {ranges.map(el => <div key={`item-block-${id}-${el.id}`} onClick={() => setItems(items => {
                    const itemsCp = [...items]
                    const itemIdx = itemsCp.findIndex(item => item.id === id)
                    itemsCp[itemIdx].range = el.id

                    return itemsCp
                })} className={classNames(el.id === range ? 'text-white bg-green font-medium' : 'bg-secondary-200 cursor-pointer', 'inline-block mr-[6.17px] text-[10.58px] rounded-[5.29px] py-2 px-2.5')}>{el.name}</div>)}
            </div>
        </div>
    </div>
}

const Question3Page: NextPageWithLayout<{ ranges: RangeInterface[] }> = ({ ranges }) => {
    const router = useRouter()

    const { content } = useContentContext()
    const { items, cms: { global: { app_name }, frontend: { components: { form }, pages: { question_3: cms } } } } = content!

    const { items: selected } = useItemsContext()
    const itemsContent = items.filter(item => selected.map(item => item.id).includes(item.id!)).map(item => <ItemBlock key={`item-${item.id}`} {...item} ranges={ranges} />)

    useEffect(() => {
        if (selected.length === 0) router.push('/question-1')
      }, [router, selected.length])

    return <>
        <Head link='/question-3' title={`${cms.title} | ${app_name}`} description={cms.description} />
        <main>
            <section className="container space-y-[34px]">
                <div className='flex justify-center'>
                    {itemsContent}
                </div>

                <div className='text-right'>
                    <Link href='/congrats'>
                        <Button icon={ArrowRightIcon}><span className='font-medium'>{form.submit}</span></Button>
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