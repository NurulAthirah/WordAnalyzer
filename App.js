import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component { 
  constructor(){
  super();
  this.state = {
  word: 0,
  height: 0,
  bmi: 0
  }

  calculateBMI = () => {
    this.setState({bmi: Number((
    this.state.weight/Math.pow(this.state.height,2)
    ) * 10000).toFixed(1)}, 
    () => {
    if(this.state.bmi < 18.5){
    Alert.alert('You are underweight!');
    } else if(this.state.bmi >= 18.5 && this.state.bmi <= 24.9){
    Alert.alert('You are having a normal weight. Well done!');
    } else if(this.state.bmi >= 25 && 
    this.state.bmi <= 29.9){
    Alert.alert('You are overweight!');
    } else if(this.state.bmi >= 30){
    Alert.alert('You are obese. Please watch your diet!');
    }
    });
    }}

    render() {
      return (
      <View>
      <Text>Word Analyzer</Text>
      <TextInput onChangeText={(word) => 
      this.setState({word})}
      placeholder='Word'/>
     
      <Button color="#841584" 
      onPress={this.calculateBMI}
      title='Analyze'/>
      <Text>BMI: {this.state.bmi}</Text>
      </View>
      );
      }}
     