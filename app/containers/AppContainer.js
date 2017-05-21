import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Login from './Login';
import CaseDetails from './caseDetails';

const AppContainer = StackNavigator({
  Home: {
    screen: Login,
    navigationOptions: ({navigation}) => ({
      title: 'Login',
    }),
  },
  CaseSearch: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Case Search',
    }),
  },
  CaseDetails: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Case Details',
    }),
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer);
