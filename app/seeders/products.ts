import { Product } from "../models";
import { ProductInterface } from "../models/product";

const products: ProductInterface[] = [
    { name: 'Body Wash', photo: 'body-wash.svg' },
    { name: 'Socks', photo: 'socks.svg' },
    { name: 'Facial Tissue', photo: 'facial-tissue.svg' },
    { name: 'Powder Detergent', photo: 'powder-detergent.svg' },
    { name: 'Candies', photo: 'candies.svg' },
    { name: 'Baby Diapers', photo: 'baby-diapers.svg' },
    { name: 'Dish Wash', photo: 'dish-wash.svg' },
    { name: 'Kitchen Towel', photo: 'kitchen-towel.svg' },
    { name: 'Toilet Paper', photo: 'toilet-paper.svg' },
]

export default async function productsSeed() {
    for await (const product of products) {
        Product.create(product)
    }
}