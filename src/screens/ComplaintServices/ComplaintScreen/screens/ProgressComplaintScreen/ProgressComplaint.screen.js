//package import here
import React from 'react';
import { View, Text, FlatList } from 'react-native';

//local import here
import styles from './ProgressComplaint.styles';
import ProgressComplaintLogic from './ProgressComplaint.logic';
import I18n from '../../../../../i18n';
import { Button, ScreenMessage } from '../../../../../components';
import { COLORS, IMAGES, STYLES } from '../../../../../configs';
import { ExpandMoreIcon } from '../../../../../assets/svgs';

const ProgressComplaintScreen = () => {
  //logic value here
  const { data, actions } = ProgressComplaintLogic();

  //place your extension component here
  const _renderList = ({ item, index }) => (
    <Button
      color={COLORS.primaryWhite}
      styleWrap={STYLES.br0}
      styleContainer={styles.containerItem}
      onPress={() => {
        actions._gotToComplaintDetail(item);
      }}
    >
      <View style={styles.contentItem}>
        <View style={STYLES.fx1}>
          <Text style={[styles.titleText, STYLES.mrb4]}>{item.complaint}</Text>
          <Text style={[styles.unitText, STYLES.mrt4]}>{item.unit}</Text>
          <Text style={[styles.descText, STYLES.mrt4]}>
            Ticket {item.ticketNumber} | {item.complaintDate}
          </Text>
        </View>
        <View style={styles.wrapLeftItem}>
          <Text
            style={[
              styles.statusText,
              { color: actions._colorStatus(item.status) },
            ]}
          >
            {item.status.toLowerCase() === 'waiting'
              ? 'Menunggu'
              : item.status.toLowerCase() === 'in progress'
              ? 'Pengerjaan'
              : 'Selesai'}
          </Text>
        </View>
      </View>
    </Button>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={
          data.listComplaint.length > 0 &&
          data.listComplaint.filter(
            (item) =>
              item.status.toLowerCase() === 'waiting' ||
              item.status.toLowerCase() === 'in progress'
          )
        }
        extraData={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderList}
        contentContainerStyle={
          data.listComplaint.length === 0 && styles.wrapEmtpy
        }
        ListEmptyComponent={
          <ScreenMessage
            sourceImage={IMAGES.dataMaintenanceMono}
            styleImage={styles.imageEmpty}
            title={I18n.t('empty.demageTitle')}
            desc={I18n.t('empty.demageDesc')}
          />
        }
      />
    </View>
  );
};

export default ProgressComplaintScreen;
