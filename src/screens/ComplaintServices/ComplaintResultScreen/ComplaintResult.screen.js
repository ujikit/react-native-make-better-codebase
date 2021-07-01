//package import here
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

//local import here
import styles from './ComplaintResult.styles';
import ComplaintResultLogic from './ComplaintResult.logic';
import I18n from '../../../i18n';
import { Alert, Button, Card, Header, Input } from '../../../components';
import { COLORS, IMAGES, STYLES } from '../../../configs';
import { ArrowLeftIcon } from '../../../assets/svgs';

const ComplaintResultScreen = () => {
  //logic value here
  const { data, actions } = ComplaintResultLogic();

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
      <Alert
        visible={data.alertSave}
        types="success"
        title="Berhasil disimpan"
        close={() => actions.setAlertSave(!data.alertSave)}
      />
      <View style={[STYLES.pdh8, STYLES.pdv24]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.complaintReport.imageEvidence.map((item, index) => (
            <View key={index + 1} style={[styles.wrapPhotoImage, STYLES.mrh8]}>
              <Image
                source={item.url}
                resizeMode="cover"
                style={styles.wrapPhotoImage}
              />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={STYLES.pd16}>
        <View style={styles.wrapText}>
          <Text style={styles.headerTitle}>{I18n.t('description')}</Text>
        </View>
        <View style={[styles.wrapText, STYLES.mrb24]}>
          <Text style={styles.titleText}>
            Lampu sudah dalam kondisi menyala dan baik
          </Text>
        </View>
        <Text style={[styles.titleText, { color: COLORS.primaryBlack }]}>
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
        <View style={[STYLES.rowAlgCenter, STYLES.justEnd]}>
          <Button
            color={COLORS.black80}
            styleWrap={[STYLES.br100, STYLES.mrt12]}
            styleContainer={[STYLES.pdh8, STYLES.pdv4]}
            styleText={[styles.normalText, { color: COLORS.primaryWhite }]}
            title={`${I18n.t('seeAssessment')} >>`}
            onPress={() => actions.setModalVisible(!data.modalVisible)}
          />
        </View>
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
          <Image
            source={IMAGES.complaint}
            resizeMode="contain"
            style={[styles.modalImage, STYLES.mrb16]}
          />
          <Text style={[styles.headerTitle, STYLES.mrb16, STYLES.txtCenter]}>
            {I18n.t('modal.complaintResultTitle')}
          </Text>
          <Button
            title={I18n.t('oke')}
            width={160}
            styleContainer={[STYLES.pdv12, STYLES.pdh24]}
            onPress={() => actions.setModalVisible(!data.modalVisible)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default ComplaintResultScreen;
