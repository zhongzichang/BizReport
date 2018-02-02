import React, { Component } from 'react';
import { Text, View, Modal, StyleSheet, TextInput } from 'react-native';
import {Button} from 'react-native-elements';

export default class LoginModal extends Component {

  state = {
    modalVisible: true,
    username: '用户名',
    password: '密码'
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
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <TextInput
                  onChangeText={(username) => this.setState({username})}
                  value={this.state.username} />
                <TextInput
                  onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>
                <Button title="登录" onPress={()=>this.props.login('abc','123')} />
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
