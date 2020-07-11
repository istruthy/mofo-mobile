import createDataContext from './createDataContext';
import mofo from '../api/mofo';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_news':
      return action.payload;
    case 'get_content':
      return action.payload;
    case 'get_content':
      return action.payload;
    case 'edit_blogpost':
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });
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
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogPosts');
    dispatch({ type: 'get_blogpost', payload: response.data });
  };
};

const getNews = (dispatch) => {
  return async () => {
    const response = await mofo.get(
      `/content-wss?id=1&type=MoFo News&wss=news&cid=23491`
    );
    // console.log('get_news ', response.data);
    dispatch({ type: 'get_news', payload: response.data });
  };
};

const getContent = (dispatch) => {
  return async (id) => {
    const response = await mofo.get(`/content-api?cid=${id}`);
    console.log('get_content ', response.data, id);
    dispatch({ type: 'get_content', payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, cb) => {
    await jsonServer.post('/blogposts', { title, content });
    // dispatch({ type: 'add_blogpost', payload: { title, content } });
    if (cb) {
      cb();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, cb) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: 'edit_blogpost', payload: { id, title, content } });
    if (cb) {
      cb();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
    getBlogPosts,
    getNews,
    getContent,
  },
  []
);
