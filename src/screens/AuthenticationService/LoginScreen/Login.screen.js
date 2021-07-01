//package import
import React from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

//local import
import styles from './Login.styles';
import I18n from '../../../i18n';
import { Alert, Button, Input } from '../../../components';
import { IMAGES, STYLES } from '../../../configs';
import LoginLogic from './Login.logic';

const LoginScreen = () => {
  //package value
  const { data, actions } = LoginLogic();
  const { accountState, globalState } = useSelector((state) => ({
    accountState: state.account,
    globalState: state.global,
  }));

  return (
    <View style={styles.container}>
      <Alert
        types={globalState.alert.types}
        visible={globalState.alert.visible}
        title={globalState.alert.title}
        close={() => actions.closeAlert()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={IMAGES.logoEngineer}
          resizeMode="contain"
          style={styles.imageLogo}
        />
        <Text style={[styles.textTitle, STYLES.mrb8, STYLES.mrt20]}>
          {I18n.t('loginInfo')}
        </Text>
        <Text style={[styles.textDesc, STYLES.mrb20]}>
          {I18n.t('loginInfoDesc')}
        </Text>
        <Input
          label={I18n.t('idEmail')}
          value={data.email}
          onChangeText={(val) => actions.setEmail(val)}
          placeholder={I18n.t('placeHolderEmail')}
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          styleTextInput={styles.textInputStyles}
          styleLabel={styles.textLableStyles}
          errorMessage={data.errorMessageEmail}
          isError={data.isErrorUsername}
          onSubmitEditing={() => {
            this.secondTextInput.focus();
          }}
          blurOnSubmit={false}
        />
        <Input
          label={I18n.t('password')}
          value={data.password}
          onChangeText={(val) => actions.setPassword(val)}
          placeholder={I18n.t('placeHolderPassword')}
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          styleTextInput={styles.textInputStyles}
          isSecure={true}
          errorMessage={I18n.t('passwordCantEmpty')}
          isError={data.isErrorPassword}
          ref={(input) => {
            this.secondTextInput = input;
          }}
          onSubmitEditing={() => {
            actions._loginService();
          }}
        />
        <Button
          title={I18n.t('enter')}
          disabled={!data.email || !data.password}
          types="filled"
          styleWrap={STYLES.mrb20}
          onPress={() => actions._loginService()}
          isLoading={data.accountState.login.isLoading}
        />
        <Text
          onPress={() => actions.goToForgotPassword()}
          style={styles.forgotPasswordText}
        >
          {I18n.t('forgotPasswordTitle')}
        </Text>
        <View style={styles.supportTeamContainer}>
          <Text
            numberOfLines={2}
            style={[styles.supportTeamText1, STYLES.mrl8]}
          >
            {I18n.t('needHelpContact')}{' '}
            <Text
              onPress={() => actions._supportTeam()}
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

export default LoginScreen;
