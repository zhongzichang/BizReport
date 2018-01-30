import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet, TextInput } from 'react-native';
import {Button} from 'react-native-elements';

export default class LoginModal extends Component {

  state = {
    modalVisible: true,
  };

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {

    const loginInfo = this.props.loginInfo;

    return (

        <View style={styles.container}>
          <Modal
              visible={loginInfo.success != 0}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <TextInput value="用户名"/>
                <TextInput value="密码"/>
                <Button title="登录" />
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
  innerContainer: {
    alignItems: 'center',
  },
  textfield: {
    height: 28,  // have to do it on iOS
    width: 200,
    marginTop: 20,
  },
  textfieldWithFloatingLabel: {
    height: 48,  // have to do it on iOS
    marginTop: 20,
  },
  loginButton: {
    marginTop: 20,
  }
});
