//package import
import React, { memo, useCallback, useMemo } from 'react';
import { Text, StatusBar, SafeAreaView, View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

//local import
import styles from './styles';
import I18n from '../../../../i18n';
import { COLORS, STYLES, IMAGES } from '../../../../configs';
import { Button } from '../../../../components';
import {
  AssignmentIcon,
  DashboardIcon,
  ExitToAppIcon,
  MaintenanceIcon,
  PersonIcon,
  SwapVerticalCircleIcon,
  UtilitasIcon,
} from '../../../../assets/svgs';
import { handleLogout } from '../../../../redux/redux-actions';

const NavigationDrawer = (props) => {
  //package value
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value
  const accountState = useSelector((state) => state.account);

  //variable value
  const navIndex = props.state.index;
  const abort = controller.signal;
  const profile = accountState.profile.data;

  const listMenu = [
    {
      name: 'dashboard',
      icon: DashboardIcon,
      screen: 'Dashboard',
    },
    {
      name: 'maintenance',
      icon: MaintenanceIcon,
      screen: 'Maintenance',
    },
    {
      name: 'waterMeter',
      icon: UtilitasIcon,
      screen: 'MeteranAir',
    },
    {
      name: 'complaints',
      icon: AssignmentIcon,
      screen: 'Komplain',
    },
    {
      name: 'handover',
      icon: SwapVerticalCircleIcon,
      screen: 'SerahTerima',
    },
  ];

  //place your function in here
  const _handleLogout = useCallback(() => {
    dispatch(handleLogout(abort, navigation));
  }, [abort, dispatch, navigation]);

  //place your extension component here

  return (
    <SafeAreaView style={styles.drawerWrap}>
      <StatusBar
        backgroundColor={COLORS.primaryWhite}
        barStyle="dark-content"
      />
      <View style={styles.drawerHeader}>
        <View style={styles.imageUser}>
          <Image
            source={profile.image.length ? { uri: profile.image } : IMAGES.logo}
            resizeMode="cover"
            style={styles.imageUser}
          />
        </View>
        <View style={STYLES.mrl16}>
          {accountState.profile.isLoading ? (
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                width={150}
                height={16}
                borderRadius={5}
                marginBottom={4}
              />
            </SkeletonPlaceholder>
          ) : (
            <Text style={[styles.textUser, STYLES.txtCapitalize]}>
              {I18n.t('hello')}
              {profile.name.length > 0 && `, ${profile.name}`}
            </Text>
          )}
          <Text style={styles.textUserDesc}>{I18n.t('comeFinishWork')}</Text>
        </View>
      </View>
      <View style={styles.drawerMenu}>
        {listMenu.map((item, index) => (
          <Button
            key={index + 1}
            styleWrap={styles.wrapMenu}
            styleContainer={styles.containerMenu}
            color={COLORS.primaryWhite}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View
              style={[
                styles.contentMenu,
                {
                  backgroundColor:
                    navIndex === index
                      ? COLORS.softOrange
                      : COLORS.primaryWhite,
                },
              ]}
            >
              <item.icon
                width={24}
                height={24}
                fill={
                  navIndex === index ? COLORS.primaryOrange : COLORS.black70
                }
              />
              <Text
                style={[
                  styles.menuTitle,
                  STYLES.txtCapitalize,
                  {
                    color: navIndex === index ? COLORS.black90 : COLORS.black70,
                  },
                ]}
              >
                {I18n.t(item.name)}
              </Text>
            </View>
          </Button>
        ))}
      </View>
      <Button
        color={COLORS.primaryWhite}
        styleWrap={STYLES.br0}
        styleContainer={styles.menuFooter}
        onPress={() => navigation.navigate('Profile')}
      >
        <PersonIcon width={26} height={26} fill={COLORS.black80} />
        <Text style={[styles.menuTitle, STYLES.txtCapitalize]}>
          {I18n.t('profile')}
        </Text>
      </Button>
      <Button
        color={COLORS.primaryWhite}
        styleWrap={STYLES.br0}
        styleContainer={styles.menuFooter}
        onPress={() => _handleLogout()}
      >
        <ExitToAppIcon width={26} height={26} fill={COLORS.black80} />
        <Text style={[styles.menuTitle, STYLES.txtCapitalize]}>
          {I18n.t('logout')}
        </Text>
      </Button>
    </SafeAreaView>
  );
};

export default memo(NavigationDrawer);
