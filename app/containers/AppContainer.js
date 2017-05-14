import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
const {
  View,
  Text,
  TouchableHighlight,
} = ReactNative

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeCount: 0,
    }
  }
  addRecipe() {
    this.props.addRecipe();
  }
  render() {
    return <Home {...this.props} />
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    recipeCount: state.recipeCount,
  }}, mapDispatchToProps)(AppContainer);
