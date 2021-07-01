//package import
import React, { memo, forwardRef, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { COLORS, STYLES } from '../../configs';
import Button from '../Button';
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  CrossIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from '../../assets/svgs';

const Input = forwardRef(
  (
    {
      types,
      styleWrap,
      styleLabel,
      label,
      isError,
      styleError,
      errorMessage,
      styleBox,
      onChangeText,
      placeholder,
      value,
      styleTextInput,
      isSecure,
      maxLengthTextArea,
      onPressButton,
      colorButton,
      disableButton,
      titleButton,
      shadow,
      onPressBack,
      onPressDelete,
      editable,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(true);

    const InputComponent = () => {
      switch (types) {
        case 'basic':
          return (
            <View
              style={[
                styles.boxInput,
                value && { borderBottomColor: COLORS.primaryBlack },
                isError && styles.boxError,
                styleBox,
              ]}
            >
              <TextInput
                ref={ref}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.black60}
                underlineColorAndroid={COLORS.transparent}
                value={value}
                style={[styles.textInput, styleTextInput]}
                secureTextEntry={isSecure ? isVisible : false}
                editable={editable}
                {...props}
              />
              {isSecure && (
                <Button
                  types="nude"
                  onPress={() => setIsVisible(!isVisible)}
                  styleWrap={styles.wrapButtonEye}
                  styleContainer={styles.containerButtonEye}
                >
                  {isVisible ? (
                    <VisibilityIcon
                      width="24"
                      height="24"
                      fill={COLORS.black80}
                    />
                  ) : (
                    <VisibilityOffIcon
                      width="24"
                      height="24"
                      fill={COLORS.black80}
                    />
                  )}
                </Button>
              )}
            </View>
          );
        case 'dropdown':
          return (
            <Button
              types="nude"
              styleWrap={styles.wrapBoxInputDropdown}
              styleContainer={[
                styles.boxInputDropdown,
                isError && styles.boxError,
                styleBox,
              ]}
              onPress={onPressButton}
            >
              <Text style={[styles.textInput, styleTextInput]} {...props}>
                {value}
              </Text>
              <ChevronDownIcon
                width="12"
                height="12"
                fill={COLORS.primaryBlack}
              />
            </Button>
          );
        case 'textarea':
          return (
            <View
              style={[
                styles.boxInputTextArea,
                value && { borderBottomColor: COLORS.primaryBlack },
                isError && styles.boxError,
                styleBox,
              ]}
            >
              <TextInput
                ref={ref}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.black60}
                underlineColorAndroid={COLORS.transparent}
                value={value}
                multiline={true}
                maxLength={maxLengthTextArea}
                style={[styles.textInput, styleTextInput]}
                editable={editable}
                {...props}
              />
            </View>
          );
        case 'button':
          return (
            <View
              style={[
                styles.boxInputButton,
                isError && styles.boxError,
                styleBox,
              ]}
            >
              <TextInput
                ref={ref}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.black60}
                underlineColorAndroid={COLORS.transparent}
                value={value}
                style={[
                  styles.textInputButton,
                  value && { borderBottomColor: COLORS.primaryBlack },
                  styleTextInput,
                ]}
                editable={editable}
                {...props}
              />
              <Button
                onPress={onPressButton}
                styleWrap={styles.wrapInputButton}
                color={colorButton}
                disabled={disableButton}
                styleContainer={styles.containerInputButton}
                title={titleButton}
              />
            </View>
          );
        case 'searchbar':
          return (
            <View
              style={[
                styles.boxInput,
                value && { borderBottomColor: COLORS.primaryBlack },
                isError && styles.boxError,
                styleBox,
              ]}
            >
              <Button
                types="nude"
                onPress={onPressBack}
                styleWrap={[styles.wrapButtonEye, STYLES.mrr8]}
                styleContainer={styles.containerButtonEye}
              >
                <ArrowLeftIcon
                  width="16"
                  height="16"
                  fill={COLORS.primaryBlack}
                />
              </Button>
              <TextInput
                ref={ref}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.black60}
                underlineColorAndroid={COLORS.transparent}
                value={value}
                style={[styles.textInput, styleTextInput]}
                editable={editable}
                {...props}
              />
              {value ? (
                <Button
                  types="nude"
                  onPress={onPressDelete}
                  styleWrap={styles.wrapButtonEye}
                  styleContainer={styles.containerButtonEye}
                >
                  <CrossIcon width="14" height="14" fill={COLORS.black50} />
                </Button>
              ) : null}
            </View>
          );
      }
    };

    return (
      <View style={[styles.wrapInput, styleWrap]}>
        {label ? (
          <Text style={[styles.textLabel, styleLabel]}>{label}</Text>
        ) : null}
        {InputComponent()}
        <View style={styles.wrapError}>
          {isError && errorMessage ? (
            <Text style={[styles.textError, styleError]}>{errorMessage}</Text>
          ) : (
            <View />
          )}
          {types === 'textarea' && (
            <Text style={styles.textLength}>
              {value.length}/{maxLengthTextArea}
            </Text>
          )}
        </View>
      </View>
    );
  }
);

Input.propTypes = {
  types: PropTypes.oneOf([
    'basic',
    'dropdown',
    'textarea',
    'button',
    'searchbar',
  ]),
  styleWrap: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  isError: PropTypes.bool,
  styleError: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  errorMessage: PropTypes.string,
  styleBox: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  styleTextInput: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  isSecure: PropTypes.bool,
  maxLengthTextArea: PropTypes.number,
  onPressButton: PropTypes.func,
  colorButton: PropTypes.string,
  disableButton: PropTypes.bool,
  titleButton: PropTypes.string,
  shadow: PropTypes.bool,
  onPressBack: PropTypes.func,
  onPressDelete: PropTypes.func,
};

Input.defaultProps = {
  types: 'basic',
  styleWrap: {},
  styleLabel: {},
  label: '',
  isError: false,
  styleError: {},
  errorMessage: '',
  styleBox: {},
  onChangeText: () => null,
  placeholder: '',
  value: '',
  styleTextInput: {},
  isSecure: false,
  maxLengthTextArea: 250,
  onPressButton: () => {},
  colorButton: COLORS.primaryOrange,
  disableButton: false,
  titleButton: '',
  shadow: true,
  onPressBack: () => {},
  onPressDelete: () => {},
  editable: true,
};

Input.displayName = 'Input';

export default memo(Input);
