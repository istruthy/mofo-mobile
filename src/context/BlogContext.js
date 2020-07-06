import createDataContext from './createDataContext';
import jsonServer from '../api/jsonSerer';


const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogpost':
      return action.payload;
    case 'edit_blogpost':
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload
        } else {
          return blogPost;
        }
      })
    case 'delete_blogpost':
      return state.filter((blogPost) => blogPost.id != action.payload);
    // case 'add_blogpost':
    //   return [...state,
    //   {
    //     id: Math.floor(Math.random() * 99999),
    //     title: action.payload.title,
    //     content: action.payload.content
    //   }];
    default:
      return state;
  }
}

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogPosts');
    dispatch({ type: 'get_blogpost', payload: response.data });
  }
}

const addBlogPost = (dispatch) => {
  return async (title, content, cb) => {
    await jsonServer.post('/blogposts', { title, content })
    // dispatch({ type: 'add_blogpost', payload: { title, content } });
    if (cb) {
      cb();
    }
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({ type: 'delete_blogpost', payload: id });
  }
}

const editBlogPost = (dispatch) => {
  return async (id, title, content, cb) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content })
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    if (cb) {
      cb();
    }
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);