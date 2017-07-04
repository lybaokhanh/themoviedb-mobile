import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import styles from './Styles/NavigationStyles';
import { AppNavigator, KEY } from '../Redux/Navigation/Reducer';

const AppNavigation = ({nav, dispatch}) => (
  <View style={styles.container}>
    <View style={styles.loadingContainer}>
      <ActivityIndicator/>
    </View>
    <AppNavigator navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}/>
  </View>
);

const mapStateToProps = (state) => {
  return {
    nav: state[KEY].navigation
  };
};

export default connect(mapStateToProps)(AppNavigation);
