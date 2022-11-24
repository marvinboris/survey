import { Frequency } from "../models";
import { FrequencyInterface } from "../models/frequency";

const frequencies: FrequencyInterface[] = [
    { name: 'High usage' },
    { name: 'Moderate usage' },
    { name: 'Normal usage' },
    { name: 'Low usage' },
]

export default async function frequenciesSeed() {
    await Frequency.insertMany(frequencies)
}