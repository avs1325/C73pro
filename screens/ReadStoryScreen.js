import React from 'react';
import { StyleSheet, Text, View, Header, TextInput, TouchableOpacity,
         KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import db from '../config';
import firebase from 'firebase'
import { createPortal } from 'react-dom';

export default class ReadStoryScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      searchText: "",
      allStories: [],
      display: []
    }
  }

  componentDidMount = async () => {
    console.log("mount")
    const query = await db.collection('stories').get()
    query.docs.map((doc) => {
      this.setState({
        allStories: [...this.state.allStories,doc.data()],
        display: [...this.state.allStories,doc.data()],
      })
    })
  }

  searchStories = async(text) =>{
    
  }

  render() {
    return (
      <View style = {styles.container}>
        <SearchBar
          placeholder="Search"
          onChangeText={(text) => {
            this.setState({ 
              searchText: text
            });
            this.searchStories(this.state.searchText)
          }}
          value={this.state.searchText}
        />
        <ScrollView style = {styles.scrollView}>
          {this.state.display.map((story, index) => {
            return (
              <View key = {index} style = {styles.view}>
                <Text>{"Title: " + story.Title}</Text>
                <Text>{"Author: " + story.Author}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    borderBottomWidth: 2,
  },
  container: {
    marginTop: 50, 
    padding: 3
  },
  scrollView:{
    marginTop: 10,
    padding: 10
  }
})