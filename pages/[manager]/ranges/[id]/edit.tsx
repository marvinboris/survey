import { ReactElement } from 'react'

import Layout from '../../../../components/backend/navigation/layout'

import { _delete } from '../../../../features/backend/backendSlice'
import ManageAddOrEditRanges from '../../../../components/backend/ui/page/add-or-edit/ranges'

import { NextPageWithLayout } from '../../../_app'

const ManagerRangesEditPage: NextPageWithLayout = () => <ManageAddOrEditRanges edit />

ManagerRangesEditPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default ManagerRangesEditPage