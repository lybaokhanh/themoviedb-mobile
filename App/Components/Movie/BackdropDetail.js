import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import FitImage from 'react-native-fit-image';
import { THEMOVIEDB_IMAGE_SRC } from 'react-native-dotenv';
import styles from './Styles/BackdropDetailStyles';
import colors  from '../../Themes/Colors';
import PropTypes from 'prop-types';

class BackdropMovieDetail extends Component {

  render() {
    const movie = this.props.movie;
    const genres =  movie.genres ? movie.genres.map((genre, index) => {
      if (index == (movie.genres.length - 1))
        return genre.name;
      return `${genre.name}, `;
    }) : '';

    return (
      <View style={styles.container}>
        <View style={styles.backdropImageWrapper}>
          <FitImage source={{uri: THEMOVIEDB_IMAGE_SRC + movie.backdrop_path}} style={styles.backdropImage}/>
        </View>
        <View style={styles.blurWrapper}>
          <View style={styles.previewWrapper}>
            <FitImage resizeMode="contain" source={{uri: THEMOVIEDB_IMAGE_SRC + movie.poster_path}} style={styles.posterImage}/>
            <View style={styles.actionWrapper}>
              <View style={styles.actionButton}><Button color={colors.danger} onPress={() => {}} title="+ Wish list"/></View>
              <View style={styles.actionButton}><Button color={colors.primary} onPress={() => {}} title="Buy"/></View>
              <Text style={styles.rating}>
                {movie.vote_average}/10
              </Text>
            </View>
          </View>
          <View style={styles.line}/>
          <View style={styles.verticalWrapper}>
            <Text style={styles.movieTitle}>
              {movie.title}
            </Text>
            <Text style={styles.movieReleaseDate}>
              Release date: {' '}
              {movie.release_date}
            </Text>
            <View>
              <Text style={styles.movieGenres}>
                Genres:
                {genres}{'.'}
              </Text>
            </View>
            <Text style={styles.movieOverviewTitle}>
              Plot
            </Text>
            <Text style={styles.movieOverview}>
              {movie.overview}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

BackdropMovieDetail.propTypes = {
  movie: PropTypes.object
};

export default BackdropMovieDetail;