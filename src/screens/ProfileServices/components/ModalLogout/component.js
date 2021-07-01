//package import
import React, { useEffect, memo } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import I18n from '../../../../i18n';
import { Button } from '../../../../components';
import { COLORS, IMAGES, STYLES } from '../../../../configs';
import { FONT_HEADLINE_H4, FONT_BODY3 } from './../../../../configs/fonts';

const Component = ({ visible, onPress, onLogoutPressed }) => {
  //package value
  const navigation = useNavigation();

  //state value

  //variable value

  //native effect
  useEffect(() => {
    //function here
  }, []);

  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={visible}
      onBackdropPress={onPress}
      onBackButtonPress={onPress}
      onSwipeComplete={onPress}
      swipeDirection="down"
      style={styles.wrapModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={200}
      animationOutTiming={200}
    >
      <View style={styles.containerModal}>
        <Image
          source={IMAGES.notificationIsometric}
          resizeMode="contain"
          style={styles.imageNotif}
        />
        <Text style={[styles.modalTitle, STYLES.mrb12]}>
          Apakah Anda yakin untuk keluar ?
        </Text>
        <Text style={[styles.modalDesc, STYLES.mrb16]}>
          Proses ini akan menonaktifkan berbagai pembaharuan informasi dari
          kami.
        </Text>
        <View
          style={[
            STYLES.rowAlgCenter,
            STYLES.justEnd,
            STYLES.w100,
            STYLES.pdh16,
          ]}
        >
          <Button
            title="Iya, Keluar"
            types="filled"
            width={100}
            styleContainer={STYLES.mrr16}
            onPress={onLogoutPressed}
          />
          <Button
            title="Batal"
            types="nude"
            width={100}
            color={COLORS.black60}
            onPress={onPress}
          />
        </View>
      </View>
    </Modal>
  );
};

Component.propTypes = {
  visible: PropTypes.bool,
  onPress: PropTypes.func,
};

Component.defaultProps = {
  visible: false,
  onPress: () => {},
};

export default memo(Component);
