//package import
import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import Button from '../Button';
import I18n from '../../i18n';
import { COLORS, STYLES } from '../../configs';
import { CameraAltIcon, ImageIcon, ZoomOutIcon } from '../../assets/svgs';

const ModalUploadPhoto = ({
  visible,
  zoomVisible,
  onPress,
  onPressCamera,
  onPressGallery,
  onPressZoom,
  children,
}) => {
  //package value

  //state value

  //variable value

  //native effect

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
        <Text style={[styles.titleModal, STYLES.mrb8]}>
          {I18n.t('uploadPhoto')}
        </Text>
        <Button
          color={COLORS.primaryWhite}
          styleWrap={STYLES.br0}
          styleContainer={[styles.containerBtnModal, STYLES.borBtmLine]}
          onPress={onPressCamera}
        >
          <CameraAltIcon width={18} height={18} fill={COLORS.black80} />
          <Text
            style={[
              styles.descText,
              { color: COLORS.primaryBlack },
              STYLES.mrl12,
            ]}
          >
            {I18n.t('takePhoto')}
          </Text>
        </Button>
        <Button
          color={COLORS.primaryWhite}
          styleWrap={STYLES.br0}
          styleContainer={[styles.containerBtnModal, STYLES.borBtmLine]}
          onPress={onPressGallery}
        >
          <ImageIcon width={18} height={18} fill={COLORS.black80} />
          <Text
            style={[
              styles.descText,
              { color: COLORS.primaryBlack },
              STYLES.mrl12,
            ]}
          >
            {I18n.t('chooseFromGallery')}
          </Text>
        </Button>
        {zoomVisible && (
          <Button
            color={COLORS.primaryWhite}
            styleWrap={STYLES.br0}
            styleContainer={styles.containerBtnModal}
            onPress={onPressZoom}
          >
            <ZoomOutIcon width={18} height={18} fill={COLORS.black80} />
            <Text
              style={[
                styles.descText,
                { color: COLORS.primaryBlack },
                STYLES.mrl12,
              ]}
            >
              {I18n.t('seePhoto')}
            </Text>
          </Button>
        )}
      </View>
      {children}
    </Modal>
  );
};

ModalUploadPhoto.propTypes = {
  visible: PropTypes.bool,
  zoomVisible: PropTypes.bool,
  onPress: PropTypes.func,
  onPressCamera: PropTypes.func,
  onPressGallery: PropTypes.func,
  onPressZoom: PropTypes.func,
  children: PropTypes.node,
};

ModalUploadPhoto.defaultProps = {
  visible: false,
  zoomVisible: false,
  onPress: () => {},
  onPressCamera: () => {},
  onPressGallery: () => {},
  onPressZoom: () => {},
  children: <View />,
};

export default memo(ModalUploadPhoto);
