//package import
import React, { memo } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { COLORS } from '../../configs';
import Button from '../Button';

const Card = ({
  types,
  children,
  color,
  shadow,
  styleShadow,
  styleWrap,
  styleContainer,
  onPress,
  disabled,
  disabledColor,
  width,
  height,
  ...props
}) => {
  let widthWrap = null;
  let widthContainer = null;
  let heightWrap = null;
  let heightContainer = null;
  let styleShadows =
    Object.keys(styleShadow).length !== 0 ? styleShadow : styles.shadow;

  if (width !== null && width !== undefined) {
    if (width.toString().match(/%/g)) {
      widthWrap = width;
      widthContainer = '100%';
    } else {
      widthWrap = width;
      widthContainer = width;
    }
  }

  if (height !== null && height !== undefined) {
    if (height.toString().match(/%/g)) {
      heightWrap = height;
      heightContainer = '100%';
    } else {
      heightWrap = height;
      heightContainer = height;
    }
  }

  switch (types) {
    case 'basic':
      return (
        <View
          style={[
            styles.wrapCardBasic,
            { width: widthWrap, height: heightWrap },
            shadow && styleShadows,
            styleWrap,
            { backgroundColor: color },
          ]}
        >
          {children}
        </View>
      );
    case 'button':
      return (
        <Button
          onPress={onPress}
          color={color}
          styleWrap={[
            styles.wrapCardButton,
            { width: widthContainer, height: heightContainer },
            styleWrap,
            shadow && styleShadows,
          ]}
          styleContainer={[
            styles.containerCardButton,
            { width: widthContainer, height: heightContainer },
            styleContainer,
          ]}
          disabled={disabled}
          disabledColor={disabledColor}
          {...props}
        >
          {children}
        </Button>
      );
  }
};

Card.propTypes = {
  types: PropTypes.oneOf(['basic', 'button']),
  children: PropTypes.node,
  color: PropTypes.string,
  shadow: PropTypes.bool,
  styleShadow: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleWrap: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Card.defaultProps = {
  types: 'basic',
  children: <View />,
  color: COLORS.primaryWhite,
  shadow: true,
  styleShadow: {},
  styleWrap: {},
  styleContainer: {},
  onPress: () => null,
  disabled: false,
  disabledColor: COLORS.black70,
  width: null,
  height: null,
};

export default memo(Card);
