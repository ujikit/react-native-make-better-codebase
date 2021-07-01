//package import here
import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { useSelector } from 'react-redux';

//local import here
import styles from './InputCode.styles';
import InputCodeLogic from './InputCode.logic';
import I18n from '../../../../../i18n';
import { Loader } from '../../../../../components';
import { STYLES } from '../../../../../configs';

const InputCodeComponent = () => {
  //logic value here
  const { data, actions } = InputCodeLogic();
  const { accountState } = useSelector((state) => ({
    accountState: state.account,
  }));

  //place your extension component here
  const InvalidTextComponent = () => (
    <View style={STYLES.mrt12}>
      <Text style={[styles.invalidVerificationCodeText, styles.centerText]}>
        {I18n.t('invalidVerificationCodeTryAgain')}
      </Text>
    </View>
  );

  return (
    <View>
      <Loader show={accountState.validateOTP.isLoading} />
      <View style={styles.wrapVerificationCodeInput}>
        <View style={styles.wrapItemVerificationCodeInput}>
          <TextInput
            autoFocus={true}
            maxLength={1}
            ref={data.input_code_one}
            value={data.code_one}
            onChangeText={(_code_one) => actions._handleCodeOne(_code_one)}
            onKeyPress={({ nativeEvent }) => {
              nativeEvent.key === 'Backspace' && actions.setCodeOne('');
            }}
            textAlign={'center'}
            keyboardType={'numeric'}
            style={[
              styles.verificationCodeInput,
              data.isErrorInputCode && styles.errorVerificationCodeInput,
            ]}
          />
        </View>
        <View style={styles.wrapItemVerificationCodeInput}>
          <TextInput
            maxLength={1}
            ref={data.input_code_two}
            value={data.code_two}
            onChangeText={(_code_two) => actions._handleCodeTwo(_code_two)}
            onKeyPress={({ nativeEvent }) => {
              nativeEvent.key === 'Backspace' && actions._handleDeleteCodeTwo();
            }}
            textAlign={'center'}
            keyboardType={'numeric'}
            style={[
              styles.verificationCodeInput,
              data.isErrorInputCode && styles.errorVerificationCodeInput,
            ]}
          />
        </View>
        <View style={styles.wrapItemVerificationCodeInput}>
          <TextInput
            maxLength={1}
            ref={data.input_code_three}
            value={data.code_three}
            onChangeText={(_code_three) =>
              actions._handleCodeThree(_code_three)
            }
            onKeyPress={({ nativeEvent }) => {
              nativeEvent.key === 'Backspace' &&
                actions._handleDeleteCodeThree();
            }}
            textAlign={'center'}
            keyboardType={'numeric'}
            style={[
              styles.verificationCodeInput,
              data.isErrorInputCode && styles.errorVerificationCodeInput,
            ]}
          />
        </View>
        <View style={styles.wrapItemVerificationCodeInput}>
          <TextInput
            maxLength={1}
            ref={data.input_code_four}
            value={data.code_four}
            onChangeText={(_code_four) => actions._handleCodeFour(_code_four)}
            onKeyPress={({ nativeEvent }) => {
              nativeEvent.key === 'Backspace' &&
                actions._handleDeleteCodeFour();
            }}
            textAlign={'center'}
            keyboardType={'numeric'}
            style={[
              styles.verificationCodeInput,
              data.isErrorInputCode && styles.errorVerificationCodeInput,
            ]}
          />
        </View>
      </View>
      {data.isError && <InvalidTextComponent />}
    </View>
  );
};

export default InputCodeComponent;
