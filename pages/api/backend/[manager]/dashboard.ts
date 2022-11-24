import { NextApiRequest, NextApiResponse } from "next";

import { Frequency, Product, Range, User } from "../../../../app/models";

import { getAccount, getCms, handleError } from "../../../../lib/utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<unknown | { error: string }>
) {
    try {
        const cms = getCms()
        const manager = await getAccount(req)

        const users = await User.count()
        const products = await Product.count()
        const frequencies = await Frequency.count()
        const ranges = await Range.count()

        res.json({
            blocks: { users, products, frequencies, ranges },
        })
    } catch (error) {
        handleError(res, error)
    }
}