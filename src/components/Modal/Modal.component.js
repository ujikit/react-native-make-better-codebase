//package import
import React, { memo } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

//local import
import ModalLogic from './Modal.logic';
import styles from './Modal.styles';

const ModalComponent = ({
  backdropOpacity,
  isVisible,
  onBackdropPress,
  onBackButtonPress,
  onSwipeComplete,
  swipeDirection,
  style,
  animationIn,
  animationOut,
  animationInTiming,
  animationOutTiming,
  height,
  children,
}) => {
  //logic value
  const { data, actions } = ModalLogic();

  //state value

  //variable value

  //place your extension component here

  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={isVisible}
      onBackdropPress={() => onBackdropPress(false)}
      onBackButtonPress={() => onBackButtonPress(false)}
      onSwipeComplete={() => onSwipeComplete(false)}
      swipeDirection="down"
      style={styles.wrapModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={10}
      animationOutTiming={10}
    >
      <View style={[styles.wrapContainer, { height }]}>{children}</View>
    </Modal>
  );
};

ModalComponent.propTypes = {
  backdropOpacity: PropTypes.number,
  isVisible: PropTypes.bool,
  onBackdropPress: PropTypes.func,
  onBackButtonPress: PropTypes.func,
  onSwipeComplete: PropTypes.func,
  swipeDirection: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  animationIn: PropTypes.string,
  animationOut: PropTypes.string,
  animationInTiming: PropTypes.number,
  animationOutTiming: PropTypes.number,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
};

ModalComponent.defaultProps = {
  backdropOpacity: 0.3,
  isVisible: false,
  onBackdropPress: () => null,
  onBackButtonPress: () => null,
  onSwipeComplete: () => null,
  swipeDirection: 'down',
  style: {},
  animationIn: 'slideInUp',
  animationOut: 'slideOutDown',
  animationInTiming: 10,
  animationOutTiming: 10,
  height: '60%',
  children: <View />,
};

export default memo(ModalComponent);
