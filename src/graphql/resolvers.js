const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
 } = require('./product.resolvers')

const resolvers = {
  Query: {
    hello: () => 'Hola Campeón',
    getPerson: (_, { name, age}) => `Hola ${name}, tienes ${age} años y eres un campeón`,
    product: getProduct,
    products: getProducts
},
  Mutation : {
    addProduct,
    updateProduct,
    deleteProduct
  }
}

module.exports = { resolvers }
