//package import here
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

//local import here
import styles from './ResendCode.styles';
import ResendCodeLogic from './ResendCode.logic';
import I18n from '../../../../../i18n';
import { COLORS, STYLES } from '../../../../../configs';
import { FONT_HEADLINE_H5 } from '../../../../../configs/fonts';

const ResendCodeComponent = ({ email }) => {
  //logic value here
  const { data, actions } = ResendCodeLogic();

  //place your extension component here

  return (
    <TouchableOpacity
      disabled={data.is_disabled_resend_otp}
      onPress={() => actions._handleResendOTP(email)}
    >
      {data.is_disabled_resend_otp && data.countdown_otp >= 0 ? (
        <Text style={[styles.resendInActiveText, styles.centerText]}>
          {`${I18n.t('resendCodeIn')} ${new Date(data.countdown_otp * 1000)
            .toISOString()
            .substr(14, 5)}`}
        </Text>
      ) : (
        <Text style={[styles.resendActiveText, styles.centerText]}>
          {I18n.t('resendCode')}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ResendCodeComponent;
