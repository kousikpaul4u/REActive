import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { Container, Content, Button, Text } from 'native-base';
const {
  DatePickerIOS,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;

class CaseDetails extends Component {

}

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes,
    isLoader: state.isLoader ? state.isLoader.loaderStatus : false,
  }
}

export default connect(mapStateToProps)(CaseDetails);
