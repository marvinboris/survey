import { Popover, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, ReactNode } from 'react'

import { classNames } from '../../../../app/helpers/utils'

type ToolbarProps = { title: ReactNode, description: ReactNode, progress: number }

export default function Toolbar({ title, description, progress }: ToolbarProps) {
    // const { content } = useContentContext()

    // const { cms: { global: { app_name }, frontend: { header: { menu } } } } = content!

    return (
        <Popover className="sticky w-full top-0 backdrop-filter backdrop-blur">
            {({ close }) => <>
                <div className="container">
                    <div className="flex items-center h-[192px]">
                        <div className="space-y-[7.5px]">
                            <h1 className='font-bold text-[32.9px]'>{title}</h1>
                            <p className='text-[16.45px]'>{description}</p>
                        </div>

                        <div className='ml-auto flex items-center relative'>
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

                <Popover.Overlay className="md:hidden fixed top-0 inset-x-0 h-screen z-40 bg-black/20 dark:bg-secondary-900/80 backdrop-filter backdrop-blur-sm" />
                <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-200 ease-in" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Popover.Panel focus className="fixed inset-x-0 top-0 z-50 md:hidden">
                        <div className="absolute top-0 left-0 w-full pt-4">
                            <div className="container flex justify-end">
                                <Popover.Button className="flex h-10 items-center justify-center rounded-md p-2 -mr-2 focus:outline-none">
                                    <span className="sr-only">Fermer le menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>

                        <div className="mt-[72px] container">
                            <div className="divide-y-2 divide-secondary-50 dark:divide-secondary-200/10 rounded-lg bg-white dark:bg-secondary-800 shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                                <div className="px-5 py-8">
                                    <nav className="grid gap-y-8">
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>}
        </Popover>
    )
}
