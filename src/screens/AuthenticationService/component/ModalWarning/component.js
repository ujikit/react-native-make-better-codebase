//package import
import React, { useEffect, useState, memo } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import I18n from '../../../../i18n';
import { Button, Input } from '../../../../components';
import { COLORS, IMAGES, STYLES } from '../../../../configs';

const Component = ({
  visible,
  onPress,
  title,
  desc,
  buttonNegative,
  buttonPositive,
  onPressPositive,
}) => {
  //package value
  const navigation = useNavigation();

  //state value
  const _onBack = () => {
    onPress();
    navigation.goBack();
  };

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
        <Text style={[styles.modalTitle, STYLES.mrb12]}>{title}</Text>
        <Text style={[styles.modalDesc, STYLES.mrb12]}>{desc}</Text>
        <View style={[STYLES.rowAlgCenter, styles.buttonAlign, STYLES.mrt12]}>
          <TouchableOpacity onPress={onPressPositive}>
            <Text style={[styles.fontCancel]}>{buttonNegative}</Text>
          </TouchableOpacity>
          <Button
            title={buttonPositive}
            onPress={onPress}
            types="filled"
            styleWrap={STYLES.mrl16}
            color={COLORS.primaryOrange}
            width={100}
          />
        </View>
      </View>
    </Modal>
  );
};

Component.propTypes = {
  visible: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
  desc: PropTypes.string,
  buttonNegative: PropTypes.string,
  buttonPositive: PropTypes.string,
  onPressPositive: PropTypes.func,
};

Component.defaultProps = {
  visible: false,
  onPress: () => {},
  title: '',
  desc: '',
  buttonNegative: '',
  buttonPositive: '',
  onPressPositive: () => {},
};

export default memo(Component);
