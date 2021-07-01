//package import here
import React from 'react';
import { Image, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

//local import here
import styles from './SendSolution.styles';
import SendSolutionLogic from './SendSolution.logic';
import I18n from '../../../i18n';
import {
  Alert,
  Button,
  Header,
  Input,
  ProgressUpload,
} from '../../../components';
import { COLORS, IMAGES, STYLES } from '../../../configs';
import {
  ArrowLeftIcon,
  CameraAltIcon,
  DeleteIcon,
  ImageIcon,
  NewReleasesIcon,
} from '../../../assets/svgs';

const SendSolutionScreen = () => {
  //logic value here
  const { data, actions } = SendSolutionLogic();
  const insets = useSafeAreaInsets();
  const { globalState, maintenanceState } = useSelector((state) => ({
    globalState: state.global,
    maintenanceState: state.maintenance,
  }));
  const { progressUpload } = globalState;
  const {
    isMessageMaintenanceStatus,
    isPostMaintenanceStatus,
    maintenanceDetail,
    globalMaintenanceReducer,
  } = maintenanceState;

  const { step } = maintenanceDetail;
  const currentStatus =
    step[step.filter((item) => item.time).length - 1].status;

  //place your extension component here

  return (
    <View style={styles.container}>
      <ProgressUpload
        visible={progressUpload.visible}
        value={data.progressUpload}
      />
      <Header styleContainer={styles.headerContainer}>
        <View style={{ width: 30 }}>
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
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.textHeader}>{I18n.t('sendSolution')}</Text>
        </View>
      </Header>
      <ScrollView>
        <View style={styles.wrapContent}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.wrapTextSolution}>{I18n.t('solution')}</Text>
            <Text
              style={
                (styles.wrapTextSolution,
                { fontSize: 16, color: COLORS.red50, marginTop: -4.5 })
              }
            >
              {' '}
              *
            </Text>
          </View>
          <Input
            editable={currentStatus == 'done' ? false : true}
            types="textarea"
            value={data.solution}
            onChangeText={(val) => actions.setSolution(val)}
            placeholder={I18n.t('writeDownTheSolutionOfYourWork')}
            returnKeyType="done"
            styleWrap={STYLES.mrt4}
            styleTextInput={{ paddingLeft: 0 }}
            styleLabel={styles.textLableStyles}
          />
          <Text style={[styles.wrapTextSolution, STYLES.mrt12]}>
            {I18n.t('uploadPhoto')}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 18,
            }}
          >
            <Button
              disabled={currentStatus == 'done' && true}
              color={COLORS.softOrange}
              styleWrap={{ alignItems: null, margin: 0, padding: 0 }}
              styleContainer={{ alignItems: null, margin: 0, padding: 0 }}
              onPress={() => actions.handleOpenModalUploadPhoto('one')}
            >
              <Image
                source={
                  globalMaintenanceReducer.sendSolutionImageOne
                    ? { uri: globalMaintenanceReducer.sendSolutionImageOne }
                    : IMAGES.uploadAreaActive
                }
                resizeMode="contain"
                style={styles.uploadImage}
              />
            </Button>
            <Button
              disabled={currentStatus == 'done' && true}
              color={COLORS.softOrange}
              styleWrap={{ alignItems: null, margin: 0, padding: 0 }}
              styleContainer={{ alignItems: null, margin: 0, padding: 0 }}
              onPress={() => actions.handleOpenModalUploadPhoto('two')}
            >
              <Image
                source={
                  globalMaintenanceReducer.sendSolutionImageTwo
                    ? { uri: globalMaintenanceReducer.sendSolutionImageTwo }
                    : IMAGES.uploadAreaActive
                }
                resizeMode="contain"
                style={styles.uploadImage}
              />
            </Button>
            <Button
              disabled={currentStatus == 'done' && true}
              color={COLORS.softOrange}
              styleWrap={{ alignItems: null, margin: 0, padding: 0 }}
              styleContainer={{ alignItems: null, margin: 0, padding: 0 }}
              onPress={() => actions.handleOpenModalUploadPhoto('three')}
            >
              <Image
                source={
                  globalMaintenanceReducer.sendSolutionImageThree
                    ? { uri: globalMaintenanceReducer.sendSolutionImageThree }
                    : IMAGES.uploadAreaActive
                }
                resizeMode="contain"
                style={styles.uploadImage}
              />
            </Button>
          </View>
        </View>
      </ScrollView>
      {currentStatus !== 'done' && (
        <View>
          <Button
            title={I18n.t('send')}
            types="filled"
            styleWrap={{ padding: 10 }}
            onPress={() => actions.handleSend()}
          />
        </View>
      )}
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
          {(globalMaintenanceReducer.sendSolutionImageOne &&
            globalMaintenanceReducer.currentSendSolutionImage === 'one') ||
          (globalMaintenanceReducer.sendSolutionImageTwo &&
            globalMaintenanceReducer.currentSendSolutionImage === 'two') ||
          (globalMaintenanceReducer.sendSolutionImageThree &&
            globalMaintenanceReducer.currentSendSolutionImage === 'three') ? (
            <Button
              color={COLORS.primaryWhite}
              styleWrap={[STYLES.br0]}
              styleContainer={[styles.containerBtnModal, STYLES.borBtmLine]}
              onPress={actions._handleDeletePhoto}
            >
              <DeleteIcon width={18} height={18} fill={COLORS.black80} />
              <Text
                style={[
                  styles.descText,
                  { color: COLORS.primaryBlack },
                  STYLES.mrl12,
                ]}
              >
                {I18n.t('deletePhoto')}
              </Text>
            </Button>
          ) : null}
          <Button
            color={COLORS.primaryWhite}
            styleWrap={STYLES.br0}
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
          <Button
            color={COLORS.primaryWhite}
            styleWrap={STYLES.br0}
            styleContainer={[
              styles.containerBtnModal,
              { alignSelf: 'center', paddingTop: 28 },
            ]}
            onPress={() => actions.setModalVisible(false)}
          >
            <Text style={[styles.cancelText, STYLES.mrl12]}>
              {I18n.t('cancel')}
            </Text>
          </Button>
        </View>
      </Modal>
      <Modal
        backdropOpacity={0.3}
        isVisible={data.isVisibleModalConfirmSendSolution}
        onBackdropPress={() =>
          actions.setIsVisibleModalConfirmSendSolution(
            !data.isVisibleModalConfirmSendSolution
          )
        }
        onBackButtonPress={() =>
          actions.setIsVisibleModalConfirmSendSolution(
            !data.isVisibleModalConfirmSendSolution
          )
        }
        onSwipeComplete={() =>
          actions.setIsVisibleModalConfirmSendSolution(
            !data.isVisibleModalConfirmSendSolution
          )
        }
        swipeDirection="down"
        style={styles.wrapModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={200}
        animationOutTiming={200}
      >
        <View style={styles.containerModal}>
          <View style={styles.wrapNewReleasesIcon}>
            <NewReleasesIcon
              width={73.44}
              height={69.69}
              fill={COLORS.black80}
            />
          </View>
          <Text style={styles.wrapTextHeaderConfirmation}>
            Apakah kamu yakin ingin mengirim solusi?
          </Text>
          <Text style={styles.wrapTextDescriptionConfirmation}>
            {I18n.t('makeSureYourWorkisDone')}
          </Text>
          <View
            style={[
              styles.wrapButtonConfirmation,
              { paddingBottom: insets.bottom },
            ]}
          >
            <Button
              title={I18n.t('no')}
              styleText={{ color: COLORS.black60 }}
              types="nude"
              styleWrap={{ borderRadius: 0 }}
              styleContainer={{ width: 130, borderRadius: 0 }}
              onPress={() =>
                actions.setIsVisibleModalConfirmSendSolution(
                  !data.isVisibleModalConfirmSendSolution
                )
              }
            />
            <Button
              title={I18n.t('yesSend')}
              types="filled"
              styleWrap={{ borderRadius: 0 }}
              styleContainer={{ width: 130, borderRadius: 0 }}
              onPress={() => actions.sendSolution(maintenanceDetail)}
            />
          </View>
        </View>
      </Modal>
      {isMessageMaintenanceStatus.isShow && (
        <Alert
          types={isMessageMaintenanceStatus.types}
          visible={isMessageMaintenanceStatus.isShow}
          title={isMessageMaintenanceStatus.title}
        />
      )}
    </View>
  );
};

export default SendSolutionScreen;
