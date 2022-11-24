import { Model, Schema } from "mongoose"

export interface FrequencyInterface {
    id?: string
    name: string
    createdAt?: Date
    updatedAt?: Date
}

export const FrequencySchema = new Schema<FrequencyInterface, Model<FrequencyInterface>>({
    name: {
        type: String,
        required: true
    },
}, { timestamps: true, toObject: { getters: true, virtuals: true } })
