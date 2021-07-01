//package import here
import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//local import here
import styles from './Help.styles';
import HelpLogic from './Help.logic';
import I18n from '../../../i18n';
import { Header, Button } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import { ArrowLeftIcon, PhoneIcon, SearchIcon } from '../../../assets/svgs';
import ModalCallCs from './../components/ModalCallCs';

import AccountScreen from './src/Account';
import JobsScreen from './src/Jobs';

const HelpScreen = () => {
  //logic value here
  const { data, actions } = HelpLogic();
  const { Navigator, Screen } = createMaterialTopTabNavigator();

  const _renderItem = ({ item, index }) => (
    <TouchableOpacity style={STYLES.pd16} onPress={() => actions.toDetail()}>
      <Text style={styles.listItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header styleContainer={styles.headerContainer}>
        <Button
          types="nude"
          onPress={actions.goBack}
          styleContainer={styles.backContainer}
          styleWrap={styles.backWrap}
        >
          <ArrowLeftIcon width={17} height={17} fill={COLORS.black} />
        </Button>
        <Text style={[styles.headerTitle, STYLES.txtCapitalize]}>
          {I18n.t('help')}
        </Text>
        <Button
          types="nude"
          onPress={() => actions.setModalCs(true)}
          styleContainer={styles.backContainer}
          styleWrap={styles.phoneWrap}
        >
          <PhoneIcon width={18} height={18} fill={COLORS.black80} />
        </Button>
      </Header>
      <View style={styles.wrapContainer}>
        <View style={styles.wrapSearch}>
          <TextInput
            ref={data.RefTextInputSearch}
            // onSubmitEditing={() => actions.search()}
            keyboardType="default"
            returnKeyType="search"
            placeholder="Cari solusi"
            placeholderTextColor="rgb(128, 126, 126)"
            onChangeText={(val) => actions.searchHelp(val)}
            value={data.search}
            style={styles.textSearch}
          />
          <Button
            types="nude"
            width={30}
            height={30}
            styleWrap={styles.searchIcon}
            styleContainer={styles.searchIconContainer}
            // onPress={() => actions.searchHelp()}
          >
            <SearchIcon width={14} height={14} fill={COLORS.black80} />
          </Button>
        </View>
        {data.resultData.length === 0 && data.search.length === 0 && (
          <View>
            <Text style={styles.title}>
              {I18n.t('hallo')} {data.accountState.profile.data.name}
            </Text>
            <Text style={styles.modified}>{I18n.t('needHelp')}</Text>
          </View>
        )}
      </View>
      <View style={styles.blackLine} />
      {data.resultData.length === 0 && data.search.length === 0 ? (
        <Navigator
          initialRouteName="Jobs"
          backBehavior="none"
          tabBarOptions={{
            tabStyle: styles.tabContainer,
            indicatorStyle: styles.tabIndicator,
            labelStyle: styles.tabLabel,
            activeTintColor: COLORS.black80,
            inactiveTintColor: COLORS.black60,
          }}
        >
          <Screen
            name="Jobs"
            component={JobsScreen}
            options={{ tabBarLabel: 'Pekerjaan' }}
          />
          <Screen
            name="Account"
            component={AccountScreen}
            options={{ tabBarLabel: 'Akun' }}
          />
        </Navigator>
      ) : (
        <View style={STYLES.mrh16}>
          <FlatList
            data={data.resultData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={_renderItem}
            ItemSeparatorComponent={() => <View style={[styles.bottomLine]} />}
          />
        </View>
      )}
      <ModalCallCs
        visible={data.modalCs}
        onPress={() => {
          actions.setModalCs(false);
        }}
      />
    </View>
  );
};

export default HelpScreen;
