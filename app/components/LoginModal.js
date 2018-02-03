import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet, TextInput } from 'react-native';
import {Button,FormLabel, FormInput} from 'react-native-elements';

export default class LoginModal extends Component {

  state = {
    modalVisible: true
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {

    return (

        <View style={styles.container}>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => {}}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>

                <FormInput placeholder='用户名'
                  ref={input => this.usernameInput=input}
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username}
                  />

                <FormInput
                  ref={input => this.passwordInput=input}
                  style={styles.passwordInput}
                  secureTextEntry placeholder='密码'
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password}
                  />

                <Button
                  style={styles.loginButton}
                  backgroundColor='green'
                  title="登录"
                  onPress={()=>
                    this.props.login(this.state.username,
                      this.state.password)} />


              </View>
            </View>
          </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  usernameInput:{
    marginTop: 30,
  },
  passwordInput:{
    marginTop: 30,
  },
  loginButton:{
    marginTop: 30,
    backgroundColor: 'green',
  },
});
