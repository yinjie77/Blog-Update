import blogService from '../services/blogs'
let blogs
const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'INI_BLOG': {
      blogs = action.data.blogs
      return blogs
    }
    case 'SEARCH_BLOG': {
      return blogs.filter(blog => blog.title.toLowerCase().includes(action.data.toLowerCase()))
    }
    case 'RESET_BLOG': {
      return blogs
    }
    case 'ADD_BLOG': {
      blogs = [...state, action.data.blog]
      return blogs
    }
    case 'LIKE_BLOG': {
      blogs = state.map(blog => blog.id === action.data.id ? { ...blog, likes: action.data.likes } : blog)
      return blogs
    }
    case 'DELETE_BLOG': {
      blogs = state.filter(blog => blog.id !== action.data.id)
      return blogs
    }
    case 'MAKE_COMMENT': {
      blogs = state.map(blog => blog.id === action.data.blog.id ? action.data.blog : blog)
      return blogs
    }
    default: return state
  }
}
export const searchBlogs = (value) => {
  return {
    type: 'SEARCH_BLOG',
    data: value
  }
}
export const resetBlog = () => {
  return {
    type: 'RESET_BLOG'
  }
}
export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INI_BLOG',
      data: {
        blogs
      }
    })
  }
}
export const setBlogs = (blogObject) => {
  return async dispatch => {
    try {
      const blog = await blogService.create(blogObject)
      dispatch({
        type: 'ADD_BLOG',
        data: {
          blog
        }
      })
    } catch (error) {
      throw new Error('token过期')
    }

  }
}
export const addlike = (id, likes) => {
  return async dispatch => {
    try {
      await blogService.updateBlog({
        id,
        likes
      })

      dispatch({
        type: 'LIKE_BLOG',
        data: {
          id,
          likes
        }
      })
    } catch (error) {
      throw new Error('token过期')
    }

  }
}
export const deleteBlog = (id) => {
  return async dispatch => {
    try {
      await blogService.removeBlog({
        id
      })

      dispatch({
        type: 'DELETE_BLOG',
        data: {
          id
        }
      })
    } catch (error) {
      throw new Error('token过期')
    }

  }
}
export const makeComment = (comment, id) => {
  return async dispatch => {
    try {
      const blog = await blogService.makeComment(
        comment,
        id
      )
      dispatch({
        type: 'MAKE_COMMENT',
        data: {
          blog
        }
      })
    } catch (error) {
      throw new Error('token过期')
    }

  }
}
export default blogReducer