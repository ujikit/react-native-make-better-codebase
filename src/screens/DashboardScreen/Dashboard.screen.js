//package import here
import React from 'react';
import {
  View,
  RefreshControl,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';

//local import here
import styles from './Dashboard.styles';
import DashboardLogic from './Dashboard.logic';
import I18n from '../../i18n';
import {
  Button,
  Card,
  Header,
  ModalUpdateVersion,
  Loader,
} from '../../components';
import { COLORS, STYLES } from '../../configs';
import {
  AssignmentIcon,
  MaintenanceIcon,
  MenuIcon,
  NotificationsIcon,
  SwapVerticalCircleIcon,
  UtilitasIcon,
} from '../../assets/svgs';
import ModalBanner from './components/ModalBanner';

const DashboardScreen = ({ route, navigation }) => {
  //logic value here
  const { data, actions } = DashboardLogic();
  const { accountState, broadcastState } = useSelector((state) => ({
    accountState: state.account,
    broadcastState: state.feed,
  }));

  //place your extension component here

  return (
    <View style={styles.container}>
      <Loader show={accountState.logout.isLoading} />
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
            {I18n.t('dashboard')}
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
      <ScrollView
        nestedScrollEnabled
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => actions._handleRefresh()}
          />
        }
      >
        <View style={styles.menuWrap}>
          <View style={styles.wrapList}>
            <Button
              width="100%"
              color={COLORS.black10}
              styleWrap={STYLES.br10}
              styleContainer={styles.containerList}
              onPress={() => actions.navigation.navigate('Maintenance')}
            >
              <View style={styles.wrapICon}>
                <MaintenanceIcon
                  width={18}
                  height={18}
                  fill={COLORS.primaryWhite}
                />
              </View>
              <View style={[STYLES.fx1, STYLES.mrl8]}>
                <Text
                  style={[styles.normalText, STYLES.mrb4, STYLES.txtCapitalize]}
                >
                  {I18n.t('maintenance')}
                </Text>
                <Text
                  style={[styles.descText, STYLES.mrb4, STYLES.txtCapitalize]}
                >
                  {I18n.t('task')} :{' '}
                  <Text style={{ color: COLORS.red50 }}>5</Text>
                </Text>
                <Text style={[styles.descText, STYLES.txtCapitalize]}>
                  {I18n.t('onProgress')} :{' '}
                  <Text style={{ color: COLORS.blue50 }}>5</Text>
                </Text>
              </View>
            </Button>
          </View>
          <View style={styles.wrapList}>
            <Button
              width="100%"
              color={COLORS.black10}
              styleWrap={STYLES.br10}
              styleContainer={styles.containerList}
              onPress={() => actions.navigation.navigate('MeteranAir')}
            >
              <View style={styles.wrapICon}>
                <UtilitasIcon
                  width={18}
                  height={18}
                  fill={COLORS.primaryWhite}
                />
              </View>
              <View style={[STYLES.fx1, STYLES.mrl8]}>
                <Text
                  style={[styles.normalText, STYLES.mrb4, STYLES.txtCapitalize]}
                >
                  {I18n.t('waterMeter')}
                </Text>
                <Text
                  style={[styles.descText, STYLES.mrb4, STYLES.txtCapitalize]}
                >
                  {I18n.t('task')} :{' '}
                  <Text style={{ color: COLORS.red50 }}>1</Text>
                </Text>
                <Text style={[styles.descText, STYLES.txtCapitalize]}>
                  {I18n.t('onProgress')} :{' '}
                  <Text style={{ color: COLORS.blue50 }}>2</Text>
                </Text>
              </View>
            </Button>
          </View>
          <View style={styles.wrapList}>
            <Button
              width="100%"
              color={COLORS.black10}
              styleWrap={STYLES.br10}
              styleContainer={styles.containerList}
              onPress={() => actions.navigation.navigate('Komplain')}
            >
              <View style={styles.wrapICon}>
                <AssignmentIcon
                  width={18}
                  height={18}
                  fill={COLORS.primaryWhite}
                />
              </View>
              <View style={[STYLES.fx1, STYLES.mrl8]}>
                <Text
                  style={[styles.normalText, STYLES.mrb4, STYLES.txtCapitalize]}
                >
                  {I18n.t('complaints')}
                </Text>
                <Text
                  style={[styles.descText, STYLES.mrb4, STYLES.txtCapitalize]}
                >
                  {I18n.t('task')} :{' '}
                  <Text style={{ color: COLORS.red50 }}>1</Text>
                </Text>
                <Text style={[styles.descText, STYLES.txtCapitalize]}>
                  {I18n.t('onProgress')} :{' '}
                  <Text style={{ color: COLORS.blue50 }}>2</Text>
                </Text>
              </View>
            </Button>
          </View>
          <View style={styles.wrapList}>
            <Button
              width="100%"
              color={COLORS.black10}
              styleWrap={STYLES.br10}
              styleContainer={styles.containerList}
              onPress={() => actions.navigation.navigate('SerahTerima')}
            >
              <View style={styles.wrapICon}>
                <SwapVerticalCircleIcon
                  width={18}
                  height={18}
                  fill={COLORS.primaryWhite}
                />
              </View>
              <View style={[STYLES.fx1, STYLES.mrl8]}>
                <Text
                  style={[styles.normalText, STYLES.mrb4, STYLES.txtCapitalize]}
                >
                  {I18n.t('handover')}
                </Text>
                <Text
                  style={[styles.descText, STYLES.mrb4, STYLES.txtCapitalize]}
                >
                  {I18n.t('task')} :{' '}
                  <Text style={{ color: COLORS.red50 }}>5</Text>
                </Text>
                <Text style={[styles.descText, STYLES.txtCapitalize]}>
                  {I18n.t('onProgress')} :{' '}
                  <Text style={{ color: COLORS.blue50 }}>5</Text>
                </Text>
              </View>
            </Button>
          </View>
        </View>
        <View style={STYLES.pd16}>
          <View style={[styles.rowBetween, STYLES.mrb16]}>
            <Text style={styles.headerTitle}>
              {I18n.t('technicianInformation')}
            </Text>
            <TouchableOpacity onPress={() => actions.goToBroadcastScreen()}>
              <Text style={styles.moreText}>{I18n.t('seeAll')}</Text>
            </TouchableOpacity>
          </View>
          {broadcastState.broadcastList.data.slice(0, 5).map((item, index) => (
            <Card
              key={index}
              types="button"
              shadow={false}
              onPress={() => actions._goToDetailFeedScreen(item)}
              styleWrap={styles.feedWrap}
              styleContainer={[styles.feedWrap, STYLES.mrb16]}
            >
              <View style={styles.imageFeedWrap}>
                <Image
                  source={{ uri: item.image }}
                  resizeMode="cover"
                  style={styles.imageFeed}
                />
              </View>
              <Text style={styles.textFeed}>{item.title}</Text>
            </Card>
          ))}
        </View>
      </ScrollView>
      <ModalUpdateVersion
        visible={data.modalUpdate}
        setShowModal={() => actions.setModalUpdate(false)}
        // pressBack={() => actions.goToEvidence()}
        // pressSuccess={() => actions._sendEvidanceNow()}
        // isLoading={data.complaintState.finishComplaint.isLoading}
      />
      <ModalBanner visible={data.isVisible} setVisible={actions.setIsVisible} />
    </View>
  );
};

export default DashboardScreen;
