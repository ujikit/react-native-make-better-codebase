//package import here
import React from 'react';
import { View, Text, Image } from 'react-native';
import Modal from 'react-native-modal';

//local import here
import styles from './ComplaintForm.styles';
import ComplaintFormLogic from './ComplaintForm.logic';
import I18n from '../../../i18n';
import { Button, Header, Input } from '../../../components';
import { COLORS, IMAGES, STYLES } from '../../../configs';
import { ArrowLeftIcon, CameraAltIcon, ImageIcon } from '../../../assets/svgs';

const ComplaintFormScreen = () => {
  //logic value here
  const { data, actions } = ComplaintFormLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header styleContainer={styles.containerHeader}>
        <Button
          types="nude"
          width={35}
          height={35}
          styleWrap={styles.headerButton}
          styleContainer={styles.headerButton}
          onPress={() => actions.goBack()}
        >
          <ArrowLeftIcon width={16} height={16} fill={COLORS.primaryBlack} />
        </Button>
        <Text style={[styles.headerTitle, STYLES.mrl8]}>
          {I18n.t('proofWork')}
        </Text>
      </Header>
      <View style={[STYLES.pd16, STYLES.fx1]}>
        <Text style={[styles.titleText, STYLES.mrt20, STYLES.mrb16]}>
          {I18n.t('uploadPhoto')}
          <Text style={{ color: COLORS.red50 }}>*</Text>
        </Text>
        <View style={[STYLES.rowAlgCenter, STYLES.mrb24]}>
          <Button
            width={70}
            height={70}
            color={COLORS.softOrange}
            styleWrap={STYLES.mrr12}
            styleContainer={STYLES.pd0}
            onPress={() => actions.setModalVisible(!data.modalVisible)}
          >
            <Image
              source={
                data.imageData
                  ? { uri: data.imageData }
                  : IMAGES.uploadAreaActive
              }
              resizeMode="cover"
              style={styles.uploadImage}
            />
          </Button>
          <Button
            width={70}
            height={70}
            color={COLORS.softOrange}
            styleWrap={STYLES.mrr12}
            styleContainer={STYLES.pd0}
            onPress={() => actions.setModalVisible(!data.modalVisible)}
          >
            <Image
              source={IMAGES.uploadAreaActive}
              resizeMode="cover"
              style={styles.uploadImage}
            />
          </Button>
          <Button
            width={70}
            height={70}
            color={COLORS.softOrange}
            styleWrap={STYLES.mrr12}
            styleContainer={STYLES.pd0}
            onPress={() => actions.setModalVisible(!data.modalVisible)}
          >
            <Image
              source={IMAGES.uploadAreaActive}
              resizeMode="cover"
              style={styles.uploadImage}
            />
          </Button>
        </View>
        <Input
          styleWrap={STYLES.mrb24}
          types="textarea"
          label={
            <Text>
              {I18n.t('description')}{' '}
              <Text style={{ color: COLORS.red50 }}>*</Text>
            </Text>
          }
          placeholder={I18n.t('placeholder.complainDesc')}
          value={data.description}
          onChangeText={(val) => actions.setDescription(val)}
        />
        <Text style={[styles.titleText, STYLES.mrb4]}>
          {I18n.t('signedBy')}
        </Text>
        <View style={STYLES.rowAlgCenter}>
          <Image
            source={IMAGES.logo}
            resizeMode="contain"
            style={styles.signImage}
          />
          <View style={STYLES.mrl4}>
            <Text
              style={[
                styles.descText,
                STYLES.mrb8,
                { color: COLORS.primaryBlack },
              ]}
            >
              Larry
            </Text>
            <Text style={styles.descText}>Teknisi</Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapFooter}>
        <Button title={I18n.t('save')} onPress={actions.goToComplaintResult} />
      </View>
      <Modal
        backdropOpacity={0.3}
        isVisible={data.modalVisible}
        onBackdropPress={() => actions.setModalVisible(!data.modalVisible)}
        onBackButtonPress={() => actions.setModalVisible(!data.modalVisible)}
        onSwipeComplete={() => actions.setModalVisible(!data.modalVisible)}
        swipeDirection="down"
        style={styles.wrapModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={200}
        animationOutTiming={200}
      >
        <View style={styles.containerModal}>
          <Text style={[styles.titleModal, STYLES.mrt12]}>
            {I18n.t('uploadPhoto')}
          </Text>
          <Button
            color={COLORS.primaryWhite}
            styleWrap={[STYLES.br0, STYLES.mrt12]}
            styleContainer={[styles.containerBtnModal, STYLES.borBtmLine]}
            onPress={actions.getLaunchCamera}
          >
            <CameraAltIcon width={18} height={18} fill={COLORS.black80} />
            <Text
              style={[
                styles.descText,
                { color: COLORS.primaryBlack },
                STYLES.mrl12,
              ]}
            >
              {I18n.t('takePhoto')}
            </Text>
          </Button>
          <Button
            color={COLORS.primaryWhite}
            styleWrap={STYLES.br0}
            styleContainer={[styles.containerBtnModal, STYLES.borBtmLine]}
            onPress={actions.getLaunchGallery}
          >
            <ImageIcon width={18} height={18} fill={COLORS.black80} />
            <Text
              style={[
                styles.descText,
                { color: COLORS.primaryBlack },
                STYLES.mrl12,
              ]}
            >
              {I18n.t('chooseFromGallery')}
            </Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default ComplaintFormScreen;
