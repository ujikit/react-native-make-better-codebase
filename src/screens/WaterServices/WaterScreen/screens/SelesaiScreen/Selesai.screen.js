//package import here
import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import Modal from 'react-native-modal';

//local import here
import styles from './Selesai.styles';
import SelesaiLogic from './Selesai.logic';
import I18n from '../../../../../i18n';
import { ScreenMessage, Button } from '../../../../../components';
import { COLORS, IMAGES, STYLES } from '../../../../../configs';
import { widthByScreen } from '../../../../../utils';
import { DoorIcon, SearchIcon } from '../../../../../assets/svgs';

const SelesaiScreen = () => {
  //logic value here
  const { data, actions } = SelesaiLogic();

  //place your extension component here
  const _renderList = ({ item, index }) => (
    <Button
      types="nude"
      styleWrap={STYLES.br0}
      styleContainer={styles.containerItem}
      width={widthByScreen(25)}
      height={widthByScreen(25)}
      onPress={
        item.status === 'NotAvailable'
          ? () => {
              actions.setModalUnavailable(!data.modalUnavailable);
              actions.setModalUnit(item.unitId);
            }
          : item.status === 'Done'
          ? () => actions.goToWaterForm(item)
          : () => actions.goToWaterCamera(item)
      }
    >
      <DoorIcon
        width="37"
        height="37"
        fill={
          item.status === 'Done'
            ? COLORS.green60
            : item.status === 'Undone'
            ? COLORS.red30
            : COLORS.black50
        }
      />
      <Text style={[styles.textItem, STYLES.mrt4]}>
        {I18n.t('unit')} {item.unitId}
      </Text>
    </Button>
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapSearch}>
        <View style={[STYLES.rowAlgCenter, STYLES.fx1]}>
          <SearchIcon width="18" height="18" fill={COLORS.black70} />
          <View style={STYLES.fx1}>
            <TextInput
              placeholder="Cari lantai"
              placeholderTextColor={COLORS.black60}
              style={styles.searchInput}
              value={data.searchValue}
              onChangeText={(val) => actions.setSearchValue(val)}
            />
          </View>
        </View>
        <View>
          <Text style={[styles.descText]}>
            {I18n.t('total')} :{' '}
            {
              data.waterState.allUnitStatus.data.filter(
                (item) => item.status === 'Done'
              ).length
            }{' '}
            {I18n.t('unit')}
          </Text>
        </View>
      </View>
      <FlatList
        data={
          data.searchValue.length
            ? data.waterState.allUnitStatus.data.filter(
                (item) =>
                  item.unitId.includes(data.searchValue) &&
                  item.status === 'Done'
              )
            : data.waterState.allUnitStatus.data.filter(
                (item) => item.status === 'Done'
              )
        }
        extraData={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        renderItem={_renderList}
        contentContainerStyle={
          data.waterState.allUnitStatus.data.filter(
            (item) => item.status === 'Done'
          ).length === 0 && styles.wrapEmtpy
        }
        ListEmptyComponent={
          <ScreenMessage
            sourceImage={IMAGES.waterMeterEmpty}
            title={I18n.t('empty.waterUnitTitle')}
            desc={I18n.t('empty.waterUnitDesc')}
          />
        }
        refreshControl={
          <RefreshControl
            refreshing={data.waterState.allUnitStatus.isLoading}
            onRefresh={actions._getAllUnitStatus}
          />
        }
      />
      <Modal
        backdropOpacity={0.3}
        isVisible={data.modalUnavailable}
        onBackdropPress={() =>
          actions.setModalUnavailable(!data.modalUnavailable)
        }
        onBackButtonPress={() =>
          actions.setModalUnavailable(!data.modalUnavailable)
        }
        onSwipeComplete={() =>
          actions.setModalUnavailable(!data.modalUnavailable)
        }
        swipeDirection="down"
        style={styles.wrapModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={200}
        animationOutTiming={200}
      >
        <View style={styles.containerModal}>
          <Image
            source={IMAGES.soffaFrontWindows}
            resizeMode="contain"
            style={[styles.imageModal, STYLES.mrb16]}
          />
          <Text style={[styles.modalTitle, STYLES.mrb16]}>
            {I18n.t('unit')} {data.modalUnit} {I18n.t('unpopulated')}
          </Text>
          <Button
            title={I18n.t('oke')}
            width={160}
            styleContainer={styles.modalButon}
            onPress={() => actions.setModalUnavailable(!data.modalUnavailable)}
          />
        </View>
      </Modal>
      <Modal
        backdropOpacity={0.3}
        isVisible={data.waterState.modalSuccess.isVisible}
        onBackdropPress={() => actions._handleSendWaterReport()}
        onBackButtonPress={() => actions._handleSendWaterReport()}
        onSwipeComplete={() => actions._handleSendWaterReport()}
        swipeDirection="down"
        style={styles.wrapModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={200}
        animationOutTiming={200}
      >
        <View style={styles.containerModal}>
          <Image
            source={IMAGES.waterMeterCheck}
            resizeMode="contain"
            style={[styles.imageModal, STYLES.mrb16]}
          />
          <Text style={[styles.modalTitle, STYLES.mrb16]}>
            {I18n.t('checkMeterOn')} {I18n.t('unit')}{' '}
            {data.waterState.modalSuccess.unit} {I18n.t('haveBeenCompleted')}
          </Text>
          <Button
            title={I18n.t('oke')}
            width={160}
            styleContainer={styles.modalButon}
            onPress={() => actions._handleSendWaterReport()}
          />
        </View>
      </Modal>
    </View>
  );
};

export default SelesaiScreen;
