import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MoviesActions, MoviesConstant } from '../../Redux/Movies';
import MovieList from '../../Components/Movie/List/List';

class TopVotedScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Top Voted',
    tabBarIcon: ({ tintColor, focused }) => (
      <View>
        <MaterialCommunityIcons name="trending-up" size={24} color={tintColor} />
      </View>
    ),
  }

  componentDidMount() {
    const { fetchTopVotedMovies } = this.props;

    fetchTopVotedMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <View>
        <MovieList movies={movies} filterName={MoviesConstant.VOTE_AVERAGE_DESC}/>
      </View>
    );
  }
}

TopVotedScreen.propTypes = {
  fetchTopVotedMovies: PropTypes.func
};

const mapStateToProps = (state) => {
  const moviesState = state.movies.filter.topVoted;

  return  {
    movies: moviesState.result
  };
};

TopVotedScreen.propTypes = {
  movies: PropTypes.array
};

const mapDispatchToProps = (dispatch) => ({
  fetchTopVotedMovies: () => dispatch(MoviesActions.fetchTopVotedMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(TopVotedScreen);