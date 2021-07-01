//package import here
import React from 'react';
import { View, ScrollView, Text, Linking } from 'react-native';

//local import here
import styles from './ForgotPassword.styles';
import ForgotPasswordLogic from './ForgotPassword.logic';
import I18n from '../../../i18n';
import { Button, Header, Input } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { ArrowLeftIcon } from '../../../assets/svgs';
import { FONT_HEADLINE_H5 } from '../../../configs/fonts';

const ForgotPasswordScreen = () => {
  //logic value here
  const { data, actions } = ForgotPasswordLogic();

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
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={[styles.forgotPasswordText, STYLES.mrl8]}>
          {I18n.t('forgotScreenTitle')}
        </Text>
        <Text style={[styles.emailAddressText, STYLES.mrl8]}>
          {I18n.t('email')}
        </Text>
        <Input
          types="basic"
          isError={data.isError}
          errorMessage={data.errorForgot}
          onChangeText={(val) => actions.setEmail(val)}
          keyboardType="default"
          returnKeyType="search"
          placeholder="mail@gmail.com"
          value={data.email}
          styleWrap={styles.styleWrapEmailInput}
        />
        <Button
          title={I18n.t('send')}
          disabled={!data.email}
          types="filled"
          styleWrap={[STYLES.mrb20, STYLES.mrt20, STYLES.pdh8]}
          onPress={() => actions._postForgotPassword()}
          isLoading={data.accountState.forgotPasswordReducer.isLoading}
        />
        <View style={styles.supportTeamContainer}>
          <Text
            numberOfLines={2}
            style={[styles.supportTeamText1, STYLES.mrl8]}
          >
            {I18n.t('needHelpContact')}{' '}
            <Text
              onPress={() =>
                Linking.openURL('whatsapp://send?phone=+628111087227')
              }
              style={styles.supportTeamText2}
            >
              {I18n.t('this')}
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;
