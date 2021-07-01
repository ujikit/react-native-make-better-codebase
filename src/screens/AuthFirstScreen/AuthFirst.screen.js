//package import here
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//local import here
import styles from './AuthFirst.styles';
import AuthFirstLogic from './AuthFirst.logic';

const AuthFirstScreen = () => {
  //logic value here
  AuthFirstLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default AuthFirstScreen;
