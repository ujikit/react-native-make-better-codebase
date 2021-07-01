//package import
import React, { useEffect, useState, memo, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import ImageZoom from 'react-native-image-pan-zoom';

//local import
import styles from './ModalViewPhoto.styles';
import I18n from '../../../../i18n';
import { Button, Input, Card } from '../../../../components';
import { ClearIcon } from '../../../../assets/svgs';
import { COLORS, IMAGES, STYLES } from '../../../../configs';
import { heightByScreen, widthByScreen } from '../../../../utils';

const ModalViewPhoto = ({ visible, onPress, imageData }) => {
  //package value
  const navigation = useNavigation();

  //state value
  const [scroll, setScroll] = useState(true);
  const _onBack = () => {
    onPress();
    navigation.goBack();
  };
  const scaleValue = useRef(1);

  //variable value

  //native effect
  useEffect(() => {
    //function here
  }, []);

  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={visible}
      onBackdropPress={onPress}
      onBackButtonPress={onPress}
      style={styles.wrapModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={200}
      animationOutTiming={200}
    >
      <View style={[styles.containerModal, { backgroundColor: '#000' }]}>
        <View
          style={[
            STYLES.rowAlgCenter,
            STYLES.mrh16,
            { position: 'absolute', left: 0, top: 16, zIndex: 999 },
          ]}
        >
          <Button
            types="nude"
            width={30}
            height={30}
            // styleWrap={styles.headerLeftButton}
            // styleContainer={styles.headerLeftButton}
            onPress={onPress}
          >
            <ClearIcon width={20} height={20} fill={COLORS.whitePure} />
          </Button>
          <Text style={styles.modalTitle}>Photos</Text>
        </View>
        <ImageZoom
          cropWidth={widthByScreen(100)}
          cropHeight={heightByScreen(100)}
          imageWidth={widthByScreen(100)}
          imageHeight={heightByScreen(100)}
          minScale={1}
          maxScale={2}
          panToMove={!scroll}
          onStartShouldSetPanResponder={(e) => {
            return e.nativeEvent.touches.length === 2 || scaleValue.current > 1;
          }}
          onMove={({ scale }) => {
            scaleValue.current = scale;
          }}
        >
          <View
            style={{ width: '100%', height: '100%' }}
            onStartShouldSetResponder={(e) => {
              return e.nativeEvent.touches.length < 2 && scaleValue.current <= 1;
            }}
          >
            <Image
              style={{ flex: 1,width: '100%', height: '100%' }}
              source={imageData.images[0].props.source}
              resizeMode="contain"
            />
          </View>
        </ImageZoom>
      </View>
    </Modal>
  );
};

ModalViewPhoto.propTypes = {
  visible: PropTypes.bool,
  onPress: PropTypes.func,
};

ModalViewPhoto.defaultProps = {
  visible: false,
  onPress: () => {},
};

export default memo(ModalViewPhoto);
