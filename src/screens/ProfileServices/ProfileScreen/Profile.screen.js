//package import here
import React from 'react';
import { View, Text, Image } from 'react-native';
import VersionCheck from 'react-native-version-check';
import { useSelector } from 'react-redux';

//local import here
import styles from './Profile.styles';
import ProfileLogic from './Profile.logic';
import I18n from '../../../i18n';
import { Alert, Button, Header, Loader } from '../../../components';
import ModalLogout from '../components/ModalLogout';
import { COLORS, STYLES } from '../../../configs';
import {
  EditIcon,
  HelpIcon,
  MenuIcon,
  NoteIcon,
  NotificationsIcon,
  PasswordIcon,
  SecureIcon,
  StarIcon,
} from '../../../assets/svgs';

const ProfileScreen = () => {
  //logic value here
  const { data, actions } = ProfileLogic();
  const { accountState } = useSelector((state) => ({
    accountState: state.account,
  }));

  //place your extension component here

  return (
    <View style={styles.container}>
      <Loader show={accountState.logout.isLoading} />
      <Header styleContainer={styles.headerContainer} shadow={false}>
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
            {I18n.t('profile')}
          </Text>
        </View>
        <Button
          types="nude"
          width={40}
          height={40}
          styleWrap={styles.headerButton}
          styleContainer={styles.headerButton}
          onPress={() => actions.goToNotifications()}
        >
          <NotificationsIcon
            width={20}
            height={20}
            fill={COLORS.primaryBlack}
          />
        </Button>
      </Header>
      <Alert
        types="success"
        visible={data.accountState.alertProfile.isVisible}
        title={data.accountState.alertProfile.message}
        close={actions._closeAlert}
      />
      <View style={[styles.wrapContent, STYLES.pd16, STYLES.mrb8]}>
        <View
          style={[
            STYLES.rowAlgCenter,
            STYLES.spaceBtwn,
            STYLES.w100,
            STYLES.mrb12,
          ]}
        >
          <View style={[STYLES.rowAlgCenter]}>
            <View style={[styles.wrapProfilePic, STYLES.mrr12]}>
              <Image
                resizeMode="cover"
                source={{ uri: data.profile.image }}
                style={styles.wrapProfilePic}
              />
            </View>
            <View style={STYLES.alItStart}>
              {data.profile.name.length > 0 && (
                <Text style={[styles.headerTitle, STYLES.mrb4]}>
                  {data.profile.name}
                </Text>
              )}
              {data.profile.skill.length > 0 && (
                <View style={styles.wrapLabel}>
                  <Text style={styles.labelText}>{data.profile.skill}</Text>
                </View>
              )}
            </View>
          </View>
          <Button
            types="nude"
            width={40}
            height={40}
            styleWrap={styles.headerButton}
            styleContainer={styles.headerButton}
            onPress={actions._handleEditProfile}
          >
            <EditIcon width={15} height={15} fill={COLORS.black60} />
          </Button>
        </View>
        {data.profile.engineerId.length > 0 && (
          <View
            style={[
              STYLES.w100,
              STYLES.rowAlgCenter,
              STYLES.spaceBtwn,
              STYLES.mrb8,
            ]}
          >
            <Text style={styles.infoText}>{I18n.t('ID')}</Text>
            <Text style={styles.infoText}>{data.profile.engineerId}</Text>
          </View>
        )}
        {data.profile.email.length > 0 && (
          <View
            style={[
              STYLES.w100,
              STYLES.rowAlgCenter,
              STYLES.spaceBtwn,
              STYLES.mrb8,
            ]}
          >
            <Text style={styles.infoText}>{I18n.t('email')}</Text>
            <Text style={styles.infoText}>{data.profile.email}</Text>
          </View>
        )}
        {data.profile.vendor.length > 0 && (
          <View
            style={[
              STYLES.w100,
              STYLES.rowAlgCenter,
              STYLES.spaceBtwn,
              STYLES.mrb8,
            ]}
          >
            <Text style={styles.infoText}>{I18n.t('vendor')}</Text>
            <Text style={styles.infoText}>{data.profile.vendor}</Text>
          </View>
        )}
        {data.profile.location.length > 0 && (
          <View style={[STYLES.w100, STYLES.rowAlgCenter, STYLES.spaceBtwn]}>
            <Text style={styles.infoText}>{I18n.t('workPlace')}</Text>
            <Text style={styles.infoText}>{data.profile.location}</Text>
          </View>
        )}
      </View>
      <View style={[styles.wrapContent, STYLES.fx1, STYLES.pdv8]}>
        <Button
          types="nude"
          styleWrap={STYLES.br0}
          styleContainer={styles.menuContainer}
          onPress={actions.goToChangePassword}
        >
          <View style={[styles.menuContent, styles.borderBottom]}>
            <PasswordIcon width={15} height={15} fill={COLORS.black80} />
            <Text style={[styles.menuText, STYLES.mrl16]}>
              {I18n.t('changePassword')}
            </Text>
          </View>
        </Button>
        <Button
          types="nude"
          styleWrap={STYLES.br0}
          styleContainer={styles.menuContainer}
          onPress={actions.goToHelp}
        >
          <View style={[styles.menuContent, styles.borderBottom]}>
            <HelpIcon width={15} height={15} fill={COLORS.black80} />
            <Text style={[styles.menuText, STYLES.mrl16]}>
              {I18n.t('help')}
            </Text>
          </View>
        </Button>
        <Button
          types="nude"
          styleWrap={STYLES.br0}
          styleContainer={styles.menuContainer}
          onPress={actions.goToPrivacyPolicy}
        >
          <View style={[styles.menuContent, styles.borderBottom]}>
            <SecureIcon width={15} height={15} fill={COLORS.black80} />
            <Text style={[styles.menuText, STYLES.mrl16]}>
              {I18n.t('privacyPolicy')}
            </Text>
          </View>
        </Button>
        <Button
          types="nude"
          styleWrap={STYLES.br0}
          styleContainer={styles.menuContainer}
          onPress={actions.goToTermCondition}
        >
          <View style={[styles.menuContent, styles.borderBottom]}>
            <NoteIcon width={15} height={15} fill={COLORS.black80} />
            <Text style={[styles.menuText, STYLES.mrl16]}>
              {I18n.t('termCondition')}
            </Text>
          </View>
        </Button>
        <Button
          types="nude"
          styleWrap={STYLES.br0}
          styleContainer={styles.menuContainer}
        >
          <View style={[styles.menuContent, STYLES.spaceBtwn]}>
            <View style={STYLES.rowAlgCenter}>
              <StarIcon width={15} height={15} fill={COLORS.black80} />
              <Text style={[styles.menuText, STYLES.mrl16]}>
                {I18n.t('ratingApp')}
              </Text>
            </View>
            <Text style={styles.versionText}>
              v{VersionCheck.getCurrentVersion()}
            </Text>
          </View>
        </Button>
        <Button
          types="nude"
          styleWrap={STYLES.br0}
          title={I18n.t('logout')}
          styleText={styles.logoutText}
          onPress={() => actions.setModalLogout(true)}
        />
      </View>
      <ModalLogout
        visible={data.modalLogout}
        onPress={() => actions.setModalLogout(false)}
        onLogoutPressed={() => actions._handleLogout()}
      />
    </View>
  );
};

export default ProfileScreen;
