import dotenv from 'dotenv'
import mongoose from "mongoose";

import { Feature, Product, Role, Range, Frequency, User, Recommend } from './app/models';

import featuresSeed from "./app/seeders/features";
import productsSeed from './app/seeders/products';
import rolesSeed from "./app/seeders/roles";
import frequenciesSeed from './app/seeders/frequencies';
import rangesSeed from './app/seeders/ranges';
import recommendsSeed from './app/seeders/recommends';
import usersSeed from "./app/seeders/users";

dotenv.config({ path: './.env.local' })

mongoose.connect(process.env.MONGODB_URI!)
    .catch(error => {
        console.log(error.message)
        process.exit(1)
    })
    .then(async () => {
        console.log('Connected for seeding DB.')

        if (process.argv[2] === '-d') await destroyData()
        else await importData()

        mongoose.disconnect()
    })

const importData = async () => {
    try {
        await Feature.deleteMany()
        await Role.deleteMany()
        await Frequency.deleteMany()
        await Range.deleteMany()
        await Recommend.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        await featuresSeed()
        await rolesSeed()
        await frequenciesSeed()
        await rangesSeed()
        await recommendsSeed()
        await productsSeed()
        await usersSeed()

        console.log("DB seeded")
        process.exit(0)
    } catch (error) {
        console.log("DB not seeded", error)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Feature.deleteMany()
        await Role.deleteMany()
        await Frequency.deleteMany()
        await Range.deleteMany()
        await Recommend.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log("Data destroyed")
        process.exit(0)
    } catch (error) {
        console.log("Data not destroyed", error)
        process.exit(1)
    }
}