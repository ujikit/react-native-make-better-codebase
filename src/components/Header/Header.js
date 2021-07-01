//package import
import React, { memo } from 'react';
import { SafeAreaView, View } from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { COLORS } from '../../configs';

const Header = ({ children, color, shadow, styleWrap, styleContainer }) => {
  return (
    <SafeAreaView
      style={[
        styles.wrapHeader,
        styleWrap,
        shadow && styles.shadowHeader,
        { backgroundColor: color },
      ]}
    >
      <View style={[styles.containerHeader, styleContainer]}>{children}</View>
    </SafeAreaView>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  shadow: PropTypes.bool,
  styleWrap: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
};

Header.defaultProps = {
  children: <View />,
  color: COLORS.primaryWhite,
  shadow: true,
  styleWrap: {},
  styleContainer: {},
};

export default memo(Header);
