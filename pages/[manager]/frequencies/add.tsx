import { ReactElement } from 'react'

import Layout from '../../../components/backend/navigation/layout'

import { _delete } from '../../../features/backend/backendSlice'
import ManageAddOrEditFrequencies from '../../../components/backend/ui/page/add-or-edit/frequencies'

import { NextPageWithLayout } from '../../_app'

const ManagerFrequenciesEditPage: NextPageWithLayout = () => <ManageAddOrEditFrequencies />

ManagerFrequenciesEditPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default ManagerFrequenciesEditPage