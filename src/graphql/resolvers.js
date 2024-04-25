const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory
 } = require('./product.resolvers')

const { login } = require('./auth.resolvers')
const { addCategory, getCategory } = require('./category.resolvers')
const { RegularExpression } = require('graphql-scalars')

// a-zA -> permitir caracteres de la a a la z, sin importar mayusculas
// Z0-9 -> permitar tambien valores entre 0 y 9
// { 3,8 } -> tendrá entre 3 y 8 caracteres

const CategoryNameType = new RegularExpression('CategorNameType', /^[a-zA-Z0-9]{3,8}$/)

const resolvers = {
  Query: {
    hello: () => 'Hola Campeón',
    getPerson: (_, { name, age}) => `Hola ${name}, tienes ${age} años y eres un campeón`,
    product: getProduct,
    products: getProducts,
    category: getCategory
},
  Mutation : {
    login,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory
  }
}

module.exports = { resolvers }
