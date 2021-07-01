import React, { memo } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import I18n from '../../../../i18n';
import { Button } from '../../../../components';
import { COLORS, STYLES } from '../../../../configs';

const TopTabNav = (props) => {
  const navigation = useNavigation();
  const index = props.state.index;

  return (
    <View style={STYLES.w100}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabWrap}
      >
        <Button
          types="nude"
          styleWrap={styles.navWrap}
          styleContainer={[
            styles.navContainer,
            index === 0 && styles.navActive,
          ]}
          onPress={() => navigation.navigate('Semua')}
        >
          <Text
            style={[styles.navLabel, index === 0 && { color: COLORS.black80 }]}
          >
            {I18n.t('all')}
          </Text>
        </Button>
        <Button
          types="nude"
          styleWrap={styles.navWrap}
          styleContainer={[
            styles.navContainer,
            index === 1 && styles.navActive,
          ]}
          onPress={() => navigation.navigate('Belum')}
        >
          <View
            style={[
              styles.badgeWrap,
              STYLES.mrr4,
              { backgroundColor: COLORS.red30 },
            ]}
          />
          <Text
            style={[styles.navLabel, index === 1 && { color: COLORS.black80 }]}
          >
            {I18n.t('notyet')}
          </Text>
        </Button>
        <Button
          types="nude"
          styleWrap={styles.navWrap}
          styleContainer={[
            styles.navContainer,
            index === 2 && styles.navActive,
          ]}
          onPress={() => navigation.navigate('TidakBerpenghuni')}
        >
          <View
            style={[
              styles.badgeWrap,
              STYLES.mrr4,
              { backgroundColor: COLORS.black50 },
            ]}
          />
          <Text
            style={[styles.navLabel, index === 2 && { color: COLORS.black80 }]}
          >
            {I18n.t('unpopulated')}
          </Text>
        </Button>
        <Button
          types="nude"
          styleWrap={styles.navWrap}
          styleContainer={[
            styles.navContainer,
            index === 3 && styles.navActive,
          ]}
          onPress={() => navigation.navigate('Selesai')}
        >
          <View
            style={[
              styles.badgeWrap,
              STYLES.mrr4,
              { backgroundColor: COLORS.green50 },
            ]}
          />
          <Text
            style={[styles.navLabel, index === 3 && { color: COLORS.black80 }]}
          >
            {I18n.t('doneId')}
          </Text>
        </Button>
      </ScrollView>
    </View>
  );
};

export default memo(TopTabNav);
