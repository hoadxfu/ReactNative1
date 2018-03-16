import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  Button
} from 'react-native';

import firebase from 'react-native-firebase';

class ChatScreen extends PureComponent {
  state = { message: '', messages: [], loggedIn: false };

  componentDidMount = () => {
    firebase
      .auth()
      .signInAnonymouslyAndRetrieveData()
      .then(credential => {
        if (credential) {
          // console.log('default app user ->', credential.user.toJSON());
          this.setState({ loggedIn: true });

          const queryRef = firebase
            .database()
            .ref('messages')
            .orderByChild('createdAt');

          queryRef.limitToLast(5).on('child_added', snapshot => {
            const message = snapshot.val() || {};
            this.setState({
              messages: [...this.state.messages, message]
            });
          });
        }
      });
  };

  _keyExtractor = item => item.id;
  _renderItem = ({ item }) => (
    <View style={{ flex: 1 }}>
      <Text>{item.text}</Text>
    </View>
  );
  _sendMessage = () => {
    var msg = {
      text: this.state.message,
      createdAt: firebase.database.ServerValue.TIMESTAMP
    };

    const newMsgRef = firebase
      .database()
      .ref('messages')
      .push();
    msg.id = newMsgRef.key;
    newMsgRef.set(msg);

    this.setState({ message: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1 }}
          keyExtractor={this._keyExtractor}
          data={this.state.messages}
          renderItem={this._renderItem}
        />
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={{ flex: 1 }}
            placeholder="Enter message..."
            value={this.state.message}
            onChangeText={text => this.setState({ message: text })}
            multiline={true}
          />
          <Button
            title="Send"
            disabled={!this.state.loggedIn}
            onPress={this._sendMessage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default ChatScreen;
