import { Recommend } from "../models";
import { RecommendInterface } from "../models/recommend";

const recommends: RecommendInterface[] = [
    { name: "I won’t" },
    { name: 'Highly' },
    { name: 'Neither recommend or not' },
    { name: 'Extremely' },
    { name: 'Maybe' },
]

export default async function recommendsSeed() {
    await Recommend.insertMany(recommends)
}