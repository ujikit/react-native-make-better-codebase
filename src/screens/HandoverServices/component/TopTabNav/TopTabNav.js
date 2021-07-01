import React, { memo, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import styles from './styles';
import { Button } from '../../../../components';
import I18n from '../../../../i18n';
import { resetSendHandover } from './../../../../redux/redux-actions';

const TopTabNav = (props) => {
  const navigation = useNavigation();
  let index = props.state.index;
  const dispatch = useDispatch();

  const { handoverState } = useSelector(
    (state) => ({
      handoverState: state.handover,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (handoverState.addHandover.code === 200) {
      navigation.navigate('Done');
      dispatch(resetSendHandover());
    }
  }, [dispatch, handoverState.addHandover.code, navigation]);

  return (
    <View style={styles.tabWrap}>
      <Button
        types="nude"
        width="25%"
        styleWrap={styles.navWrap}
        onPress={() => navigation.navigate('OnGoing')}
        styleContainer={[styles.navContainer, index === 0 && styles.navActive]}
      >
        <Text>Menunggu</Text>
      </Button>
      <Button
        types="nude"
        width="25%"
        styleWrap={styles.navWrap}
        onPress={() => navigation.navigate('Done')}
        styleContainer={[styles.navContainer, index === 1 && styles.navActive]}
      >
        <Text>Selesai</Text>
      </Button>
    </View>
  );
};

export default memo(TopTabNav);
