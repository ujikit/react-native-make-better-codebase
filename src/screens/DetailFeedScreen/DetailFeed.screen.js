import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import LinearGradient from 'react-native-linear-gradient';

import styles from './DetailFeed.styles';
import DetailFeedLogic from './DetailFeed.logic';
import I18n from '../../i18n';
import { Button, Faded, Header, ModalViewPhoto } from '../../components';
import { COLORS, IMAGES, STYLES } from '../../configs';
import METRICS from '../../constants/metrics';
import { ArrowLeftIcon } from '../../assets/svgs';

const height = Platform.OS === 'ios' ? 44 : 56;
const MIN_HEIGHT = height + METRICS.statusBar.height;
const MAX_HEIGHT = 250;

const DetailFeedScreen = () => {
  const { data, actions } = DetailFeedLogic();
  const insets = useSafeAreaInsets();
  const { feedState } = useSelector((state) => ({
    feedState: state.feed,
  }));

  const {
    description,
    feedId,
    image,
    postAt,
    seen,
    source,
    title,
    type,
  } = feedState.detailBroadcast;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <HeaderImageScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        fadeOutForeground
        headerImage={{ uri: image }}
        // renderForeground={() => (
        //   <TouchableOpacity
        //     onPress={() => actions.openModal()}
        //     style={{ height: '100%' }}
        //   />
        // )}
        renderFixedForeground={() => (
          <View style={{}}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
              style={styles.gradient}
              locations={[0, 1.0]}
            />
            <View
              style={{
                flexDirection: 'row',
                paddingTop: insets.top,
                paddingHorizontal: 16,
                alignItems: 'center',
                height: 100,
              }}
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
                  width={17}
                  height={17}
                  fill={COLORS.primaryWhite}
                />
              </Button>
              {data.isShowHeaderText && (
                <Text style={styles.navTitle}>{I18n.t('infoDetail')}</Text>
              )}
            </View>
          </View>
        )}
      >
        <TriggeringView
          onTouchTop={() => actions.setIsShowHeaderText(!data.isShowHeaderText)}
          style={styles.section}
        >
          <Text style={styles.title}>{title}</Text>
        </TriggeringView>
        <View style={styles.wrapMainHeaderTextRenderContent}>
          <View style={styles.wrapMainTextDateTimeRenderContent}>
            <Text style={styles.wrapTextDateTimeRenderContent}>{postAt}</Text>
          </View>
          <Text style={styles.wrapTextDescriptionRenderContent}>
            {description}
          </Text>
          {type == 'news' && (
            <View style={styles.wrapMainTextSourceRenderContent}>
              <Text style={styles.wrapTextSourceRenderContent}>
                Source: {source}
              </Text>
            </View>
          )}
        </View>
      </HeaderImageScrollView>
      <ModalViewPhoto
        visible={data.onModalViewPhoto}
        onPress={() => actions.setOnModalViewPhoto(false)}
        sourceImage={{ uri: image }}
        types="basic"
      />
    </View>
  );
};

export default DetailFeedScreen;
