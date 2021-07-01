//package import here
import React from 'react';
import { View, Text } from 'react-native';

//local import here
import styles from './ForceUpdate.styles';
import ForceUpdateLogic from './ForceUpdate.logic';
import I18n from '../../i18n';
import { Button } from '../../components';
import { RocketLaunchIcon } from '../../assets/svgs';

const ForceUpdateScreen = () => {
  //logic value here
  const { data, actions } = ForceUpdateLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <RocketLaunchIcon width={225} height={169} />
      <Text style={styles.title}>{I18n.t('forceUpdateTitle')}</Text>
      <Text style={styles.desc}>{I18n.t('forceUpdateDesc')}</Text>
      <Button
        width="85%"
        title="Update Now"
        styleContainer={styles.buttonContainer}
      />
    </View>
  );
};

export default ForceUpdateScreen;
