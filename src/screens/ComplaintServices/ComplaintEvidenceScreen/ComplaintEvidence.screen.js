//package import here
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';

//local import here
import styles from './ComplaintEvidence.styles';
import ComplaintEvidenceLogic from './ComplaintEvidence.logic';
import I18n from '../../../i18n';
import { Input, Button, Header } from '../../../components';
import { COLORS, STYLES, IMAGES } from '../../../configs';
import { ArrowLeftIcon, UploadAreaIcon } from '../../../assets/svgs';
import ModalChoosePhoto from '../../HandoverServices/component/ModalChoosePhoto';

const ComplaintEvidencelScreen = () => {
  //logic value here
  const { data, actions } = ComplaintEvidenceLogic();
  const { globalComplaintReducer } = useSelector((state) => state.complaint);
  console.log('hehehe ', globalComplaintReducer.sendSolutionImageOne);

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header shadow={true} styleContainer={styles.containerHeader}>
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
          {I18n.t('complaintEvidence')}
        </Text>
      </Header>
      <ScrollView>
        <View style={[STYLES.pdh16]}>
          <Text style={[STYLES.mrt20, styles.uploadPhotos]}>
            Solusi <Text style={styles.mandatory}>*</Text>
          </Text>
          <Input
            types="textarea"
            value={data.reason}
            onChangeText={(val) => actions.setReason(val)}
            placeholder={I18n.t('evidenceDescription')}
            styleWrap={[STYLES.mrb20, STYLES.mrt4]}
            styleTextInput={styles.textInputStyles}
          />
          <Text style={styles.uploadPhotos}>Unggah Foto</Text>
          <View style={[STYLES.rowAlgCenter, STYLES.spaceBtwn, STYLES.mrt20]}>
            <Button
              types="nude"
              height={98}
              width={98}
              onPress={() => actions._setPickModal('one')}
            >
              <Image
                source={
                  globalComplaintReducer.sendSolutionImageOne
                    ? { uri: globalComplaintReducer.sendSolutionImageOne }
                    : IMAGES.uploadAreaActive
                }
                style={styles.imageStyle}
              />
            </Button>
            <Button
              types="nude"
              height={98}
              width={98}
              onPress={() => actions._setPickModal('two')}
            >
              <Image
                source={
                  globalComplaintReducer.sendSolutionImageTwo
                    ? { uri: globalComplaintReducer.sendSolutionImageTwo }
                    : IMAGES.uploadAreaActive
                }
                style={styles.imageStyle}
              />
            </Button>
            <Button
              types="nude"
              height={98}
              width={98}
              onPress={() => actions._setPickModal('three')}
            >
              <Image
                source={
                  globalComplaintReducer.sendSolutionImageThree
                    ? { uri: globalComplaintReducer.sendSolutionImageThree }
                    : IMAGES.uploadAreaActive
                }
                style={styles.imageStyle}
              />
            </Button>
          </View>
        </View>
      </ScrollView>
      <View style={styles.wrapFooter}>
        <Button
          title="Kirim"
          onPress={() => actions._sendEvidence()}
          styleContainer={[STYLES.mrb16, STYLES.mrt20]}
          disabled={
            !data.reason || !globalComplaintReducer.sendSolutionImageOne
          }
        />
      </View>
      <ModalChoosePhoto
        visible={data.modalPickPhoto}
        onPress={() => {
          actions.setModalPickPhoto(false);
        }}
        title={I18n.t('choosePhoto')}
        launchCamera={() => {
          actions.setModalPickPhoto(false);
          actions._getLaunchCamera();
        }}
        launchGallery={() => {
          actions._getLaunchGallery();
        }}
      />
    </View>
  );
};

export default ComplaintEvidencelScreen;
