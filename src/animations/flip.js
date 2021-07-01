//package import
import React, { useEffect, useState, useCallback, memo } from 'react';
import { Easing } from 'react-native-reanimated';
import { Animated, View } from 'react-native';
import PropTypes from 'prop-types';

const FlipAnimated = ({ children, duration, style }) => {
  //state value
  const [flipValue] = useState(new Animated.Value(0));

  //variable value
  const flipInterpolate = flipValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const flipAnimatedStyle = {
    transform: [{ rotateY: flipInterpolate }],
  };

  //native effect
  useEffect(() => {
    _animatedFliping();
  }, [_animatedFliping]);

  //place your function in here
  const _animatedFliping = useCallback(() => {
    Animated.loop(
      Animated.timing(flipValue, {
        toValue: 360,
        duration: duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [duration, flipValue]);

  return (
    <Animated.View style={[style, flipAnimatedStyle]}>{children}</Animated.View>
  );
};

FlipAnimated.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
};

FlipAnimated.defaultProps = {
  children: <View />,
  duration: 3000,
  style: {},
};

export default memo(FlipAnimated);
