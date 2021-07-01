//package import
import React from 'react';
import { View, Text } from 'react-native';

//local import
import styles from './ChangePassword.styles';
import I18n from '../../../i18n';
import { Header, Button, Input } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { ArrowLeftIcon, LockIcon } from '../../../assets/svgs';
import ChangePasswordLogic from './ChangePassword.logic';

const ChangePasswordScreen = () => {
  //package value
  const { data, actions } = ChangePasswordLogic();

  return (
    <View style={styles.container}>
      <Header shadow={true} styleContainer={styles.headerContainer}>
        <Button
          types="nude"
          onPress={actions.goBack}
          styleContainer={styles.backContainer}
          styleWrap={styles.backWrap}
        >
          <ArrowLeftIcon width={17} height={17} fill={COLORS.black} />
        </Button>
        <Text style={styles.headerTitle}>{I18n.t('changePassword')}</Text>
      </Header>
      <View style={styles.content}>
        <Input
          label={I18n.t('currentPassword')}
          value={data.oldPassword}
          onChangeText={(val) => {
            actions.setOldPassword(val);
            actions.setOldPasswordError(false);
          }}
          placeholder={I18n.t('enterCurrentPassword')}
          returnKeyType="done"
          styleWrap={STYLES.mrb16}
          styleTextInput={styles.textInputStyles}
          isSecure={true}
          isError={data.oldPasswordError}
          errorMessage={data.oldPasswordMessage}
        />
        <View style={[STYLES.rowAlgCenter, STYLES.mrb20]}>
          <LockIcon width={54} height={72} fill={COLORS.black} />
          <View style={STYLES.mrl8}>
            <Text style={styles.securityText}>{I18n.t('tips')}:</Text>
            <Text style={styles.descSecurity}>
              {I18n.t('validatePasswordDesc')}
            </Text>
          </View>
        </View>
        <Input
          label={I18n.t('validatePasswordInput')}
          value={data.newPassword}
          onChangeText={(val) => {
            actions.setNewPassword(val);
            actions.setNewPasswordError(false);
          }}
          placeholder={`${I18n.t('validatePasswordInput')} (${I18n.t(
            'min6Character'
          )})`}
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          styleTextInput={styles.textInputStyles}
          isError={data.newPasswordError}
          errorMessage={data.newPasswordMessage}
          isSecure={true}
        />
        <Input
          label={I18n.t('validatePasswordReinput')}
          value={data.rePassword}
          onChangeText={(val) => {
            actions.setRePassword(val);
            actions.setRePasswordError(false);
          }}
          placeholder={I18n.t('validatePasswordReinput')}
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          styleTextInput={styles.textInputStyles}
          isError={data.rePasswordError}
          errorMessage={data.rePasswordMessage}
          isSecure={true}
        />
        <Button
          title={I18n.t('changePassword')}
          disabled={!data.oldPassword || !data.newPassword || !data.rePassword}
          types="filled"
          styleWrap={STYLES.mrb20}
          color={COLORS.red40}
          onPress={() => actions._handleChangePassword()}
          isLoading={data.accountState.changePasswordProfile.isLoading}
        />
        <Text
          style={styles.forgotPasswordStyle}
          onPress={actions.goToForgotPassword}
        >
          {I18n.t('forgotPasswordTitle')}
        </Text>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
