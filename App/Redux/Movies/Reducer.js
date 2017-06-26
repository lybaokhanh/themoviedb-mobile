import ActionTypes from './ActionTypes';

export const KEY = 'movies';

export const INITIAL_STATE = {
  loading: false,
  filter: {
    popular: {
      page: 1,
      result: []
    },
    topRated: {
      page: 1,
      result: []
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case ActionTypes.FETCH_MOVIES_REQUESTED:
    return {
      ...state,
      loading: true
    };
  case ActionTypes.FETCH_POPULAR_MOVIES_FULFILLED:
    return {
      ...state,
      filter: {
        ...state.filter,
        popular: {
          page: state.filter.popular.page + 1,
          result: [
            ...state.filter.popular.result,
            ...action.payload
          ]
        }
      },
      loading: false
    };
  case ActionTypes.FETCH_TOP_RATED_MOVIES_FULFILLED:
    return {
      ...state,
      filter: {
        ...state.filter,
        topRated: {
          page: state.filter.topRated.page + 1,
          result: [
            ...state.filter.topRated.result,
            ...action.payload
          ]
        }
      },
      loading: false
    };
  case ActionTypes.FETCH_MOVIES_REJECTED:
    return {
      ...state
    };
  case ActionTypes.SET_POPULAR_PAGE:
    return {
      ...state,
      filter: {
        popular: {
          page: action.page
        }
      }
    };
  case ActionTypes.SET_TOP_RATED_PAGE:
    return {
      ...state,
      filter: {
        topRated: {
          page: action.page
        }
      }
    };
  default:
    return state;
  }
};
