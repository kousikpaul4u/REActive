import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
// import * as homeStyle from '../styles/Home';
const {
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
    }
  }
  searchPressed() {
    this.setState({ searching: true });
    this.props.fetchRecipe('02/01/2017', '05/28/2017', this.state.ingredientsInput).then(() => {
      this.setState({ searching: false });
    });
  }
  recipes() {
    return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
  }
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
          <Text> Fetched Details </Text>
        </TouchableHighlight>
      </View>
      <ScrollView style={homeStyle.scrollSection}>
        {!this.state.searching && this.recipes().map((recipe) => {
          return <View key={recipe.caseId}>
            <Text>{recipe.caseId}</Text>
          </View>
        })}
        { this.state.searching ? <Text>Searching...</Text> : null}
      </ScrollView>
    </View>
  }
}
const homeStyle = StyleSheet.create({
  scene: {
    flex: 1,
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
    flex: 0.8
  },
  searchButton: {
    flex: 0.3,
  },
  searchInput: {
    flex: 0.7,
  },
});

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes,
  }
}

export default connect(mapStateToProps)(Home);
