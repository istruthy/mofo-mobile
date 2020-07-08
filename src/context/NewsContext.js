import createDataContext from './createDataContext';
import mofoNews from '../api/mofoNews';


const newsReducer = (state, action) => {
  switch (action.type) {
    case 'get_news':
      return action.payload;
    default:
      return state;

  }
}

const getNews = (dispatch) => {
  return async () => {
    const response = await mofoNews.get('3333111');
    console.log('news', response);
    dispatch({ type: 'get_news', payload: response.data })
  }
}

export const { Context, Provider } = createDataContext(
  newsReducer,
  { getNews },
  []
);