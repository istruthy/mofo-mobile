import createDataContext from './createDataContext';
// import mofo from '../api/mofo';
import axios from 'axios';

const contentReducer = (state, action) => {
  switch (action.type) {
    case 'get_people':
      return action.payload;
    // return {
    //   ...state,
    //   linkedPeople: action.payload,
    // };
    default:
      return state;
  }
};

const getPeople = (dispatch) => {
  return async (people) => {
    const results = [];
    console.log('lenght', people.length);
    for (let i = 0; i < people.length; i++) {
      // for (const item in people) {

      const response = await axios.get(
        `https://friendly-lewin-148c08.netlify.app/.netlify/functions/hello/${people[i]}`
      );
      results.push(response.data);
    }
    // const response = await mofo.get(`/content-people-api?cid=${people[0]}`);
    console.log('get_people ', results);
    dispatch({ type: 'get_people', payload: results });
  };

  // console.log('ContentContext');
  // return (people) => {
  //   console.log('current people val', people);
  //   // const response = await mofoContent.get(id);
  //   // console.log('get_content ', response.data);
  //   console.log('==== get_people ===== ');
  //   dispatch({ type: 'get_people', payload: people }); // , payload: response.data
  // };
};

export const { Context, Provider } = createDataContext(
  contentReducer,
  { getPeople },
  []
);
