//package import
import React, { memo } from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  Platform,
  View,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { COLORS, STYLES } from '../../configs';

const Button = ({
  children,
  color,
  styleContainer,
  styleText,
  styleWrap,
  disabled,
  disabledColor,
  isLoading,
  isUpperCase,
  loadingTitle,
  onPress,
  title,
  types,
  width,
  height,
  ...props
}) => {
  //variable value
  let containerStyle = styles.containerFilled;
  let textStyle = styles.textFilled;
  let loadingColors = COLORS.primaryWhite;
  let widthWrap = null;
  let widthContainer = null;
  let heightWrap = null;
  let heightContainer = null;

  const colors = disabled ? disabledColor : color;

  if (disabled) {
    switch (types) {
      case 'filled':
        containerStyle = [
          styles.containerDisableFilled,
          color && { backgroundColor: colors },
        ];
        textStyle = styles.textDisableFilled;
        loadingColors = COLORS.black80;
        break;
      case 'ghost':
        containerStyle = [
          styles.containerDisableGhost,
          color && { backgroundColor: colors },
        ];
        textStyle = styles.textDisableGhost;
        loadingColors = COLORS.black60;
        break;
      case 'nude':
        containerStyle = styles.containerDisableNude;
        textStyle = styles.textDisableNude;
        loadingColors = COLORS.black60;
        break;
    }
  } else {
    switch (types) {
      case 'filled':
        containerStyle = [
          styles.containerFilled,
          color && { backgroundColor: colors },
        ];
        textStyle = styles.textFilled;
        loadingColors = COLORS.primaryWhite;
        break;
      case 'ghost':
        containerStyle = [
          styles.containerGhost,
          color && { borderColor: colors },
        ];
        textStyle = [styles.textGhost, color && { color: colors }];
        loadingColors = COLORS.primaryOrange;
        break;
      case 'nude':
        containerStyle = styles.containerNude;
        textStyle = [styles.textNude, color && { color: colors }];
        loadingColors = COLORS.primaryOrange;
        break;
    }
  }

  if (isUpperCase) {
    title = title.toUpperCase();
  }

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

  if (Platform.OS === 'ios') {
    return (
      <View
        style={[
          styles.wrapContainer,
          { width: widthWrap, height: heightWrap },
          styleWrap,
        ]}
      >
        <TouchableOpacity
          style={[
            containerStyle,
            { width: widthContainer, height: heightContainer },
            styleContainer,
          ]}
          disabled={disabled}
          onPress={onPress}
          activeOpacity={0.8}
          {...props}
        >
          {isLoading ? (
            <View style={STYLES.rowAlgCenter}>
              <ActivityIndicator color={loadingColors} />
              {loadingTitle ? (
                <Text style={[textStyle, styleText, STYLES.mrl8]}>
                  {loadingTitle}
                </Text>
              ) : null}
            </View>
          ) : (
            <>
              {children}
              {title ? (
                <Text style={[textStyle, styleText]}>{title}</Text>
              ) : null}
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.wrapContainer,
          { width: widthWrap, height: heightWrap },
          styleWrap,
        ]}
      >
        <TouchableNativeFeedback
          disabled={disabled}
          onPress={onPress}
          useForeground={true}
          background={TouchableNativeFeedback.Ripple('rgba(1, 0, 0, 0.2)')}
          {...props}
        >
          <View
            style={[
              containerStyle,
              { width: widthContainer, height: heightContainer },
              styleContainer,
            ]}
          >
            {isLoading ? (
              <View style={STYLES.rowAlgCenter}>
                <ActivityIndicator color={loadingColors} />
                {loadingTitle ? (
                  <Text style={[textStyle, styleText, STYLES.mrl8]}>
                    {loadingTitle}
                  </Text>
                ) : null}
              </View>
            ) : (
              <>
                {children}
                {title ? (
                  <Text style={[textStyle, styleText]}>{title}</Text>
                ) : null}
              </>
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
};

Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  styleContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleText: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleWrap: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  isLoading: PropTypes.bool,
  isUpperCase: PropTypes.bool,
  loadingTitle: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string,
  types: PropTypes.oneOf(['filled', 'ghost', 'nude']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  children: <View />,
  color: '',
  styleContainer: {},
  styleText: {},
  styleWrap: {},
  disabled: false,
  disabledColor: COLORS.black60,
  isLoading: false,
  isUpperCase: false,
  loadingTitle: '',
  onPress: () => null,
  title: '',
  types: 'filled',
  width: null,
  height: null,
};

export default memo(Button);
