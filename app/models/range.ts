import { Model, Schema } from "mongoose"

export interface RangeInterface {
    id?: string
    name: string
    createdAt?: Date
    updatedAt?: Date
}

export const RangeSchema = new Schema<RangeInterface, Model<RangeInterface>>({
    name: {
        type: String,
        required: true
    },
}, { timestamps: true, toObject: { getters: true, virtuals: true } })
