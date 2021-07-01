import React, { memo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import styles from './styles';
import { COLORS } from '../../configs';

const Loader = ({ show }) => {
  return (
    <Modal backdropOpacity={0.3} visible={show} style={styles.wrapModal}>
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color={COLORS.primaryOrange}
          style={{ fontSize: 30 }}
        />
      </View>
    </Modal>
  );
};

Loader.propTypes = {
  show: PropTypes.bool,
};

Loader.defaultProps = {
  show: false,
};

export default memo(Loader);
