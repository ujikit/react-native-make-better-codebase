//package import
import React, { memo } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

//local import
import styles from './ModalUpdate.styles';
import { Button } from '../../../../components';
import { STYLES, COLORS } from '../../../../configs';
import { CustomerServiceIcon } from '../../../../assets/svgs';
import { FONT_HEADLINE_H4 } from '../../../../configs/fonts';

const ModalUpdateComponent = ({
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
        <CustomerServiceIcon width={120} height={90} />
        <Text style={[FONT_HEADLINE_H4, STYLES.mrt12, STYLES.mrb16]}>
          Apakah yakin data mau diubah?
        </Text>
        <Text style={styles.fontDesc}>
          Pastikan data yang mau diubah sudah jelas
        </Text>
        <View style={[STYLES.rowAlgCenter, styles.buttonAlign, STYLES.mrt12]}>
          <Text onPress={pressBack} style={[styles.fontCancel]}>
            Batal
          </Text>
          <Button
            title="Iya, Ubah"
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

export default memo(ModalUpdateComponent);
