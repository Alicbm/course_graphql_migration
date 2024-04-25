const AuthService = require('../services/auth.service')
const service = new AuthService()

const login = async (_, {email, password}, context) => {
  const { user } = await context.authenticate('graphql-local', { email, password })
  const { access_token } = service.signToken(user);

  return {
    access_token,
    user
  }
}

module.exports = { login }
