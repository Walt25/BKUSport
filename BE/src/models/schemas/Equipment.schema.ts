import { ObjectId } from 'mongodb'

interface Type {
  stock: number
  size: string
}
interface Attribute {
  title: string,
  content: string
}

interface EquipmentType {
  _id?: ObjectId
  images: string[]
  name: string
  type: Type[]
  regularPrice: string,
  discountPrice: string
  description: string
  slug: string
  attribute: Attribute[]
  category: string[]
}

export default class Equipment {
  _id?: ObjectId
  images: string[]
  name: string
  type: Type[]
  regularPrice: string
  discountPrice: string
  description: string
  slug: string
  attribute: Attribute[]
  category: string[]
  constructor(equipment: EquipmentType) {
    this._id = equipment._id
    this.images = equipment.images
    this.name = equipment.name
    this.type = equipment.type
    this.regularPrice = equipment.regularPrice
    this.discountPrice = equipment.discountPrice
    this.description = equipment.description
    this.slug = equipment.slug
    this.attribute = equipment.attribute
    this.category = equipment.category
  }
}
