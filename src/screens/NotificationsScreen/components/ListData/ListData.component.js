//package import here
import React from 'react';
import { View, Text } from 'react-native';

//local import here
import styles from './ListData.styles';
import ListDataLogic from './ListData.logic';
import { Button } from '../../../../components';
import { COLORS, STYLES } from '../../../../configs';
import { AssignmentIcon, MaintenanceIcon } from '../../../../assets/svgs';

const ListDataComponent = ({ title, desc, time, type, dataItem }) => {
  //logic value here
  const { actions } = ListDataLogic();

  //place your extension component here
  const iconComponent = (types) => {
    switch (types) {
      case 'complaint':
        return (
          <AssignmentIcon width={20} height={20} fill={COLORS.primaryWhite} />
        );
      case 'maintenance':
        return (
          <MaintenanceIcon width={20} height={20} fill={COLORS.primaryWhite} />
        );
    }
  };

  return (
    <Button
      color={COLORS.primaryWhite}
      styleWrap={STYLES.br0}
      styleContainer={styles.wrapMainContent}
      // onPress={() => actions._handleNavigate(type, dataItem)}
    >
      <View style={styles.itemIconWrap}>{iconComponent(type)}</View>
      <View style={styles.wrapTitleAndStatus}>
        {title ? (
          <Text numberOfLines={2} style={[styles.textTitle, STYLES.mrb4]}>
            {title}
          </Text>
        ) : null}
        {desc ? (
          <Text style={[styles.textDesc, STYLES.mrb8]}>{desc}</Text>
        ) : null}
        {time ? (
          <View style={[STYLES.rowAlgCenter, STYLES.spaceBtwn]}>
            <Text style={styles.textTime}>{time}</Text>
            <Text style={styles.textTime}>2 menit yang lalu</Text>
          </View>
        ) : null}
      </View>
    </Button>
  );
};

export default ListDataComponent;
