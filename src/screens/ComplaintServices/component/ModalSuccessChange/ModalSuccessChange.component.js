//package import
import React, { memo } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

//local import
import styles from './ModalSuccessChange.styles';
import { Button } from '../../../../components';
import { STYLES, COLORS } from '../../../../configs';
import { WarningGreyIcon } from '../../../../assets/svgs';
import { FONT_HEADLINE_H4 } from '../../../../configs/fonts';

const ModalSuccessChangeComponent = ({
  visible,
  setShowModal,
  pressBack,
  pressSuccess,
  isLoading,
}) => {
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
        <WarningGreyIcon width={150} height={150} />
        <Text style={[FONT_HEADLINE_H4, STYLES.mrt12, STYLES.mrb16]}>
          Kirim bukti pekerjaan?
        </Text>
        <Text style={styles.fontDesc}>
          Bukti ini akan diteruskan kepada Tenant terkait dan laporan akan
          berstatus “selesai”.
        </Text>
        <View style={[STYLES.rowAlgCenter, styles.buttonAlign, STYLES.mrt12]}>
          <Text onPress={pressBack} style={[styles.fontCancel]}>
            Kembali
          </Text>
          <Button
            title="Kirim"
            onPress={pressSuccess}
            types="filled"
            width={100}
            styleWrap={STYLES.mrl16}
            color={COLORS.primaryOrange}
            isLoading={isLoading}
          />
        </View>
      </View>
    </Modal>
  );
};

export default memo(ModalSuccessChangeComponent);
