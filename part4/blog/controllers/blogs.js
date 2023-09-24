const { authenticateToken } = require('../middlewares/auth')
const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')

blogsRouter.get('/', (request, response, next) => {
  Blog.find({})
    .populate({
      path: 'user',
      select: 'username name id',
    })
    .then((blogs) => {
      response.json({
        status: 'success',
        data: blogs,
      })
    })
    .catch((err) => {
      console.log('passed here')
      next(err)
    })
})

blogsRouter.get('/:blogId', (req, res, next) => {
  const { blogId } = req.params
  Blog.findById(blogId)
    .then((blog) => res.json(blog))
    .catch((err) => {
      if (err.name === 'CastError') {
        return res.json({
          error: 'No such post for this id!',
        })
      }
      next(err)
    })
})

blogsRouter.post('/', authenticateToken, async (req, res) => {
  const user = await User.findById(req.user.id)
  const { title, author, url, likes } = req.body

  const blog = new Blog({
    user: user.id,
    title,
    author,
    url,
    likes,
  })
  // const blog = new Blog(request.body)
  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
  res.status(201).json({
    status: 'success',
    data: savedBlog,
  })
})

blogsRouter.put('/:blogId', authenticateToken, async (req, res, next) => {
  const user = await User.findById(req.user.id)
  const { blogId } = req.params
  const { title, author, url, likes } = req.body
  const editedBlog = { title, author, url, likes }
  try {
    const blog = await Blog.findById(blogId)
    if (!blog) {
      const err = new Error('Blog not found')
      err.statusCode = 404
      throw err
    }

    if (user.id.toString() === blog.user.toString()) {
      const updatedBlog = await Blog.findByIdAndUpdate(blogId, editedBlog, {
        new: true,
        runValidators: true,
        context: 'query',
      })
      res.json({
        status: 'success',
        data: updatedBlog,
      })
    } else {
      return res.status(403).json({
        message: 'Unauthorized',
      })
    }
  } catch (err) {
    next(err)
  }
})

blogsRouter.delete('/:blogId', authenticateToken, async (req, res, next) => {
  const user = await User.findById(req.user.id)
  const { blogId } = req.params
  try {
    const blog = await Blog.findById(blogId)
    if (!blog) {
      const err = new Error('Blog not found')
      err.statusCode = 404
      throw err
    }

    if (user.id.toString() === blog.user.toString()) {
      await Blog.findByIdAndDelete(blogId)
      res.status(204).json({
        status: 'success',
        message: 'Successfully deleted!',
      })
    } else {
      return res.status(403).json({
        message: 'Unauthorized',
      })
    }
  } catch (err) {
    next(err)
  }
})

module.exports = blogsRouter
