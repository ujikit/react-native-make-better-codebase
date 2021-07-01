//package import here
import React from 'react';
import { View, Text } from 'react-native';

//local import here
import styles from './Account.styles';
import AccountLogic from './Account.logic';
import I18n from '../../../../../i18n';
import { Header, Button } from '../../../../../components';
import { COLORS, STYLES } from '../../../../../configs';
import { ArrowLeftIcon } from '../../../../../assets/svgs';

const AccountScreen = () => {
  //logic value here
  const { data, actions } = AccountLogic();

  return (
    <View style={styles.container}>
      <View style={styles.wrapContainer}></View>
    </View>
  );
};

export default AccountScreen;
