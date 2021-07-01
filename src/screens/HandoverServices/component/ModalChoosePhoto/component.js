//package import
import React, { useEffect, memo } from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { Button, Card } from '../../../../components';
import { CameraTakePhotoIcon, GalleryIcon } from '../../../../assets/svgs';
import { STYLES } from '../../../../configs';

const Component = ({
  visible,
  onPress,
  title,
  launchCamera,
  launchGallery,
}) => {
  //package value

  //state value

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
      onSwipeComplete={onPress}
      swipeDirection="down"
      style={styles.wrapModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={200}
      animationOutTiming={200}
    >
      <View style={styles.containerModal}>
        <Text style={[styles.modalTitle, STYLES.mrb12]}>{title}</Text>
        <Card
          types="button"
          styleShadow={styles.cardShadow}
          styleWrap={[styles.cardWrap]}
          styleContainer={styles.cardWrap}
          onPress={launchCamera}
        >
          <View style={[STYLES.rowAlgCenter, styles.cardItem]}>
            <Button types="nude" width={30} height={31}>
              <CameraTakePhotoIcon width={24} height={24} />
            </Button>
            <Text style={[STYLES.mrl12, styles.textItem]}>Ambil Foto</Text>
          </View>
        </Card>
        <Card
          types="button"
          styleShadow={styles.cardShadow}
          styleWrap={[styles.cardWrap]}
          styleContainer={styles.cardWrap}
          onPress={launchGallery}
        >
          <View style={[STYLES.rowAlgCenter, styles.cardItem]}>
            <Button types="nude" width={30} height={31}>
              <GalleryIcon width={24} height={24} />
            </Button>
            <Text style={[STYLES.mrl12, styles.textItem]}>
              Ambil dari galeri
            </Text>
          </View>
        </Card>
        <Text
          style={[styles.textCancel, STYLES.mrt20, STYLES.mrb16]}
          onPress={onPress}
        >
          Batal
        </Text>
      </View>
    </Modal>
  );
};

Component.propTypes = {
  visible: PropTypes.bool,
  onPress: PropTypes.func,
};

Component.defaultProps = {
  visible: false,
  onPress: () => {},
};

export default memo(Component);
