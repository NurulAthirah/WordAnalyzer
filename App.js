import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      word: '',
      consonants: 0,
      vowel: 0,
      characters: 0,
      splits: ''
    }
  }

  analyze() {
    this.state.vowel=0;
    this.state.consonants=0;
    const splits=this.state.word.split('');
    for (let i =0; i< splits.length; i++) {
      if (splits[i]=='A'||splits[i]=='E'||splits[i]=='I'||splits[i]=='O'||splits[i]=='U'||
          splits[i]=='a'||splits[i]=='e'||splits[i]=='i'||splits[i]=='o'||splits[i]=='u')
      {
        this.state.consonants+=1;
      }
      else{
        this.state.vowel+=1;
      }
    }
    this.state.splits=splits.join('');
    this.setState({ word: ''})
  };

    render() {
      return (
        <View style={styles.container}>

          <Text>A WORD ANALYZER</Text>
  
          <Text>Word: <TextInput onChangeText={(word) =>
            this.setState({word})}
            placeholder='type here'/></Text>
    

          <Button color="#841584"
            onPress={this.analyzeWord}
            title='Analyze'/>
        

          <Text>Word: {this.state.splits}</Text>
          <Text>No of Consonants: {this.state.consonants}</Text>
          <Text>No of Vowels: {this.state.vowel}</Text>
          <Text>No of Characters: {this.state.characters}</Text>

        </View>
        ); 
        }
       }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 60,
    fontSize: 30, 
    textAlign: 'center', 
    margin: 10,
    },
    
    contents: {
    textAlign: 'center', 
    color: '#4B0082', 
    marginBottom: 5,
    },
    bottom1: {
      position: 'absolute',
      bottom:100,
      
      },
  
      bottom2: {
        position: 'absolute',
        bottom:70,
      
        }, 
});
