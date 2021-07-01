//package import here
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//local import here
import styles from './EditProfile.styles';
import EditProfileLogic from './EditProfile.logic';
import I18n from '../../../i18n';
import {
  Button,
  Header,
  Input,
  ModalUploadPhoto,
  ModalViewPhoto,
} from '../../../components';
import { COLORS, IMAGES, STYLES } from '../../../configs';
import { ArrowLeftIcon, CameraAltIcon } from '../../../assets/svgs';

const EditProfileScreen = () => {
  //logic value here
  const { data, actions } = EditProfileLogic();
  const insets = useSafeAreaInsets();

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
          {I18n.t('changeProfile')}
        </Text>
      </Header>
      <ScrollView contentContainerStyle={STYLES.fxGrow}>
        <View style={[styles.wrapContent, STYLES.mrb8]}>
          <View style={[styles.wrapAvatar, STYLES.mrb20]}>
            <Button
              width={72}
              height={72}
              disabled={!data.isEdit}
              color={COLORS.black30}
              styleWrap={styles.wrapPhotoPic}
              styleContainer={styles.containerphotoPic}
              onPress={() => actions.setModalUpdload(!data.modalUpdload)}
            >
              <Image
                style={styles.wrapProfilPic}
                resizeMode="cover"
                source={
                  data.formProfile.photoProfile
                    ? { uri: data.formProfile.photoProfile }
                    : IMAGES.logo
                }
              />
            </Button>
            {data.isEdit && (
              <Button
                width={24}
                height={24}
                color={COLORS.black60}
                styleWrap={styles.wrapButtonPic}
                styleContainer={styles.containerButtonPic}
                onPress={() => actions.setModalUpdload(!data.modalUpdload)}
              >
                <CameraAltIcon
                  width={14}
                  height={14}
                  fill={COLORS.primaryWhite}
                />
              </Button>
            )}
          </View>
          <Input
            label={
              <Text>
                {I18n.t('name')}{' '}
                {data.isEdit && <Text style={{ color: COLORS.red50 }}>*</Text>}
              </Text>
            }
            value={data.formProfile.name}
            onChangeText={(val) => actions._setName(val)}
            // placeholder={I18n.t('placeHolderEmail')}
            returnKeyType="done"
            styleWrap={STYLES.mrb8}
            styleBox={[styles.inputBox, !data.isEdit && styles.noBorderinpu]}
            editable={data.isEdit}
            // styleTextInput={styles.textInputStyles}
            // styleLabel={styles.textLableStyles}
            // errorMessage={data.errorMessageEmail}
            // isError={data.isErrorUsername}
          />
          <Input
            label={
              <Text>
                {I18n.t('phone')}{' '}
                {data.isEdit && <Text style={{ color: COLORS.red50 }}>*</Text>}
              </Text>
            }
            value={data.formProfile.phoneNumber}
            onChangeText={(val) => {
              actions.setIsPhoneError(false);
              actions._setPhone(val);
            }}
            keyboardType="phone-pad"
            // placeholder={I18n.t('placeHolderEmail')}
            returnKeyType="done"
            styleWrap={STYLES.mrb8}
            styleBox={[
              styles.inputBox,
              !data.isEdit && styles.noBorderinpu,
              data.isPhoneError && styles.errorInputBox,
            ]}
            editable={data.isEdit}
            // styleTextInput={styles.textInputStyles}
            // styleLabel={styles.textLableStyles}
            errorMessage="Nomor handphone harus 10 - 13 digit"
            isError={data.isPhoneError}
          />
          <Input
            label={
              <Text>
                {I18n.t('skill')}{' '}
                {data.isEdit && <Text style={{ color: COLORS.red50 }}>*</Text>}
              </Text>
            }
            value={data.formProfile.skill}
            onChangeText={(val) => actions._setSkill(val)}
            // placeholder={I18n.t('placeHolderEmail')}
            returnKeyType="done"
            styleBox={[styles.inputBox, !data.isEdit && styles.noBorderinpu]}
            editable={data.isEdit}
            // styleTextInput={styles.textInputStyles}
            // styleLabel={styles.textLableStyles}
            // errorMessage={data.errorMessageEmail}
            // isError={data.isErrorUsername}
          />
        </View>
        <View style={[styles.wrapContent, STYLES.fx1]}>
          <Input
            label="ID Teknisi"
            value={data.formProfile.engineerId}
            styleWrap={STYLES.mrb8}
            styleBox={[styles.inputBox, styles.noBorderinpu]}
            editable={false}
          />
          <Input
            label="Email"
            value={data.formProfile.email}
            styleWrap={STYLES.mrb8}
            styleBox={[styles.inputBox, styles.noBorderinpu]}
            editable={false}
          />
          <Input
            label="Vendor"
            value={data.formProfile.vendor}
            styleWrap={STYLES.mrb8}
            styleBox={[styles.inputBox, styles.noBorderinpu]}
            editable={false}
          />
          <Input
            label="Lokasi kerja"
            value={data.formProfile.location}
            styleBox={[styles.inputBox, styles.noBorderinpu]}
            editable={false}
          />
        </View>
      </ScrollView>
      <View style={[styles.wrapFooter, { paddingBottom: insets.bottom }]}>
        <Button
          title={data.isEdit ? 'Simpan' : 'Ubah Profil'}
          onPress={
            data.isEdit
              ? () => actions._handleValidate()
              : () => actions.setIsEdit(!data.isEdit)
          }
          disabled={
            !data.formProfile.name ||
            !data.formProfile.phoneNumber ||
            !data.formProfile.skill
          }
        />
      </View>
      <ModalUploadPhoto
        visible={data.modalUpdload}
        zoomVisible={data.photo ? true : false}
        onPress={() => actions.setModalUpdload(!data.modalUpdload)}
        onPressCamera={actions._getLaunchCamera}
        onPressGallery={actions._getLaunchGallery}
        onPressZoom={() => actions.setModalViewPhoto(true)}
      >
        <ModalViewPhoto
          visible={data.modalViewPhoto}
          onPress={() => actions.setModalViewPhoto(false)}
          sourceImage={{ uri: data.photo }}
          types="basic"
        />
      </ModalUploadPhoto>
    </View>
  );
};

export default EditProfileScreen;
