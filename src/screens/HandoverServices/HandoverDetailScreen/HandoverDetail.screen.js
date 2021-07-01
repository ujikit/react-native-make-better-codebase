//package import here
import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

//local import here
import styles from './HandoverDetail.styles';
import HandoverDetailLogic from './HandoverDetail.logic';
import I18n from '../../../i18n';
import {
  Alert as AlertPopUp,
  Button,
  Header,
  ProgressUpload,
} from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import {
  ArrowLeftIcon,
  UploadAreaIcon,
  CheckListIcon,
} from '../../../assets/svgs';
import ModalChoosePhoto from '../component/ModalChoosePhoto';
import ModalUpdate from './../component/ModalUpdate';

const HandoverDetailScreen = () => {
  //logic value here
  const { data, actions } = HandoverDetailLogic();

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
          onPress={() => actions._goBack()}
        >
          <ArrowLeftIcon width={16} height={16} fill={COLORS.primaryBlack} />
        </Button>
        <Text style={[styles.headerTitle, STYLES.mrl8]}>
          {I18n.t('handoverTitle')}
        </Text>
      </Header>
      <AlertPopUp
        visible={data.errorMessage}
        title="Telah terjadi gangguan, ayo coba lagi!"
        types="error"
        duration={3000}
        close={() => actions.setErrorMessage(false)}
      />
      <ProgressUpload
        show={data.isUpload}
        progressUpload={data.progressUpload}
      />
      <ScrollView>
        <View style={STYLES.pd16}>
          <View style={[STYLES.rowAlgCenter, STYLES.spaceBtwn, STYLES.mrb4]}>
            <Text style={styles.headerTitle}>{data.dataHandover.title}</Text>
          </View>
          <Text style={[styles.descText, STYLES.mrb4]}>
            Teknisi: {data.dataHandover.engineer}
          </Text>
          <Text style={[styles.descText]}>
            Agenda: {data.dataHandover.agenda}
          </Text>
        </View>
        <View style={[styles.itemSeparator]} />
        <View style={STYLES.pd16}>
          {data.dataHandover.length !== 0 && (
            <View>
              <View>
                {data.handoverStatus === 'Undone' &&
                data.handoverState.addHandover.code === null &&
                data.handoverState.updateHandover.code === null ? (
                  <View style={STYLES.rowAlgCenter}>
                    <Text style={[styles.photoFont]}>
                      {I18n.t('uploadPhoto')}
                      {!data.imageOne && (
                        <Text style={styles.colorRed}> *</Text>
                      )}
                    </Text>
                    {data.imageOne !== '' && (
                      <CheckListIcon width={22} height={22} />
                    )}
                  </View>
                ) : data.changeStatus === true ? (
                  <View style={STYLES.rowAlgCenter}>
                    <Text style={[styles.photoFont, STYLES.mrr4]}>
                      Data handover
                    </Text>
                    <CheckListIcon width={22} height={22} />
                  </View>
                ) : (
                  (data.handoverStatus === 'Done' ||
                    data.handoverState.addHandover.code === 200 ||
                    data.handoverState.updateHandover.code === 200) && (
                    <View style={[STYLES.rowAlgCenter, STYLES.spaceBtwn]}>
                      <Text style={[styles.photoFont]}>Data handover</Text>
                      {(data.handoverState.addHandover.code === 200 ||
                        data.handoverState.updateHandover.code === 200 ||
                        (data.dataHandover.status === 'Done' &&
                          data.diffDays > -30)) && (
                        <Text
                          style={[styles.editPhoto, STYLES.mrr4]}
                          onPress={() => actions._modalUpdate()}
                        >
                          Ubah foto
                        </Text>
                      )}
                    </View>
                  )
                )}
                <View
                  style={[STYLES.rowAlgCenter, STYLES.spaceBtwn, STYLES.mrt12]}
                >
                  <Button
                    types="nude"
                    height={104}
                    width={104}
                    onPress={() =>
                      (data.handoverStatus === 'Undone' ||
                        data.changeStatus === true) &&
                      actions._setPickModal(0)
                    }
                  >
                    {data.imageOne === '' || data.imageOne === undefined ? (
                      <View>
                        {data.handoverStatus !== 'Done' && (
                          <UploadAreaIcon
                            width={104}
                            height={104}
                            fill={COLORS.primaryBlack}
                          />
                        )}
                      </View>
                    ) : (
                      <Image
                        source={{ uri: data.imageOne }}
                        style={styles.imageUpload}
                      />
                    )}
                  </Button>
                  <Button
                    types="nude"
                    height={104}
                    width={104}
                    onPress={() =>
                      data.handoverStatus === 'Undone' &&
                      actions._setPickModal(1)
                    }
                  >
                    {data.imageTwo === '' || data.imageTwo === undefined ? (
                      <View>
                        {data.handoverStatus !== 'Done' && (
                          <UploadAreaIcon
                            width={104}
                            height={104}
                            fill={COLORS.primaryBlack}
                          />
                        )}
                      </View>
                    ) : (
                      <Image
                        source={{ uri: data.imageTwo }}
                        style={styles.imageUpload}
                      />
                    )}
                  </Button>
                  <Button
                    types="nude"
                    height={104}
                    width={104}
                    onPress={() =>
                      data.handoverStatus === 'Undone' &&
                      actions._setPickModal(2)
                    }
                  >
                    {data.imageThree === '' || data.imageThree === undefined ? (
                      <View>
                        {data.handoverStatus !== 'Done' && (
                          <UploadAreaIcon
                            width={104}
                            height={104}
                            fill={COLORS.primaryBlack}
                          />
                        )}
                      </View>
                    ) : (
                      <Image
                        source={{ uri: data.imageThree }}
                        style={styles.imageUpload}
                      />
                    )}
                  </Button>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.wrapFooter}>
        {data.handoverStatus === 'Undone' && (
          <Button
            title={I18n.t('send')}
            onPress={() => actions._sendHandover()}
            styleContainer={[STYLES.mrb16, STYLES.mrt20]}
            disabled={!data.imageOne}
            isLoading={
              data.handoverState.addHandover.isLoading ||
              data.handoverState.updateHandover.isLoading
            }
          />
        )}
      </View>
      <ModalChoosePhoto
        visible={data.modalPickPhoto}
        onPress={() => {
          actions.setModalPickPhoto(false);
        }}
        title={I18n.t('choosePhoto')}
        launchCamera={() => {
          actions._getLaunchCamera();
        }}
        launchGallery={() => {
          actions._getLaunchGallery();
        }}
      />
      <ModalUpdate
        visible={data.modalUpdate}
        setShowModal={() => actions.setModalUpdate(false)}
        pressBack={() => actions.setModalUpdate(false)}
        pressSuccess={() => actions._changeStatus()}
      />
    </View>
  );
};

export default HandoverDetailScreen;
