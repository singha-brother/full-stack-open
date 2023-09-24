const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0
  } else if (blogs.length === 1) {
    return blogs[0].likes
  } else {
    return blogs.reduce((acc, cur) => cur.likes + acc, 0)
  }
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return false
  }
  let maxLike = -1
  let returnBlog = blogs[0]
  for (const blog of blogs) {
    if (maxLike < blog.likes) {
      maxLike = blog.likes
      returnBlog = blog
    }
  }
  const { title, author, likes } = returnBlog
  return { title, author, likes }
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return false
  const dict = {}
  for (const blog of blogs) {
    if (dict[blog.author] !== undefined) {
      dict[blog.author] += 1
    } else {
      dict[blog.author] = 1
    }
  }
  let maxNum = -1
  let result = {}
  for (let author in dict) {
    if (maxNum < dict[author]) {
      maxNum = dict[author]
      result = {
        author: author,
        blogs: dict[author],
      }
    }
  }
  return result
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return false
  }

  const dict = {}
  for (const blog of blogs) {
    if (dict[blog.author] !== undefined) {
      dict[blog.author] += blog.likes
    } else {
      dict[blog.author] = blog.likes
    }
  }

  let maxNum = -1
  let result = {}
  for (let author in dict) {
    if (maxNum < dict[author]) {
      maxNum = dict[author]
      result = {
        author: author,
        likes: dict[author],
      }
    }
  }
  return result
}

module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }
