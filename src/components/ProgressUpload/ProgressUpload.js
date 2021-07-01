import React, { memo } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

import styles from './styles';
import I18n from '../../i18n';
import { COLORS, IMAGES } from '../../configs';

const ProgressUpload = ({ visible, value }) => {
  return (
    <Modal visible={visible} transparent={true} style={styles.wrapModal}>
      <View style={styles.container}>
        <View style={styles.wrapLayout}>
          <View style={styles.wrapLayoutItem}>
            <FastImage
              style={styles.wrapImage}
              source={IMAGES.logoNew}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.wrapText}>{I18n.t('sendingData')}</Text>
            <Text style={[styles.wrapText, { marginTop: 7 }]}>{value}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

ProgressUpload.propTypes = {
  visible: PropTypes.bool,
  value: PropTypes.string,
};

ProgressUpload.defaultProps = {
  visible: false,
  value: '0%',
};

export default memo(ProgressUpload);
