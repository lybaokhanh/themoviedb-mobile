import { combineReducers } from 'redux';
import { MoviesReducer, MOVIES_KEY } from './Movies';
import { MovieReducer, MOVIE_KEY } from './Movie';
import { TVShowsReducer, TVSHOWS_KEY } from './TVShows';
import { ListReducer, LIST_KEY } from './List';
import { SearchReducer, SEARCH_KEY } from './Search';
import { NavigationReducer, NAVIGATION_KEY } from './Navigation';


/* ------------- Assemble The Reducers ------------- */
export default combineReducers({
  [MOVIES_KEY]: MoviesReducer,
  [MOVIE_KEY]: MovieReducer,
  [TVSHOWS_KEY]: TVShowsReducer,
  [LIST_KEY]: ListReducer,
  [SEARCH_KEY]: SearchReducer,
  [NAVIGATION_KEY]: NavigationReducer
});
