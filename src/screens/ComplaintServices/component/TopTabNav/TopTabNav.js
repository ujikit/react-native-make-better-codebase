import React, { memo, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import styles from './styles';
import { Button } from '../../../../components';
import { resetAcceptComplaint } from './../../../../redux/redux-actions';

const TopTabNav = (props) => {
  const navigation = useNavigation();
  let index = props.state.index;
  const dispatch = useDispatch();

  const { complaintState } = useSelector(
    (state) => ({
      complaintState: state.complaint,
    }),
    shallowEqual
  );

  useEffect(() => {
    if (complaintState.finishComplaint.isLoading === true) {
      navigation.navigate('DoneComplaint');
    }
  }, [
    complaintState.finishComplaint.code,
    complaintState.finishComplaint.isLoading,
    dispatch,
    navigation,
  ]);

  return (
    <View style={styles.tabWrap}>
      <Button
        types="nude"
        width="40%"
        styleWrap={styles.navWrap}
        onPress={() => navigation.navigate('ProgressComplaint')}
        styleContainer={[styles.navContainer, index === 0 && styles.navActive]}
      >
        <Text>Sedang dikerjakan</Text>
      </Button>
      <Button
        types="nude"
        width="25%"
        styleWrap={styles.navWrap}
        onPress={() => navigation.navigate('DoneComplaint')}
        styleContainer={[styles.navContainer, index === 1 && styles.navActive]}
      >
        <Text>Selesai</Text>
      </Button>
    </View>
  );
};

export default memo(TopTabNav);
