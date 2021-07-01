//package import
import React, { memo } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Modal from 'react-native-modal';

//local import
import ModalSuccessChangeLogic from './ModalSuccessChange.logic';
import styles from './ModalSuccessChange.styles';
import I18n from '../../../../i18n';
import { Button, Input } from '../../../../components';
import { COLORS, STYLES } from '../../../../configs';
import { ResetPasswordIcon } from '../../../../assets/svgs';
import { FONT_HEADLINE_H4 } from '../../../../configs/fonts';

const ModalSuccessChangeComponent = ({
  visible,
  setShowModal,
  pressSuccess
}) => {
  //logic value
  const { data, actions } = ModalSuccessChangeLogic();

  //state value

  //variable value

  //place your extension component here

  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={visible}
      onBackdropPress={() => setShowModal(false)}
      onBackButtonPress={() => setShowModal(false)}
      onSwipeComplete={() => setShowModal(false)}
      swipeDirection="down"
      style={styles.wrapModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={200}
      animationOutTiming={200}
    >
      <View style={styles.containerModal}>
        <ResetPasswordIcon width={150} height={150}/>
        <Text style={[FONT_HEADLINE_H4, STYLES.mrt12, STYLES.mrb16]}>Reset Password Successfully</Text>
        <Button
          title={I18n.t('ok')}
          types="filled"
          // styleWrap={STYLES.mrb20}
          width={160}
          onPress={pressSuccess}
          // isLoading={data.accountState.login.isLoading}
        />
      </View>
    </Modal>
  );
};

export default memo(ModalSuccessChangeComponent);
