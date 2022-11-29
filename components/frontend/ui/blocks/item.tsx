import { CheckCircleIcon } from "@heroicons/react/20/solid"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useState } from "react"

import { useContentContext } from "../../../../app/contexts/content"
import { useItemsContext } from "../../../../app/contexts/items"

import { classNames } from "../../../../app/helpers/utils"
import { useWindowSize } from "../../../../app/hooks"

import { FrequencyInterface } from "../../../../app/models/frequency"
import { ProductInterface } from "../../../../app/models/product"
import { RangeInterface } from "../../../../app/models/range"
import { RecommendInterface } from "../../../../app/models/recommend"

type ItemBlockProps = ProductInterface & { addons: FrequencyInterface[] | RangeInterface[] | RecommendInterface[], addon: 'frequency' | 'range' | 'recommend' }

export default function ItemBlock({ id, name, photo, addons, addon }: ItemBlockProps) {
    const [open, setOpen] = useState(false)
    const { width } = useWindowSize()

    const { content } = useContentContext()
    const { cms: { frontend: { components: { item_block } } } } = content!

    const { items, setItems } = useItemsContext()
    const { [addon]: item } = items.find(item => item.id === id)!

    const isOpen = width! > 768 || item === undefined || open

    return <div className='md:px-[8.645px] pb-4 md:pb-0 md:w-1/5'>
        <div className={classNames('px-6 md:px-4 relative rounded-[28px] md:rounded-[26.4571px] border-[1.45px] md:border-[0.88px] bg-white', item !== undefined ? "border-green/50" : "border-red/50")}>
            <div className="py-6 flex items-center">
                <div className="bg-secondary-100 aspect-square rounded-[12.3467px] mr-[21.73px] md:mr-[13.23px] w-[86.9px] md:w-[53px] flex-none p-1">
                    <Image width={200} height={200} src={photo!} alt={name} className="object-contain w-full h-full" />
                </div>

                <div className='space-y-[9.41px] md:space-y-[5.81px]'>
                    <div className="font-semibold text-[22.99px] md:text-sm">{name}</div>
                    <div className="text-[17.38px] md:text-[10.58px]">{item !== undefined ? <span>{item_block.selected} <CheckCircleIcon className='inline-block w-5 md:w-3 text-green' /></span> : <span className='text-red'>{item_block.select}</span>}</div>
                </div>

                {item !== undefined && <div onClick={() => setOpen(open => !open)} className="absolute cursor-pointer top-4 right-4 w-[52px] h-[52px] rounded-full bg-green/10 flex md:hidden items-center justify-center text-green">
                    <ChevronDownIcon className={classNames("w-4 transition-all duration-200", open ? "rotate-180" : "rotate-0")} />
                </div>}
            </div>

            <div className={classNames(isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0", "transition-all duration-200")}>
                <div className="h-[0.88px]">
                    <div className='h-full inline-block w-1/2 bg-gradient-to-l from-secondary-200 to-transparent' />
                    <div className='h-full inline-block w-1/2 bg-gradient-to-r from-secondary-200 to-transparent' />
                </div>

                <div className="py-8 space-y-[10.11px] md:space-y-[6.17px]">
                    {addons.map(el => <div key={`item-block-${id}-${el.id}`} onClick={() => setItems(items => {
                        const itemsCp = [...items]
                        const itemIdx = itemsCp.findIndex(item => item.id === id)
                        itemsCp[itemIdx][addon] = el.id

                        if (width! <= 768) setOpen(open => !open)

                        return itemsCp
                    })} className={classNames(el.id === item ? 'text-white bg-green font-medium' : 'bg-secondary-200 cursor-pointer', 'inline-block mr-[10.11px] md:mr-[6.17px] text-[17.33px] md:text-[10.58px] rounded-[8.67px] md:rounded-[5.29px] py-2 px-2.5')}>{el.name}</div>)}
                </div>
            </div>
        </div>
    </div>
}