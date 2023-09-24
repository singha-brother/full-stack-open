const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    const token = authorization.replace('Bearer ', '')
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decodedToken
      next()
    } catch (error) {
      // return res.status(401).json({ error: 'Invalid token' })
      next(error)
      return
    }
  } else {
    return res.status(401).json({ error: 'Token missing or invalid' })
  }
}

module.exports = { authenticateToken }
