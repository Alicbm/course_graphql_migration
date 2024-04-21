const ProductsService = require('../services/product.service')
const service = new ProductsService()

const getProduct = async (_, { id }) => {
  return await service.findOne(id)
}

const getProducts = async () => {
  return await service.find({})
}

const addProduct = async (_, { dto }) => {
  return await service.create(dto)
}

const updateProduct = async (_, { id, dto }) => {
  return await service.update(id, dto)
}

const deleteProduct = async (_, { id }) => {
  await service.delete(id)
  return id
}

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
}
