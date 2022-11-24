import { Range } from "../models";
import { RangeInterface } from "../models/range";

const ranges: RangeInterface[] = [
    { name: '7 - 10 AED' },
    { name: '10 - 13 AED' },
    { name: 'Depends on quality  > 15 AED' },
    { name: 'Above 14 AED' },
    { name: 'Below 10 AED' },
]

export default async function rangesSeed() {
    await Range.insertMany(ranges)
}