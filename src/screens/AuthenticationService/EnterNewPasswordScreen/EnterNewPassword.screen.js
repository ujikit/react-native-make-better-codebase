//package import here
import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';

//local import here
import styles from './EnterNewPassword.styles';
import EnterNewPasswordLogic from './EnterNewPassword.logic';
import I18n from '../../../i18n';
import { Button, Header, Input, Loader } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { ArrowLeftIcon, LockIcon } from '../../../assets/svgs';
import { FONT_HEADLINE_H5 } from '../../../configs/fonts';
import ModalSuccessChange from '../component/ModalSuccessChange';
import ModalWarning from '../component/ModalWarning';

const EnterNewPasswordScreen = () => {
  //logic value here
  const { data, actions } = EnterNewPasswordLogic();
  const { accountState } = useSelector((state) => ({
    accountState: state.account,
  }));
  const { changePassword } = accountState;

  //place your extension component here

  return (
    <View style={styles.container}>
      <Loader show={accountState.changePassword.isLoading} />
      <Header shadow={false} styleContainer={styles.headerContainer}>
        <Button
          types="nude"
          width={30}
          height={30}
          styleWrap={styles.headerLeftButton}
          styleContainer={styles.headerLeftButton}
          onPress={() => actions.goBack()}
        >
          <ArrowLeftIcon width={20} height={20} fill={COLORS.black80} />
        </Button>
      </Header>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[STYLES.rowAlgCenter, STYLES.mrb20]}>
          <LockIcon width={52} height={52} fill={COLORS.black80} />
          <View>
            <Text style={[styles.forgotPasswordText, STYLES.mrl8]}>
              {I18n.t('validatePassword')}
            </Text>
            <Text style={[styles.forgotPasswordDescriptionText, STYLES.mrl8]}>
              {I18n.t('validatePasswordDesc')}
            </Text>
          </View>
        </View>
        <Input
          label={I18n.t('validatePasswordInput')}
          value={data.password}
          onChangeText={(val) => actions.onChangeTextPassword('password', val)}
          placeholder="Password baru (min 6 karakter)"
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          styleTextInput={styles.textInputStyles}
          isSecure={true}
          errorMessage={changePassword.message}
          isError={!changePassword.isSuccess}
        />
        <Input
          label={I18n.t('validatePasswordReinput')}
          value={data.rePassword}
          onChangeText={(val) =>
            actions.onChangeTextPassword('rePassword', val)
          }
          placeholder="Ulangi password baru"
          returnKeyType="done"
          styleWrap={STYLES.mrb20}
          styleTextInput={styles.textInputStyles}
          isSecure={true}
          errorMessage={changePassword.message}
          isError={!changePassword.isSuccess}
        />
        <Button
          title={I18n.t('save')}
          disabled={!data.password.length || !data.rePassword.length}
          types="filled"
          styleWrap={STYLES.mrb20}
          onPress={() => actions.postNewPassword()}
          isLoading={data.accountState.changePassword.isLoading}
        />
        <ModalWarning
          visible={data.modalWarning}
          onPress={() => actions.setModalWarning(false)}
          title={I18n.t('areYouSureCancel')}
          desc={I18n.t('changesYouMakeNotSave')}
          buttonNegative={I18n.t('yesCancel')}
          buttonPositive={I18n.t('no')}
          onPressPositive={() => actions.toLogin()}
        />
      </ScrollView>
    </View>
  );
};

export default EnterNewPasswordScreen;
