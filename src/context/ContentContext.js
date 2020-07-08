import createDataContext from './createDataContext';
import mofoContent from '../api/mofoContent';

const contentReducer = (state, action) => {
  switch (action.type) {
    case 'get_content':
      return action.payload;
    default:
      return state;
  }
}

const getContent = (dispatch) => {
  return async (id) => {
    const response = await mofoContent.get(id);
    console.log('get_content ', response.data);
    dispatch({ type: 'get_content', payload: response.data });
  }
}

export const { Context, Provider } = createDataContext(
  contentReducer,
  { getContent },
  []
);