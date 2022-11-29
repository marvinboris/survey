import { ArrowRightIcon, ClockIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import { useContentContext } from '../app/contexts/content'

import { Head } from '../components/frontend/navigation/layout'
import Button from '../components/frontend/ui/form/button'
import Select from '../components/frontend/ui/form/select'

export default function Home() {
  const { content } = useContentContext()
  const { cms: { global: { app_name }, frontend: { pages: { home: cms } } } } = content!

  return <div className='min-h-screen flex flex-col items-center justify-center space-y-[65px] md:space-y-[59px]'>
    <Head link='/' title={app_name} description={cms.description} />

    <header className='text-center flex flex-col items-center'>
      <div className="flex items-center md:hidden text-green font-bold text-[45px] mb-9 space-x-[11px]">
        <ClockIcon className='w-10' />
        <span>{"5min"}</span>
      </div>
      <h1 className='font-bold text-[60px] mb-5'>{cms.welcome}</h1>
      <p className='text-2xl md:text-xl max-w-[306px] md:max-w-none'>{cms.greetings}</p>
    </header>

    <div className="flex flex-col items-center justify-center md:flex-row space-y-[101px] md:space-y-0 space-x-0 md:space-x-[18px]">
      <Select icon={MagnifyingGlassIcon}>
        <option>{cms.form.select_area}</option>
      </Select>
      <Link href="/question-1">
        <Button icon={ArrowRightIcon}>{cms.form.start}</Button>
      </Link>
    </div>
  </div>
}
