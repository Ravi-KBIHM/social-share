/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as RNLocalize from "react-native-localize";
import Share from 'react-native-share';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class App extends Component {

  componentWillMount(){
    console.log(RNLocalize.getLocales());
  }

pickImage(type){
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
       const source = { uri: 'data:image/jpeg;base64,' + response.data };
       console.log('image:', source.uri);
       this.share(source.uri, type);
    }
  });
}

share(source, type){
  setTimeout(() => {
    Share.shareSingle({
      title: "React Native",
      message: "Share",
      url: source,
      social: type
    });

  },300);
}

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={()=>{
              this.pickImage('sms')
            }}>
            <Text style={styles.button}>
              SMS
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={()=>{
              this.pickImage('whatsapp')
            }}>
            <Text style={styles.button}>
              Whatsapp
            </Text>
          </TouchableOpacity>  
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={()=>{
              this.pickImage('instagram')
            }}>
            <Text style={styles.button}>
              Instagram
            </Text>
          </TouchableOpacity>                
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={()=>{
               this.pickImage('twitter')
            }}>
            <Text style={styles.button}>
              Twitter
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={()=>{
               this.pickImage('facebook')
            }}>
            <Text style={styles.button}>
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button_container:{
    borderColor:'#000000',
    margin:4,
    borderWidth:1,
    width:'95%'    
  }
});
