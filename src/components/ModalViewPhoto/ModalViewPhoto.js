//package import
import React, { useEffect, memo, useRef, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import ImageZoom from 'react-native-image-pan-zoom';
import FastImage from 'react-native-fast-image';

//local import
import styles from './styles';
import Button from '../Button';
import { ClearIcon } from '../../assets/svgs';
import { COLORS, STYLES } from '../../configs';
import { heightByScreen, widthByScreen } from './../../utils';

const ModalViewPhoto = ({
  visible,
  onPress,
  types,
  sourceImage,
  imageData,
  selectedIndex,
}) => {
  //package value

  //state value
  const scaleValue = useRef(1);
  const refff = useRef();

  const [scales, setScales] = useState(1);

  //variable value

  //native effect
  useEffect(() => {
    if (refff.current && visible) {
      refff.current.scrollToIndex({
        animated: true,
        index: selectedIndex,
      });
    }
  }, [selectedIndex, visible]);

  const _renderItem = ({ item, index }) => (
    <View style={styles.renderScrollImage}>
      <ImageZoom
        cropWidth={widthByScreen(100)}
        cropHeight={heightByScreen(100)}
        imageWidth={widthByScreen(100)}
        imageHeight={heightByScreen(100)}
        minScale={1}
        maxScale={2}
        onStartShouldSetPanResponder={(e) => {
          return e.nativeEvent.touches.length === 2 || scaleValue.current > 1;
        }}
        onMove={({ scale }) => {
          scaleValue.current = scale;
        }}
      >
        <View
          style={styles.viewImageScroll}
          onStartShouldSetResponder={(e) => {
            return e.nativeEvent.touches.length < 2 && scaleValue.current <= 1;
          }}
        >
          <Image
            style={styles.imageStyles}
            source={{ uri: item }}
            resizeMode="contain"
          />
        </View>
      </ImageZoom>
    </View>
  );

  const ModalComponent = () => {
    switch (types) {
      case 'basic':
        return (
          <View style={styles.imageModal}>
            <ImageZoom
              cropWidth={widthByScreen(100)}
              cropHeight={heightByScreen(100)}
              imageWidth={widthByScreen(100) * scales}
              imageHeight={heightByScreen(100) * 7500 * scales}
              panToMove={true}
              pinchToZoom={true}
              maxScale={10}
              onStartShouldSetPanResponder={(e) => {
                return (
                  e.nativeEvent.touches.length === 2 || scaleValue.current > 1
                );
              }}
              onMove={({ scale }) => {
                scaleValue.current = scale;
                setScales(scale);
              }}
            >
              <View
                style={styles.imageView}
                onStartShouldSetResponder={(e) => {
                  return (
                    e.nativeEvent.touches.length < 2 && scaleValue.current <= 1
                  );
                }}
              >
                <FastImage
                  style={[
                    styles.images,
                    {
                      width: widthByScreen(100) * scales,
                      height: heightByScreen(100) * 7500 * scales,
                    },
                  ]}
                  source={sourceImage}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
            </ImageZoom>
          </View>
        );
      case 'scroll':
        return (
          <FlatList
            horizontal
            ref={refff}
            showHorizontalScrollIndicator={false}
            data={imageData}
            pagingEnabled
            keyExtractor={(item, index) => index.toString()}
            renderItem={_renderItem}
            onScrollToIndexFailed={(error) => {
              refff.current.scrollToOffset({
                offset: error.averageItemLength * error.index,
                animated: true,
              });
              setTimeout(() => {
                if (imageData !== 0 && imageData !== null) {
                  refff.current.scrollToIndex({
                    index: error.index,
                    animated: true,
                  });
                }
              }, 100);
            }}
          />
        );
    }
  };

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
      <View style={[styles.containerModal]}>
        <View style={[STYLES.rowAlgCenter, STYLES.mrh16, styles.clearStyle]}>
          <Button
            types="nude"
            width={32}
            height={32}
            styleWrap={styles.clearWrap}
            styleContainer={styles.clearContainer}
            onPress={onPress}
          >
            <ClearIcon width={28} height={28} fill={COLORS.whitePure} />
          </Button>
        </View>
        {ModalComponent()}
      </View>
    </Modal>
  );
};

ModalViewPhoto.propTypes = {
  visible: PropTypes.bool,
  onPress: PropTypes.func,
  sourceImage: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  types: PropTypes.oneOf(['basic', 'scroll']),
};

ModalViewPhoto.defaultProps = {
  visible: false,
  onPress: () => {},
  sourceImage: '',
  types: 'basic',
};

export default memo(ModalViewPhoto);
