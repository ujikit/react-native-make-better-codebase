//package import here
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

//local import here
import styles from './News.styles';
import NewsLogic from './News.logic';
import I18n from '../../i18n';
import { Button, Header } from '../../components';
import { COLORS, IMAGES, STYLES } from '../../configs';
import { ArrowLeftIcon } from '../../assets/svgs';
import ModalViewPhoto from './components/ModalViewPhoto';

const NewsScreen = ({ route }) => {
  //logic value here
  const { data, actions } = NewsLogic();
  const { detailNews } = route.params;

  //place your extension component here
  const renderHeader = () => (
    <View style={styles.wrapRenderHeader}>
      <Text numberOfLines={2} style={styles.wrapHeaderTextRenderHeader}>
        {detailNews.title}
      </Text>
    </View>
  );

  const renderContent = () => (
    <View style={styles.wrapRenderContent}>
      <ScrollView
        style={styles.wrapMainHeaderTextRenderContent}
        onScroll={({ nativeEvent }) => {
          actions.onScroll(nativeEvent.contentOffset);
        }}
      >
        <View style={styles.wrapMainTextDateTimeRenderContent}>
          <Text style={styles.wrapTextDateTimeRenderContent}>
            {detailNews.dateTime}
          </Text>
          <Text style={styles.wrapTextSeenRenderContent}>
            {I18n.t('seen')}: {detailNews.seen}
          </Text>
        </View>
        <Text style={styles.wrapTextDescriptionRenderContent}>
          {detailNews.content}
        </Text>
        <View style={styles.wrapMainTextSourceRenderContent}>
          <Text style={styles.wrapTextSourceRenderContent}>
            {detailNews.link}
          </Text>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => actions.openModal(0, IMAGES.tamanEasternGreen)}
        style={STYLES.h100}
      >
        <ImageBackground
          resizeMode="stretch"
          source={detailNews.images[0].props.source}
          style={styles.wrapImage}
          imageStyle={STYLES.h100}
        >
          {data.currentContentOffsetScrollview.y > 0 && (
            <View style={styles.wrapImageShadow} />
          )}
          <Header
            shadow={false}
            styleContainer={styles.headerContainer}
            color="transparent"
          >
            <Button
              types="nude"
              width={30}
              height={30}
              styleWrap={styles.headerButton}
              styleContainer={styles.headerButton}
              onPress={() => actions.goBack()}
            >
              <ArrowLeftIcon
                width={20}
                height={20}
                fill={COLORS.primaryWhite}
              />
            </Button>
            <View style={STYLES.fx1}>
              {data.currentContentOffsetScrollview.y > 0 && (
                <Text style={styles.textHeader}>{I18n.t('newsDetail')}</Text>
              )}
            </View>
          </Header>
        </ImageBackground>
      </TouchableOpacity>
      <BottomSheet
        ref={data.RefBottomSheet}
        enabledGestureInteraction={false}
        snapPoints={['73%', '73%', Dimensions.get('window').height-85]}
        renderHeader={renderHeader}
        renderContent={renderContent}
      />
      <ModalViewPhoto
        visible={data.onModalViewPhoto}
        onPress={() => actions.setOnModalViewPhoto(false)}
        imageData={detailNews}
      />
    </View>
  );
};

export default NewsScreen;
