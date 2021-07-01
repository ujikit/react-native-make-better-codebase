//package import here
import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';

//local import here
import styles from './VerificationCode.styles';
import VerificationCodeLogic from './VerificationCode.logic';
import I18n from '../../../i18n';
import { Button, Header, Input } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { ArrowLeftIcon } from '../../../assets/svgs';
import { FONT_HEADLINE_H5 } from '../../../configs/fonts';
import InputCodeComponent from './components/InputCode';
import ResendCodeComponent from './components/ResendCode';

const VerificationCodeScreen = ({ route }) => {
  //logic value here
  const { actions, data } = VerificationCodeLogic();
  const { email } = route.params;

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header shadow={false} styleContainer={styles.headerContainer}>
        <Button
          types="nude"
          width={30}
          height={30}
          styleWrap={styles.headerLeftButton}
          styleContainer={styles.headerLeftButton}
          onPress={() => actions.backAction()}
        >
          <ArrowLeftIcon width={20} height={20} fill={COLORS.black80} />
        </Button>
      </Header>
      <View style={styles.content}>
        <Text style={[styles.contentText]}>{I18n.t('enter4Digit')}</Text>
        <Text style={[styles.emailText]}>{email}</Text>
        <Text style={[styles.contentText]}>{I18n.t('pleaseCheckEmail')}</Text>
        <View>
          <InputCodeComponent />
          <View>
            <Text style={[styles.didNotReceiveText, styles.centerText]}>
              {I18n.t('didnotReceiveVerificationCode')}
            </Text>
            <View>
              <ResendCodeComponent email={email} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VerificationCodeScreen;
