import { ArrowRightIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect } from 'react'

import { useContentContext } from '../app/contexts/content'
import { useItemsContext } from '../app/contexts/items'

import { Head } from '../components/frontend/navigation/layout'
import Button from '../components/frontend/ui/form/button'

export default function Home() {
  const { content } = useContentContext()
  const { cms: { global: { app_name }, frontend: { pages: { congrats: cms } } } } = content!

  const { items, setItems } = useItemsContext()
  
  useEffect(() => {
    if (items.length > 0) setItems([])
  }, [items.length, setItems])
  

  return <div className='min-h-screen flex flex-col items-center justify-center text-center px-8'>
    <Head link='/congrats' title={`${cms.title} | ${app_name}`} description={cms.description} />

    <div className='mb-[61px] md:mb-[29.5px]'>
      <FaceSmileIcon className='text-green w-20' />
    </div>

    <h1 className="text-green text-[45px] md:text-[60px] mb-[38.5px] md:mb-[17px] font-bold">{cms.thank_you}</h1>

    <p className='mb-[151px] md:mb-[110px] text-xl'>{cms.finished}</p>

    <p>
      <Link href='/'>
        <Button icon={ArrowRightIcon}><span className='font-medium'>{cms.home}</span></Button>
      </Link>
    </p>
  </div>
}
