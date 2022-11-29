import { Model, model, models } from 'mongoose'

import { AdminInterface, AdminSchema } from './admin'
import { FeatureInterface, FeatureSchema } from './feature'
import { RoleInterface, RoleSchema } from './role'
import { FrequencyInterface, FrequencySchema } from './frequency'
import { RangeInterface, RangeSchema } from './range'
import { RecommendInterface, RecommendSchema } from './recommend'
import { ProductInterface, ProductSchema } from './product'
import { UserInterface, UserSchema } from './user'

export const Admin = models.Admin as Model<AdminInterface> || model<AdminInterface>("Admin", AdminSchema)
export const Feature = models.Feature as Model<FeatureInterface> || model<FeatureInterface>("Feature", FeatureSchema)
export const Role = models.Role as Model<RoleInterface> || model<RoleInterface>("Role", RoleSchema)
export const Frequency = models.Frequency as Model<FrequencyInterface> || model<FrequencyInterface>("Frequency", FrequencySchema)
export const Range = models.Range as Model<RangeInterface> || model<RangeInterface>("Range", RangeSchema)
export const Recommend = models.Recommend as Model<RecommendInterface> || model<RecommendInterface>("Recommend", RecommendSchema)
export const Product = models.Product as Model<ProductInterface> || model<ProductInterface>("Product", ProductSchema)
export const User = models.User as Model<UserInterface> || model<UserInterface>("User", UserSchema)
