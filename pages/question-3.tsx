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

    return <div className='md:px-[8.645px] pb-4 md:pb-0 md:w-1/5'>
        <div className={classNames('px-6 md:px-4 rounded-[28px] md:rounded-[26.4571px] border-[1.45px] md:border-[0.88px] bg-white', range !== undefined ? "border-green/50" : "border-red/50")}>
            <div className="py-6 flex items-center">
                <div className="bg-secondary-100 aspect-square rounded-[12.3467px] mr-[21.73px] md:mr-[13.23px] w-[86.9px] md:w-[53px] flex-none p-1">
                    <Image width={200} height={200} src={photo!} alt={name} className="object-contain w-full h-full" />
                </div>

                <div className='space-y-[9.41px] md:space-y-[5.81px]'>
                    <div className="font-semibold text-[22.99px] md:text-sm">{name}</div>
                    <div className="text-[17.38px] md:text-[10.58px]">{range !== undefined ? <span>{item_block.selected} <CheckCircleIcon className='inline-block w-5 md:w-3 text-green' /></span> : <span className='text-red'>{item_block.select}</span>}</div>
                </div>
            </div>

            <div className="h-[0.88px]">
                <div className='h-full inline-block w-1/2 bg-gradient-to-l from-secondary-200 to-transparent' />
                <div className='h-full inline-block w-1/2 bg-gradient-to-r from-secondary-200 to-transparent' />
            </div>

            <div className="py-8 space-y-[10.11px] md:space-y-[6.17px]">
                {ranges.map(el => <div key={`item-block-${id}-${el.id}`} onClick={() => setItems(items => {
                    const itemsCp = [...items]
                    const itemIdx = itemsCp.findIndex(item => item.id === id)
                    itemsCp[itemIdx].range = el.id

                    return itemsCp
                })} className={classNames(el.id === range ? 'text-white bg-green font-medium' : 'bg-secondary-200 cursor-pointer', 'inline-block mr-[10.11px] md:mr-[6.17px] text-[17.33px] md:text-[10.58px] rounded-[8.67px] md:rounded-[5.29px] py-2 px-2.5')}>{el.name}</div>)}
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
            <section className="container space-y-[116.29px] md:space-y-[34px] pb-[70.5px] md:pb-0">
                <div className='md:flex justify-center'>
                    {itemsContent}
                </div>

                <div className='text-center md:text-right'>
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