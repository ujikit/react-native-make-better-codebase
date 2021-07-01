//package import here
import React from 'react';
import { View, Text, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

//local import here
import styles from './WaterCamera.styles';
import WaterCameraLogic from './WaterCamera.logic';
import I18n from '../../../i18n';
import { Button, Header } from '../../../components';
import { COLORS, IMAGES, STYLES } from '../../../configs';
import { ArrowLeftIcon, FlashLightIcon } from '../../../assets/svgs';

const WaterCameraScreen = ({ route }) => {
  let headerTitle = route.params.title;
  const dataItem = route.params.data;

  //logic value here
  const { data, actions } = WaterCameraLogic(dataItem);

  //place your extension component here

  return (
    <View style={styles.container}>
      <RNCamera
        ref={data.refCamera}
        style={STYLES.fx1}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={data.flashMode}
      >
        <Header
          shadow={false}
          color={COLORS.blackOp3}
          styleContainer={styles.headerContainer}
        >
          <Button
            types="nude"
            width={40}
            height={40}
            styleWrap={styles.headerButton}
            styleContainer={styles.headerButton}
            onPress={() => actions.goBack()}
          >
            <ArrowLeftIcon width={21} height={21} fill={COLORS.primaryWhite} />
          </Button>
          <Text style={[styles.headerTitle, STYLES.mrl16]}>{headerTitle}</Text>
        </Header>
        <View style={STYLES.fx1}>
          <View style={styles.topWrap}>
            <Text style={styles.descText}>{I18n.t('placeWaterMeterBox')}</Text>
          </View>
          <View style={styles.middleWrap}>
            <View style={styles.coverWrap} />
            <Image
              source={IMAGES.cameraFrame}
              resizeMode="stretch"
              style={styles.cameraFrame}
            />
            <View style={styles.coverWrap} />
          </View>
          <View style={styles.bottomWrap}>
            <Button
              types="nude"
              width={40}
              height={40}
              styleWrap={styles.headerButton}
              styleContainer={styles.headerButton}
              onPress={actions._handleFlashLight}
            >
              <FlashLightIcon
                width={21}
                height={21}
                fill={COLORS.primaryWhite}
              />
            </Button>
            <Text style={[styles.descText, STYLES.mrt4]}>
              {I18n.t('pressToActivate')}
            </Text>
            <View style={styles.wrapCapture}>
              <Button
                color={COLORS.primaryWhite}
                width={40}
                height={40}
                styleWrap={styles.headerButton}
                styleContainer={styles.headerButton}
                onPress={actions._handleCapture}
              />
            </View>
          </View>
        </View>
      </RNCamera>
    </View>
  );
};

export default WaterCameraScreen;
