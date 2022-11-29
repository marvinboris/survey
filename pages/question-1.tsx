import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

import { useContentContext } from '../app/contexts/content'
import { useItemsContext } from '../app/contexts/items'
import { classNames } from '../app/helpers/utils'
import { ProductInterface } from '../app/models/product'

import Layout, { Head } from '../components/frontend/navigation/layout'
import Button from '../components/frontend/ui/form/button'

import { NextPageWithLayout } from './_app'

type ItemBlockProps = ProductInterface & { selected: boolean, select: () => void }

const ItemBlock = ({ name, selected, photo, select }: ItemBlockProps) => <div className='px-[7px] md:px-[8.645px] flex-none w-1/2 md:w-1/6'>
    <div onClick={select} className={classNames('cursor-pointer h-[224.34px] md:h-[165px] rounded-[20px] text-center p-6 md:p-4', selected ? "relative bg-white border border-green/50 md:border-none md:shadow-lg" : "bg-secondary-200")}>
        {selected ? <CheckCircleIcon className='text-green w-8 md:w-5 top-2 right-2 absolute' /> : null}

        <div className='w-full aspect-square md:aspect-[4/3] mb-4'>
            <Image width={500} height={500} src={photo!} alt={name} className="object-contain w-full h-full" />
        </div>

        <div className='font-medium text-[17.92px] md:text-[13.18px]'>{name}</div>
    </div>
</div>

const Question1Page: NextPageWithLayout = () => {
    const { content } = useContentContext()
    const { items, cms: { global: { app_name }, frontend: { header: { menu }, components: { form }, pages: { question_1: cms } } } } = content!

    const { items: selected, setItems: setSelected } = useItemsContext()

    const select = (id: string) => {
        if (selected.map(item => item.id).includes(id)) setSelected(selected => selected.filter(item => item.id !== id))
        else setSelected(selected => selected.concat({ id }))
    }

    const itemsContent = items.map(item => <ItemBlock key={`item-${item.id}`} {...item} selected={selected.map(item => item.id).includes(item.id!)} select={() => select(item.id!)} />)

    return <>
        <Head link='/question-1' title={`${menu.question_1} | ${app_name}`} description={cms.description} />
        <main>
            <section className="container space-y-[115.32px] md:space-y-[34px] pb-[70.5px]">
                <div className='max-w-[887.29px] mx-auto flex flex-wrap gap-y-[12.38px] md:gap-y-[31.03px] md:justify-center'>
                    {itemsContent}
                </div>

                <div className='text-center md:text-right'>
                    <Link href='/question-2'>
                        <Button icon={ArrowRightIcon}><span className='font-medium'>{form.continue}</span></Button>
                    </Link>
                </div>
            </section>
        </main>
    </>
}

Question1Page.getLayout = function getLayout(page: ReactElement) {
    return <Layout menu="question_1" progress={1}>{page}</Layout>
}

export default Question1Page