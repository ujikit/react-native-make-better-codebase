//package import
import React, { useEffect, memo } from 'react';
import { View, Text, Linking } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { Button } from '../../../../components';
import { PhoneIcon, WhatsappIcon } from '../../../../assets/svgs';
import { COLORS, STYLES } from '../../../../configs';

const ModalCallCs = ({ visible, onPress }) => {
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
        <Text style={[styles.modalTitle, STYLES.mrb12]}>
          Ada kendala? Ayo hubungi CS!
        </Text>
        <Text style={[styles.modalDesc, STYLES.mrb16]}>
          Kamu dapat menghubungi CS jika ada kendala pada pekerjaanmu
        </Text>
        <Button
          onPress={() => Linking.openURL('tel:+6281219002200')}
          width="90%"
          types="ghost"
          styleContainer={[styles.whatsappContainer, STYLES.mrt16]}
          color={COLORS.blue50}
        >
          <View style={STYLES.rowAlgCenter}>
            <PhoneIcon width={18} height={18} fill={COLORS.blue50} />
            <Text style={styles.whatsappStyle}>Phone Call</Text>
          </View>
        </Button>
        <Text
          onPress={onPress}
          style={[
            styles.backStyle,
            STYLES.mrb12,
            styles.whatsappStyle,
            { color: COLORS.black70 },
          ]}
        >
          Kembali
        </Text>
      </View>
    </Modal>
  );
};

ModalCallCs.propTypes = {
  visible: PropTypes.bool,
  onPress: PropTypes.func,
};

ModalCallCs.defaultProps = {
  visible: false,
  onPress: () => {},
};

export default memo(ModalCallCs);
