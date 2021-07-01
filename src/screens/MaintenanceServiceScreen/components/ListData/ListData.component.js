//package import here
import React from 'react';
import { View, Text } from 'react-native';

//local import here
import styles from './ListData.styles';
import ListDataLogic from './ListData.logic';
import I18n from '../../../../i18n';
import { Button } from '../../../../components';
import { COLORS, STYLES } from '../../../../configs';
import { FONT_HEADLINE_H6, FONT_BODY5 } from '../../../../configs/fonts';
import { ExpandMoreIcon } from '../../../../assets/svgs';

const ListDataComponent = ({ data: dataProps }) => {
  //logic value here
  const { data, actions } = ListDataLogic();
  const { maintenanceId, ticket, task, step, asset, engineer } = dataProps;

  //place your extension component here
  textStatusComponent = (status) =>
    status == 'waiting' ? (
      <Text style={{ ...FONT_BODY5, color: COLORS.red50 }}>
        {I18n.t('waiting')}
      </Text>
    ) : status == 'inProgress' ? (
      <Text style={{ ...FONT_BODY5, color: COLORS.orange50 }}>
        {I18n.t('inProgress')}
      </Text>
    ) : status == 'done' ? (
      <Text style={{ ...FONT_BODY5, color: COLORS.green50 }}>
        {I18n.t('done')}
      </Text>
    ) : (
      ''
    );

  return (
    <Button
      color={COLORS.primaryWhite}
      styleWrap={styles.styleWrap}
      styleContainer={styles.styleContainer}
      onPress={() => actions.goToDetailMaintenance(dataProps)}
    >
      <View style={styles.wrapMainContent}>
        <View style={styles.wrapTitleAndDateTime}>
          <Text numberOfLines={1} style={[FONT_HEADLINE_H6, { width: '90%' }]}>
            ({asset.name}) {task.name}
          </Text>
          <ExpandMoreIcon width={12} height={12} fill={COLORS.black80} />
        </View>
        <View style={{ paddingTop: 4 }}>
          <Text style={{ ...FONT_BODY5, color: COLORS.primaryBlack }}>
            No. Tiket: {ticket}
          </Text>
        </View>
        <View style={{ paddingTop: 4 }}>
          <Text style={[FONT_BODY5, COLORS.black70]}>{task.time}</Text>
        </View>
        <View style={styles.wrapPriceAndTextStatus}>
          <View style={{ width: '65%' }}>
            <Text
              numberOfLines={1}
              style={{ ...FONT_BODY5, color: COLORS.primaryBlack }}
            >
              {asset.location}
            </Text>
          </View>
          {textStatusComponent(
            step[step.filter((item) => item.time).length - 1].status
          )}
        </View>
      </View>
      <View style={styles.wrapBottomLine}>
        <View style={styles.bottomLine} />
      </View>
    </Button>
  );
};

export default ListDataComponent;
