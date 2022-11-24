import { Model, Schema } from "mongoose"

const directory = '/images/products/'

export interface ProductInterface {
    id?: string
    name: string
    photo?: string
    createdAt?: Date
    updatedAt?: Date
}

export const ProductSchema = new Schema<ProductInterface, Model<ProductInterface>>({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true,
        get: (photo: string) => directory + photo
    },
}, { timestamps: true, toObject: { getters: true, virtuals: true } })