//package import
import React, { Component } from 'react';
import { Text, View } from 'react-native';

//local import
import styles from './Example.styles';
import ExampleLogic from './Example.logic';

const { data, actions } = ExampleLogic();

class ExampleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //function here
  }

  componentWillUnmount() {
    //function here
  }

  //place your extension component here

  render() {
    //variable value here

    return (
      <View style={styles.container}>
        <Text>Screen Example</Text>
      </View>
    );
  }
}

export default ExampleScreen;
