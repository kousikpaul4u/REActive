import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Login from './Login';

// class AppContainer extends Component {
//   render() {
//     return <Home {...this.props} />
//   }
// }

const AppContainer = StackNavigator({
  Home: { screen: Login },
  CaseSearch: {
    screen: Home,
    navigationOptions: ({navigation}) => ({
      title: 'Case Search',
    }),
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer);
