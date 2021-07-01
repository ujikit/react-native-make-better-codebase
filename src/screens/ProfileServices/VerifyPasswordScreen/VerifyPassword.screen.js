//package import here
import React from 'react';
import { View, Text } from 'react-native';

//local import here
import styles from './VerifyPassword.styles';
import VerifyPasswordLogic from './VerifyPassword.logic';
import I18n from '../../../i18n';
import { Button, Header, Input } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { ArrowLeftIcon } from '../../../assets/svgs';

const VerifyPasswordScreen = () => {
  //logic value here
  const { data, actions } = VerifyPasswordLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header styleContainer={styles.headerContainer}>
        <Button
          types="nude"
          width={30}
          height={30}
          styleWrap={styles.headerButton}
          styleContainer={styles.headerButton}
          onPress={() => actions.goBack()}
        >
          <ArrowLeftIcon width={20} height={20} fill={COLORS.black80} />
        </Button>
        <Text style={[styles.textHeader, STYLES.mrl16]}>
          {I18n.t('verifyPassword')}
        </Text>
      </Header>
      <View style={[STYLES.w100, STYLES.pd16]}>
        <Input
          label="Masukkan password saat ini"
          value={data.formProfile.password}
          onChangeText={(val) => actions._setPassword(val)}
          returnKeyType="done"
          styleWrap={STYLES.mrb12}
          styleTextInput={styles.textInputStyles}
          styleBox={!data.isError && styles.inputBox}
          isSecure={true}
          errorMessage={data.errorMessage}
          isError={data.isError}
        />
        <Text style={[styles.descText, STYLES.mrb16]}>
          {I18n.t('keepAccountSafe')}
        </Text>
        <Button
          title={I18n.t('continue')}
          loadingTitle={`${data.progressUpload} ${I18n.t('uploading')}`}
          disabled={!data.formProfile.password}
          onPress={actions._handleEditProfile}
          isLoading={data.accountState.editProfile.isLoading}
        />
      </View>
    </View>
  );
};

export default VerifyPasswordScreen;
