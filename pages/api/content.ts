import { NextApiRequest, NextApiResponse } from "next";

import { Product } from "../../app/models";
import ApiMessageType from "../../app/types/api/message";
import ContentType from "../../app/types/content";

import { getCms, handleError } from "../../lib/utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ContentType | ApiMessageType>
) {
    try {
        const cms = getCms()
        const items = await Product.find()

        res.json({ cms, items: items.map(item => item.toObject()) })
    } catch (error) {
        handleError(res, error)
    }
}