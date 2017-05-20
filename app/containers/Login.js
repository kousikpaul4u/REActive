import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const {
  DatePickerIOS,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
  Button,
} = ReactNative;

class Login extends Component {
  static navigationOptions = {
    title: 'Mr.Cooper',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  };
  userVerification() {
    const username = "demo";
    const password = "demo"
    if(this.state.username === username && this.state.password === password) {
      return true;
    }
    return false;
  }
  render() {
    const { navigate } = this.props.navigation;
    return <View style = {homeStyle.scene}>
    <View style={homeStyle.buttonView} />
    <View style={homeStyle.searchSection}>
      <TextInput
        style={homeStyle.searchInput}
        returnKeyType='search'
        placeholder='Username'
        onChangeText={ (username) => this.setState({username}) }
        value={this.state.username}
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      <TextInput
        style={homeStyle.searchInput}
        returnKeyType='search'
        placeholder='Password'
        onChangeText={ (password) => this.setState({password}) }
        value={this.state.password}
        autoCorrect={false}
        autoCapitalize={'none'}
        secureTextEntry={true}
      />
    </View>
    <View style={homeStyle.buttonView}>
      <Button
          onPress={this.userVerification() ?
          () => navigate('CaseSearch') : ''}
          title="Login"
      />
    </View>
    <View style={homeStyle.buttonView} />
    <View style={homeStyle.buttonView} />
    <View style={homeStyle.buttonView} />
    </View>
  }
}

const homeStyle = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },
  searchSection: {
    flex: 1,
    height: 30,
    marginLeft: '20%',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '60%',
    // borderBottomWidth: 1,
    padding: 5,
  },
  scrollSection: {
    flex: 0.8,
    backgroundColor: 'skyblue',
  },
  searchButton: {
    flex: 0.3,
  },
  searchInput: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  datePickerView: {
    flex: 0.1,
    height: 30,
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 5,
  },
  DatePicker: {
    width: '30%',
  },
  buttonView: {
    flex:1,
  },
  buttonColumnView: {
    flex: 1,
    flexDirection: 'column',
  },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { return {} }, mapDispatchToProps)(Login);
