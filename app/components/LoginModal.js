import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet, TextInput } from 'react-native';
import {Button,FormLabel, FormInput} from 'react-native-elements';
import global from '../services/global';
import {setHostAndPort} from '../services/utils';
import md5 from "react-native-md5";

export default class LoginModal extends Component {

  state = {
    modalVisible: true,
    hostAndPort: "118.123.213.38:90",
    username: "nea@burgeon.com.cn",
    password: "bos20",
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

                <FormInput placeholder='服务器地址:端口号'
                  ref={input => this.hostAndPortInput=input}
                  onChangeText={(hostAndPort) => this.setState({hostAndPort})}
                  value={this.state.hostAndPort}
                  />

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
                  onPress={
                    ()=>{
                      setHostAndPort(this.state.hostAndPort);
                      var passwordMd5 = md5.hex_md5( this.state.password );
                      this.props.login(this.state.username, passwordMd5);
                      global.username = this.state.username;
                      global.password = this.state.password;
                      global.passwordMd5 = passwordMd5;
                    }
                  }
                  />
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
