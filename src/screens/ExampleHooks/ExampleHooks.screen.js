//package import here
import React from 'react';
import { View, Text } from 'react-native';

//local import here
import styles from './ExampleHooks.styles';
import ExampleHooksLogic from './ExampleHooks.logic';
import I18n from '../../i18n';
import { Alert, Button, Card, Input } from '../../components';
import { COLORS, IMAGES, ENDPOINT } from '../../configs';

const ExampleHooksScreen = () => {
  //logic value here
  const { data, actions } = ExampleHooksLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Text>Hook Screen Example</Text>
    </View>
  );
};

export default ExampleHooksScreen;
