import { StyleSheet } from 'react-native';
import metrics  from '../../../Themes/Metrics';
import colors  from '../../../Themes/Colors';
import fonts  from '../../../Themes/Fonts';
import { Constants } from 'exponent';

const textColors = {
  color: colors.secondary,
};

const MovieDetailScreenStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    marginTop: Constants.statusBarHeight
  },
  line: {
    borderBottomColor: colors.cloudes,
    borderBottomWidth: 1,
    width: metrics.screenWidth - metrics.doubleBaseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin
  },
  backdropImage: {
    width: metrics.screenWidth,
    height: '100%',
  },
  blurWrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  backdropImageWrapper: {
    position: 'absolute',
    top: 0, left: 0, bottom: 0, right: 0,
  },
  previewWrapper: {
    flexDirection: 'row',
    margin: metrics.baseMargin,
    marginTop: 60,
    height: 200
  },
  horizontalWrapper: {
    flexDirection: 'row',
    margin: metrics.baseMargin,
  },
  verticalWrapper: {
    flexDirection: 'column',
    margin: metrics.baseMargin
  },
  posterImage: {
    width: 150,
    height: '100%'
  },
  actionWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButton: {
    width: '80%',
  },
  rating: {
    fontSize: fonts.size.h5,
    ...textColors,
    marginBottom: metrics.baseMargin
  },
  movieTitle: {
    ...fonts.style.h5,
    ...textColors
  },
  movieGenres: {
    ...textColors
  },
  movieOverview: {
    ...textColors
  },
  movieOverviewTitle: {
    ...fonts.style.h5,
    ...textColors,
    marginTop: metrics.baseMargin
  },
  movieReleaseDate: {
    ...textColors,
  }
});

export default MovieDetailScreenStyles;
