//package import
import React, { useEffect, useState, useCallback, memo } from 'react';
import { Easing } from 'react-native-reanimated';
import { Animated, View } from 'react-native';
import PropTypes from 'prop-types';

const SpinAnimated = ({ children, duration, style }) => {
  //state value
  const [spinValue] = useState(new Animated.Value(0));

  //variable value
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  //native effect
  useEffect(() => {
    _animatedSpining();
  }, [_animatedSpining]);

  //place your function in here
  const _animatedSpining = useCallback(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [duration, spinValue]);

  return (
    <Animated.View style={[style, { transform: [{ rotate: spin }] }]}>
      {children}
    </Animated.View>
  );
};

SpinAnimated.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
};

SpinAnimated.defaultProps = {
  children: <View />,
  duration: 5000,
  style: {},
};

export default memo(SpinAnimated);
