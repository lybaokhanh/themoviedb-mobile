import ActionCreators from './ActionCreators';
import Constant from './Constant';
import Api from '../../Services/Api';

const API_DISCOVER_MOVIE = 'discover/movie';

const fetchPopularMovies = () => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchPopularMoviesRequested());
  try {
    const movies = await Api.get(API_DISCOVER_MOVIE, {
      params: {
        sort_by: Constant.POPULARITY_DESC,
        page: getState().movies.filter.popular.page
      }
    }).then(response => response.data.results);
    return dispatch(ActionCreators.fetchPopularMoviesFulfilled(movies));
  } catch (err) {
    dispatch(ActionCreators.fetchPopularMoviesRejected(err));
  }
};

const fetchTopVotedMovies = () => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchTopVotedMoviesRequested());
  try {
    const movies = await Api.get(API_DISCOVER_MOVIE, {
      params: {
        sort_by: Constant.VOTE_AVERAGE_DESC,
        page: getState().movies.filter.topVoted.page
      }
    }).then(response => response.data.results);

    return dispatch(ActionCreators.fetchTopVotedMoviesFulfilled(movies));
  } catch (err) {
    dispatch(ActionCreators.fetchTopVotedMoviesRejected());
  }
};

const fetchTopRevenueMovies = () => async (dispatch, getState) => {
  dispatch(ActionCreators.fetchTopRevenueMoviesRequested());
  try {
    const movies = await Api.get(API_DISCOVER_MOVIE, {
      params: {
        sort_by: Constant.REVENUE_DESC,
        page: getState().movies.filter.topRevenue.page
      }
    }).then(response => response.data.results);

    return dispatch(ActionCreators.fetchTopRevenueMoviesFulfilled(movies));
  } catch (err) {
    dispatch(ActionCreators.fetchTopRevenueMoviesRejected());
  }
};

export default {
  fetchPopularMovies,
  fetchTopVotedMovies,
  fetchTopRevenueMovies
};
