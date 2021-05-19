import React from 'react';
import { StyleSheet, Text, View, Header, TextInput, TouchableOpacity,
         KeyboardAvoidingView, ToastAndroid } from 'react-native';
import db from '../config';
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      Title: "",
      Author: "",
      Story: "",
    }
  }

  submitStory = async () => {
    await db.collection('stories').add({
      Title: this.state.Title,
      Author: this.state.Author,
      Story: this.state.Story
    })
    this.setState({
      Title: "",
      Author: "",
      Story: "",
    })
    ToastAndroid.show("Your story was submitted", ToastAndroid.SHORT);
  }

  render() {
    return (
      <KeyboardAvoidingView style = {styles.container}>
        <TextInput 
          style={styles.inputBox}
          onChangeText={(text) => {this.setState({
            Title: text
          })}}
          placeholder={"Story title"}
          value = {this.state.Title}
        />
        <TextInput 
          style={styles.inputBox}
          onChangeText={(text) => {this.setState({
            Author: text
          })}}
          placeholder={"Author"}
          value = {this.state.Author}
        />
        <TextInput 
          style={styles.storyInputBox}
          onChangeText={(text) => {this.setState({
            Story: text
          })}}
          placeholder={"Write your story here!"}
          multiline = {true}
          value = {this.state.Story}
        />
        <TouchableOpacity 
          style= {styles.submitButton} 
          onPress = {() => {
            this.submitStory()
          }}
        >
          <Text style= {styles.submitButtonText}>
            Submit
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  scanButton:{
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10
  },
  buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
  inputView:{
    flexDirection: 'row',
    margin: 20
  },
  inputBox:{
    width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10
  },
  storyInputBox:{
    width: 300,
    height: 300,
    borderWidth: 1.5,
    fontSize: 20,
    margin: 10
  },
  scanButton:{
    backgroundColor: '#66BB6A',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0
  },
  submitButton:{
    backgroundColor: "#000000",
    width: 100,
    height: 50,
    marginTop: 50
  },
  submitButtonText:{
    padding:10,
    textAlign: 'center',
    fontSize:20,
    fontWeight: 'bold',
    color: "white"
  }
});