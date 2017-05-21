import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import * as Action from '../actions/recipes';

const {
  DatePickerIOS,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false,
      ingredientsInput: '',
      startDate: new Date(),
      endDate: new Date(),
      timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
    }
  }
  searchPressed() {
    this.props.dispatch(Action.fetchRecipe(moment(new Date(this.state.startDate)).format('MM/DD/YYYY'),
      moment(new Date(this.state.endDate)).format('MM/DD/YYYY'), this.state.ingredientsInput));
  }
  openSelectedCase(caseId) {
    this.props.dispatch(Action.fetchCaseDetails(caseId,
      this.props.navigation
    )).then(resp => {
      // this.props.navigation.navigate('Home');
    });
  }
  recipes() {
    return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
  }
  onDateChange = (date) => {
    this.setState({date: date});
  };
  render() {
    console.log(this.recipes());
    return <View style={homeStyle.scene}>
      <View style={homeStyle.searchSection}>
        <TextInput style={homeStyle.searchInput}
          returnKeyType='search'
          placeholder='Brands (comma delimitted)'
          onChangeText={ (ingredientsInput) => this.setState({ingredientsInput}) }
          value={this.state.ingredientsInput}
        />
        <TouchableHighlight
          onPress={() => this.searchPressed()}
          style={homeStyle.touchableHighlight}
        >
          <Text> Search </Text>
        </TouchableHighlight>
      </View>
      <View style={homeStyle.datePickerView}>
      <Text>Start Date </Text>
      <DatePicker
          style={homeStyle.DatePicker}
          date={this.state.startDate}
          mode="date"
          placeholder="placeholder"
          format="MM/DD/YYYY"
          minDate="01-01-2010"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date) => {this.setState({startDate: date});}}
        />
        <Text>End Date </Text>
        <DatePicker
            style={homeStyle.DatePicker}
            date={this.state.endDate}
            mode="date"
            placeholder="placeholder"
            format="MM/DD/YYYY"
            minDate="01-01-2010"
            maxDate={new Date()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({endDate: date});}}
          />
      </View>
      <ScrollView style={homeStyle.scrollSection}>
        {!this.props.isLoader && this.recipes().map((recipe) => {
          return <View key={recipe.caseId} style={{
            marginTop: 10,
          }}>
            <TouchableHighlight
              onPress={() => this.openSelectedCase(recipe.caseId)}
              style={homeStyle.touchableHighlight}
            >
              <Text style={homeStyle.textSearchedCase}>
                {recipe.caseId}
              </Text>
            </TouchableHighlight>
          </View>
        })}
        { this.props.isLoader ? <Text>Searching...</Text> : null}
      </ScrollView>
    </View>
  }
}
const homeStyle = StyleSheet.create({
  scene: {
    flex: 2,
    marginTop: 20
  },
  searchSection: {
    height: 30,
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
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
    flex: 0.7,
  },
  datePickerView: {
    flex: 0.1,
    height: 30,
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
  },
  DatePicker: {
    width: '30%',
  },
  textSearchedCase: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    borderColor: '#0b7d8e',
    borderWidth: 3,
    borderRadius: 10,
  }
});

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes,
    isLoader: state.isLoader ? state.isLoader.loaderStatus : false,
  }
}

export default connect(mapStateToProps)(Home);
