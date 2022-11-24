import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

import { useContentContext } from '../app/contexts/content'

import { Head } from '../components/frontend/navigation/layout'
import Button from '../components/frontend/ui/form/button'
import Select from '../components/frontend/ui/form/select'

export default function Home() {
  const { content } = useContentContext()
  const { cms: { global: { app_name }, frontend: { pages: { home: cms } } } } = content!

  return <div className='min-h-screen flex flex-col items-center justify-center space-y-[59px]'>
    <Head link='/' title={app_name} description={cms.description} />

    <header className='space-y-5 text-center'>
      <h1 className='font-bold text-[60px]'>{cms.welcome}</h1>
      <p className='text-xl'>{cms.greetings}</p>
    </header>

    <div className="flex space-x-[18px]">
      <Select icon={MagnifyingGlassIcon}>
        <option>{cms.form.select_area}</option>
      </Select>
      <Link href="/question-1">
        <Button icon={ArrowRightIcon}>{cms.form.start}</Button>
      </Link>
    </div>
  </div>
}
