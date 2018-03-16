import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

class LoginScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 24, paddingBottom: 24 }}>CHATROOM</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={{ color: '#fff', fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
        <View style={styles.btnContainer}>
          <Text>You don't have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('RegisterScreen')}
          >
            <Text style={{ color: '#4169e1' }}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginTop: 16,
    paddingHorizontal: 8,
    height: 50,
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1
  },
  btnSubmit: {
    marginTop: 16,
    padding: 12,
    width: '100%',
    backgroundColor: '#333',
    alignItems: 'center'
  },
  btnContainer: {
    marginTop: 8,
    padding: 12,
    width: '100%',
    alignItems: 'center'
  }
});

export default LoginScreen;
