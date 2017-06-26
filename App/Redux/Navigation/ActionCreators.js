import ActionTypes from './ActionTypes';

export const navigateToDiscoverScreen = () => ({
  type: ActionTypes.NAVIGATE_TO_DISCOVER_SCREEN
});

export const navigateToDetailScreen = (movie) => ({
  type: ActionTypes.NAVIGATE_TO_MOVIE_DETAIL_SCREEN,
  payload: movie
});

export const navigateBack = () => ({
  type: ActionTypes.NAVIGATE_BACK
});

export const openDrawer = () => ({
  type: ActionTypes.OPEN_DRAWER
});

export const closeDrawer = () => ({
  type: ActionTypes.CLOSE_DRAWER
});

export default {
  navigateToDiscoverScreen,
  navigateToDetailScreen,
  navigateBack,
  openDrawer,
  closeDrawer
};
