  
import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component { 
  constructor(){
    super();
    this.state = {
       word: ' ',
       charas: 0,
       cons: 0,
       vowel: 0,
       arr: []
    }}

    analyzeWord = () => {

      this.state.cons=0;
      this.state.vowel=0;
      this.state.charas=0;

      const arr=this.state.word.split('');

      for (let i= 0; i<arr.length;i++){
        this.state.charas++;
      }

            for (let i= 0; i<arr.length;i++){
            if (arr[i]=='A'||arr[i]=='E'||arr[i]=='I'||arr[i]=='O'||arr[i]=='U'||
          arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u')
          {
            this.state.vowel++;
          }
          else
          {
            this.state.cons++;
          }
            }
            this.state.arr=arr.join('');
            this.setState({ word: ''})

     
      }

      render() {
        return (
        <View style={styles.container}>
        <Text style={styles.header}>Word Analyzer</Text>
        <TextInput style={styles.contents} onChangeText={(word) => this.setState({word})} placeholder='Input your word here'/>
       
        <Button style={styles.contents} color="#841584" onPress={this.analyzeWord}
        title='Analyze'/>

          <Text style={styles.container}>Word: {this.state.arr}</Text>
          <Text style={styles.container}>No of Consonants: {this.state.cons}</Text>
          <Text style={styles.container}>No of Vowels: {this.state.vowel}</Text>
          <Text style={styles.container}>No of Characters: {this.state.charas}</Text>
        </View>
        );
        }
       }

       const styles = StyleSheet.create({

        container: {
          flex: 1,
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          backgroundColor: '#F5FCFF',
          }, 
          
          header: {
          marginTop: 60,
          fontSize: 30, 
          textAlign: 'center', 
          margin: 10,
          },
          
          contents: {
          textAlign: 'center', 
          color: '#333333', 
          marginBottom: 5,
          } 
       })
