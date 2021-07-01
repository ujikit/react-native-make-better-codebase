//package import
import React, { memo, useCallback } from 'react';
import { FlatList, ImageBackground, Linking, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';

//local import
import styles from './styles';
import I18n from '../../../../i18n';
import { Button } from '../../../../components';
import { COLORS, IMAGES, STYLES } from '../../../../configs';
import { CrossIcon } from '../../../../assets/svgs';
import { FONT_HEADLINE_H6 } from '../../../../configs/fonts';

const ModalBannerComponent = ({ visible, setVisible }) => {
  //logic value
  const bannerWidth = 328;
  const bannerHeight = 400;
  const { dashboardState } = useSelector((state) => ({
    dashboardState: state.dashboard,
  }));
  const { data } = dashboardState.bannerList;

  //state value

  //variable value
  const _openLink = async (url) => {
    setVisible(false);
    if (!url) {
      return;
    }
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  //place your extension component here

  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={visible}
      swipeDirection={['up', 'down', 'left', 'right']}
      style={styles.wrapModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={200}
      animationOutTiming={200}
    >
      <Button
        types="nude"
        disabled={!data[data.length - 1].link && true}
        width={bannerWidth}
        height={bannerHeight}
        styleWrap={{ justifyContent: 'center', alignSelf: 'center' }}
        onPress={() => _openLink(data[data.length - 1].link)}
      >
        <ImageBackground
          source={{ uri: data[data.length - 1].image }}
          resizeMode="cover"
          style={{
            width: bannerWidth,
            height: bannerHeight,
          }}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={{ flex: 1, alignSelf: 'flex-end', padding: 9 }}>
            <Button
              types="filled"
              color="rgba(33, 33, 33, 0.8)"
              width={35}
              height={35}
              styleWrap={styles.styleWrap}
              styleContainer={styles.styleContainer}
              onPress={() => setVisible(false)}
            >
              <CrossIcon width={14} height={14} fill={COLORS.primaryWhite} />
            </Button>
          </View>
        </ImageBackground>
      </Button>
    </Modal>
  );
};

export default memo(ModalBannerComponent);
