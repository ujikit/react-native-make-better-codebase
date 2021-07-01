//package import here
import React from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import moment from 'moment';

//local import here
import styles from './WaterForm.styles';
import WaterFormLogic from './WaterForm.logic';
import I18n from '../../../i18n';
import { Button, Header, Input } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import {
  ArrowLeftIcon,
  CameraAltIcon,
  CheckListIcon,
  HistoryIcon,
} from '../../../assets/svgs';

const WaterFormScreen = ({ route }) => {
  let headerTitle = route.params.title;
  let dataItem = route.params.data;
  let capture = route.params.capture;
  let history = route.params.history;
  let isEdit = route.params.isEdit;
  let isUpdate = route.params.isUpdate;

  //logic value here
  const { data, actions } = WaterFormLogic();
  const insets = useSafeAreaInsets();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header styleContainer={styles.headerContainer}>
        <View style={STYLES.rowAlgCenter}>
          <Button
            types="nude"
            width={40}
            height={40}
            styleWrap={styles.headerButton}
            styleContainer={styles.headerButton}
            onPress={() => actions.goBack()}
          >
            <ArrowLeftIcon width={21} height={21} fill={COLORS.primaryBlack} />
          </Button>
          <Text style={[styles.headerTitle, STYLES.mrl16]}>{headerTitle}</Text>
        </View>
        {history && (
          <Button
            types="nude"
            width={40}
            height={40}
            styleWrap={styles.headerButton}
            styleContainer={styles.headerButton}
            onPress={() => actions.goToHistory(dataItem)}
          >
            <HistoryIcon width={21} height={21} fill={COLORS.black90} />
          </Button>
        )}
      </Header>
      <KeyboardAvoidingView
        style={STYLES.fx1}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView keyboardShouldPersistTaps="handled" style={STYLES.fx1}>
          <View style={[styles.wrapContent, styles.WrapTop]}>
            <View style={STYLES.fx1}>
              <Text style={[styles.headerTitle, STYLES.mrb4]}>
                {dataItem.dataReport.title}
              </Text>
              <Text style={[styles.descText, STYLES.mrb4]}>
                {I18n.t('technician')}: {dataItem.dataReport.engineer}
              </Text>
              {isEdit ? (
                <Text style={styles.descText}>
                  {I18n.t('timeRecording')}: {moment().format('DD MMM YYYY')} |{' '}
                  {moment().format('hh:mm')}
                </Text>
              ) : (
                <Text style={styles.descText}>
                  {I18n.t('timeRecording')}: {dataItem.dataReport.createdAt}
                </Text>
              )}
            </View>
            {isUpdate && (
              <View style={styles.wrapLabel}>
                <Text style={styles.labelText}>{I18n.t('doneId')}</Text>
              </View>
            )}
          </View>
          <View style={styles.wrapBorder} />
          <View style={[styles.wrapContent, STYLES.fx1]}>
            {isEdit ? (
              <View style={[STYLES.rowAlgCenter, STYLES.spaceBtwn]}>
                <View style={STYLES.rowAlgCenter}>
                  <Text style={[styles.subTitleText, STYLES.mrr8]}>
                    {I18n.t('uploadPhotos')}
                  </Text>
                  <CheckListIcon width={24} height={24} />
                </View>
                <Button
                  types="nude"
                  width={40}
                  height={40}
                  styleWrap={styles.headerButton}
                  styleContainer={styles.headerButton}
                  onPress={() => actions.goToWaterCamera(dataItem)}
                >
                  <CameraAltIcon width={21} height={21} fill={COLORS.black90} />
                </Button>
              </View>
            ) : (
              <Text style={[styles.subTitleText, STYLES.mrb12]}>Foto</Text>
            )}
            <Image
              source={
                isEdit
                  ? { uri: capture.uri }
                  : { uri: dataItem.dataReport.imageReport }
              }
              resizeMode="cover"
              style={[styles.imagePhoto, STYLES.mrb12]}
            />
            <Text style={[styles.subTitleText, STYLES.mrb12]}>
              {I18n.t('endMeter')}
              {isEdit && <Text style={{ color: COLORS.red50 }}> *</Text>}
            </Text>
            <Input
              value={isEdit ? data.endMeter : dataItem.dataReport.endMeter}
              onChangeText={(val) => {
                actions.setEndMeter(val);
                actions.setIsError(false);
              }}
              placeholder={I18n.t('fillEndMeter')}
              styleTextInput={styles.descText}
              editable={isEdit}
              styleBox={!isEdit && styles.inputViewOnly}
              keyboardType="numeric"
              isError={data.isError}
              errorMessage={data.errorMessage}
            />
          </View>
        </ScrollView>
        {isUpdate && (
          <View
            style={[
              styles.wrapFooterButton,
              insets.bottom !== 0 && { paddingBottom: insets.bottom },
            ]}
          >
            <Button
              styleContainer={STYLES.pdv12}
              title={I18n.t('updateInputMeter')}
              onPress={() => actions.goToWaterCamera(dataItem)}
            />
          </View>
        )}
        {isEdit && (
          <View
            style={[
              styles.wrapFooterButton,
              insets.bottom !== 0 && { paddingBottom: insets.bottom },
            ]}
          >
            <Button
              disabled={!data.endMeter}
              styleContainer={STYLES.pdv12}
              title={I18n.t('send')}
              loadingTitle={`${data.progressUpload} ${I18n.t('uploading')}`}
              isLoading={data.waterState.addWaterReport.isLoading}
              onPress={() => actions._handleSendWaterReport(dataItem, capture)}
            />
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default WaterFormScreen;
