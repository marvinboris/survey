import { Model, Schema } from "mongoose"

export interface RecommendInterface {
    id?: string
    name: string
    createdAt?: Date
    updatedAt?: Date
}

export const RecommendSchema = new Schema<RecommendInterface, Model<RecommendInterface>>({
    name: {
        type: String,
        required: true
    },
}, { timestamps: true, toObject: { getters: true, virtuals: true } })
