import { CheckIcon } from '@heroicons/react/20/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import { useContentContext } from '../../../../app/contexts/content'
import { classNames } from '../../../../app/helpers/utils'

type ToolbarProps = {
    menu: 'question_1' | 'question_2' | 'question_3',
    progress: number
}

export default function Toolbar({ menu, progress }: ToolbarProps) {

    const { content } = useContentContext()
    const { cms: { frontend: { pages: { [menu]: cms } } } } = content!

    return (
        <div className="w-full top-0 mb-[95px] md:mb-0">
            <div className="container">
                <div className="flex items-end md:hidden h-[140px] mb-[29px]">
                    <div className="flex flex-1 items-center">
                        <Link href={progress === 1 ? '/' : `/question-${progress - 1}`} className='bg-primary/10 rounded-full w-11 h-11 flex items-center justify-center'><ArrowLeftIcon className='text-primary w-4' /></Link>
                        <div className="ml-6 rounded-lg text-sm font-medium py-2.5 bg-green text-white px-[13px]">{cms.title}</div>
                        <div className='ml-auto'>
                            <div className={classNames("w-16 h-16 rotate-45 rounded-full border-[4px] flex items-center justify-center border-t-green border-l-green/10", progress > 1 ? "border-r-green" : "border-r-green/40", progress > 2 ? "border-b-green" : "border-b-green/20")}>
                            <div className='flex items-center -rotate-45'>
                                <span className='text-[13.14px] font-bold text-green'>{progress}</span><span className='font-medium'>/4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:flex items-center md:h-[192px]">
                <div className="space-y-1.5 md:space-y-[7.5px]">
                    <h1 className='font-bold text-[30px] md:text-[32.9px]'>{cms.page_title}</h1>
                    <p className='p-5 md:p-0 rounded-[10px] bg-[#E1EAF1] md:bg-transparent md:text-[16.45px]'>{cms.page_description}</p>
                </div>

                <div className='ml-auto hidden md:flex items-center relative'>
                    <div className="h-2 bg-green/20 rounded-full flex items-center relative w-80">
                        <div className='absolute -inset-x-3.5 text-lg flex items-center justify-between'>
                            <div className='bg-white relative rounded-full w-7 h-7 border-[5px] border-green text-green flex items-center justify-center'><CheckIcon className='w-[9px]' />{progress === 1 ? <span className="absolute text-secondary-600 -top-9 font-medium">1/<span className='font-bold text-green'>4</span></span> : null}</div>
                            <div className={classNames(progress > 1 ? "bg-white relative border-green text-green flex items-center justify-center" : "bg-secondary-100 border-green/20", 'rounded-full w-7 h-7 border-[5px]')}>{progress > 1 ? <CheckIcon className='w-[9px]' /> : null}{progress === 2 ? <span className="absolute text-secondary-600 -top-9 font-medium">2/<span className='font-bold text-green'>4</span></span> : null}</div>
                            <div className={classNames(progress > 2 ? "bg-white relative border-green text-green flex items-center justify-center" : "bg-secondary-100 border-green/20", 'rounded-full w-7 h-7 border-[5px]')}>{progress > 2 ? <CheckIcon className='w-[9px]' /> : null}{progress === 3 ? <span className="absolute text-secondary-600 -top-9 font-medium">3/<span className='font-bold text-green'>4</span></span> : null}</div>
                            <div className={classNames(progress > 3 ? "bg-white relative border-green text-green flex items-center justify-center" : "bg-secondary-100 border-green/20", 'rounded-full w-7 h-7 border-[5px]')}>{progress > 3 ? <CheckIcon className='w-[9px]' /> : null}{progress === 4 ? <span className="absolute text-secondary-600 -top-9 font-medium">4/<span className='font-bold text-green'>4</span></span> : null}</div>
                        </div>
                        <div className={classNames("h-full bg-green flex-none rounded-full transition-all duration-200", progress === 1 ? "w-1/6" : progress === 2 ? "w-1/2" : progress === 3 ? "w-5/6" : "")} />
                    </div>
                </div>
            </div>
        </div>
        </div >
    )
}
