//package import here
import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//local import here
import styles from './Complaint.styles';
import ComplaintLogic from './Complaint.logic';
import I18n from '../../../i18n';
import { Alert as AlertPopUp, Button, Header } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { MenuIcon, NotificationsIcon } from '../../../assets/svgs';
import TopTabNav from './../component/TopTabNav';

//screen import here
import ProgressComplaintScreen from './screens/ProgressComplaintScreen';
import LingkunganScreen from './screens/DoneComplaintScreen';

const ComplaintScreen = () => {
  //logic value here
  const { data, actions } = ComplaintLogic();

  //pakcage value here
  const { Navigator, Screen } = createMaterialTopTabNavigator();

  //place your extension component heres

  return (
    <View style={styles.container}>
      <Header shadow={false} styleContainer={styles.headerContainer}>
        <View style={STYLES.rowAlgCenter}>
          <Button
            types="nude"
            width={40}
            height={40}
            styleWrap={styles.headerButton}
            styleContainer={styles.headerButton}
            onPress={() => actions.navigation.toggleDrawer()}
          >
            <MenuIcon width={22} height={22} fill={COLORS.primaryBlack} />
          </Button>
          <Text style={[styles.headerTitle, STYLES.mrl16]}>
            {I18n.t('complaints')}
          </Text>
        </View>
        <Button
          types="nude"
          width={40}
          height={40}
          styleWrap={styles.headerButton}
          styleContainer={styles.headerButton}
          onPress={actions.goToNotifications}
        >
          <NotificationsIcon
            width={20}
            height={20}
            fill={COLORS.primaryBlack}
          />
        </Button>
      </Header>
      <AlertPopUp
        visible={data.complaintState.finishComplaint.code === 200}
        title="Data berhasil diubah!"
        types="success"
        duration={6000}
        // close={() => {
        //   actions.setHandoverSuccess(false);
        // }}
        // loading={true}
      />
      <AlertPopUp
        visible={data.complaintState.finishComplaint.code > 200}
        title="Telah terjadi gangguan, ayo coba lagi!"
        types="error"
        duration={5000}
        // close={() => {
        //   actions.setHandoverSuccess(false);
        // }}
        // loading={true}
      />
      <Navigator
        initialRouteName="ProgressComplaint"
        backBehavior="none"
        // tabBarOptions={{
        //   contentContainerStyle: STYLES.pdh4,
        //   tabStyle: styles.tabContainer,
        //   indicatorContainerStyle: STYLES.mrh4,
        //   indicatorStyle: styles.tabIndicator,
        //   labelStyle: styles.tabLabel,
        //   activeTintColor: COLORS.black80,
        //   inactiveTintColor: COLORS.black60,
        // }}
        tabBar={(props) => <TopTabNav {...props} />}
      >
        <Screen
          name="ProgressComplaint"
          component={ProgressComplaintScreen}
          options={{ tabBarLabel: I18n.t('inProgress') }}
        />
        <Screen
          name="DoneComplaint"
          component={LingkunganScreen}
          options={{ tabBarLabel: I18n.t('doneId') }}
        />
      </Navigator>
    </View>
  );
};

export default ComplaintScreen;
