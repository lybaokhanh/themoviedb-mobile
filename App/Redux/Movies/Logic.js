import { createLogic } from 'redux-logic';
import Action from './Action';
import ActionCreator from './ActionCreator';

const API = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '62262a23488ef8c1405c686f66e765ef';
const LANGUAGE = 'en-US';

export const moviesFetchLogic = createLogic({
  type: Action.MOVIES_FETCH,
  cancelType: Action.MOVIES_FETCH_CANCEL,
  latest: true,
  process({ getState, http }, dispatch, done) {
    http.get(API, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        page: getState().movies.page
      }
    })
    .then((response) => {
      const movies = response.data.results;
      dispatch(ActionCreator.moviesFetchFulfilled(movies));
    })
    .catch (err => {
      console.log(err);
      dispatch(ActionCreator.moviesFetchRejected(err));
    })
    .finally(() => done());
  }
});

export default [
  moviesFetchLogic
];
