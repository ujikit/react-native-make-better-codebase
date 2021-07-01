//package import
import React, { memo } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

//local import
import styles from './ModalUpdateVersion.styles';
import Button from '../../components/Button';
import { STYLES, COLORS } from '../../configs';
import { RocketLaunchIcon } from '../../assets/svgs';
import { FONT_HEADLINE_H4 } from '../../configs/fonts';

const ModalUpdateVersionComponent = ({
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
        <RocketLaunchIcon width={160} height={120} />
        <Text style={[FONT_HEADLINE_H4, STYLES.mrt12, STYLES.mrb16]}>
          New Update is available
        </Text>
        <Text style={styles.fontDesc}>
          We made a lot of improvements, update the app and get the best
          experience.
        </Text>
        <Button
          title="Update Now"
          onPress={pressSuccess}
          types="filled"
          width="90%"
          styleWrap={styles.buttonUpdate}
          color={COLORS.primaryOrange}
          isLoading={isLoading}
        />
        <Button
          types="nude"
          width="100%"
          styleWrap={styles.remindWrap}
          styleContainer={styles.remindWrap}
          // onPress={() => actions.navigation.toggleDrawer()}
        >
          <Text onPress={pressBack} style={[styles.fontCancel]}>
            Remind me later
          </Text>
        </Button>
      </View>
    </Modal>
  );
};

export default memo(ModalUpdateVersionComponent);
