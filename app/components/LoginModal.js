import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet } from 'react-native';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';

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


    const LoginButton = MKButton.coloredButton()
      .withText('登录')
      .withStyle(styles.loginButton)
      .withOnPress(() => {
        this.closeModal();
      })
      .build();

    return (



        <View style={styles.container}>
          <Modal
              visible={loginInfo.success != 0}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <MKTextField
                  tintColor={MKColor.Lime}
                  textInputStyle={{color: MKColor.Orange}}
                  placeholder="用户名"
                  style={styles.textfield}
                />
                <MKTextField
                  tintColor={MKColor.Lime}
                  textInputStyle={{color: MKColor.Orange}}
                  placeholder="密码"
                  style={styles.textfield}
                />

                <LoginButton />

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
