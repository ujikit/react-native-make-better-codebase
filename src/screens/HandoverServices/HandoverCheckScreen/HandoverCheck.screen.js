//package import here
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

//local import here
import styles from './HandoverCheck.styles';
import HandoverCheckLogic from './HandoverCheck.logic';
import { Button, Header } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { ArrowLeftIcon, ExpandMoreIcon } from '../../../assets/svgs';

const HandoverCheckScreen = () => {
  //logic value here
  const { data, actions } = HandoverCheckLogic();

  //place your extension component here

  return (
    <View style={styles.container}>
      <Header shadow={true} styleContainer={styles.containerHeader}>
        <Button
          types="nude"
          width={35}
          height={35}
          styleWrap={styles.headerButton}
          styleContainer={styles.headerButton}
          onPress={() => actions.goBack()}
        >
          <ArrowLeftIcon width={16} height={16} fill={COLORS.primaryBlack} />
        </Button>
        <Text style={[styles.headerTitle, STYLES.mrl8]}>
          Lantai 87 | Unit 25
        </Text>
      </Header>
      <ScrollView>
        <Button style={[styles.childButton]}>
          <Text style={[styles.normalText]}>Ruang Utama + Kamar</Text>
          <ExpandMoreIcon width={12} height={12} fill={COLORS.black80} />
        </Button>
      </ScrollView>
    </View>
  );
};

export default HandoverCheckScreen;
