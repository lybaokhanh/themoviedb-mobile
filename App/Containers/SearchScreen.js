import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Text, ActivityIndicator } from 'react-native';
import SearchBar from '../Components/Header/SeachBar';
import MovieList from '../Components/Movie/List/List';
import styles from './Styles/SearchScreenStyles';
import { SearchActions } from '../Redux/Search';

class SearchScreen extends Component {
  _renderLoading() {
    return (
      <View style={styles.loading}>
        <ActivityIndicator/>
      </View>
    );
  }

  _renderResult() {
    const { movies, isSearching, fetchSearchMovie } = this.props;
    if(isSearching) {
      return this._renderLoading();
    } else {
      return movies.length === 0
        ? <View style={styles.emptyResult}><Text>No results</Text></View>
        : <MovieList movies={movies} onEndReached={fetchSearchMovie}/>;
    }
  }

  render() {
    const { loading } = this.props;

    return (
      <View style={styles.container}>
        <SearchBar />
        {loading ? this._renderLoading() : this._renderResult()}
      </View>
    );
  }
}

SearchScreen.propTypes = {
  movies: PropTypes.array,
  loading: PropTypes.bool,
  isSearching: PropTypes.bool,
  fetchSearchMovie: PropTypes.func
};

const mapStateToProps = (state) => ({
  isSearching: state.search.isSearching,
  loading: state.search.loading,
  movies: state.search.list
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchMovie: () => dispatch(SearchActions.fetchSearchMovie())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
