//package import here
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

//local import here
import styles from './DetailMaintenance.styles';
import DetailMaintenanceLogic from './DetailMaintenance.logic';
import I18n from '../../../i18n';
import {
  Accordion,
  Alert,
  Button,
  Header,
  ProgressUpload,
} from '../../../components';
import { COLORS, IMAGES, STYLES } from '../../../configs';
import { FONT_BODY5 } from '../../../configs/fonts';
import {
  ArrowLeftIcon,
  ArrowUpwardRedIcon,
  ArrowDownwardGreenIcon,
  ArrowUpwardDownwardYellowIcon,
} from '../../../assets/svgs';
import StepHorizontal from '../components/StepHorizontal';

const DetailMaintenanceScreen = () => {
  //logic value here
  const { data, actions } = DetailMaintenanceLogic();
  const dispatch = useDispatch();
  const { globalState, maintenanceState } = useSelector((state) => ({
    globalState: state.global,
    maintenanceState: state.maintenance,
  }));
  const { progressUpload } = globalState;
  const {
    maintenanceDetail,
    isMessageMaintenanceStatus,
    isPostMaintenanceStatus,
  } = maintenanceState;
  const {
    maintenanceId,
    ticket,
    task,
    step,
    asset,
    engineer,
  } = maintenanceDetail;

  const paddingHorizontal = 16;
  const currentStep = step[step.filter((item) => item.time).length - 1].status;

  //place your extension component here
  priorityFunc = (priority) => (
    <View style={{ width: '50%' }}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
        }}
      >
        <View style={{ justifyContent: 'center', paddingRight: 6.66 }}>
          <Text style={[styles.wrapTextValue, { textTransform: 'capitalize' }]}>
            {I18n.t(`priority.${task.priority.toLowerCase()}`)}
          </Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
          {task.priority.toLowerCase() === 'high' ? (
            <ArrowUpwardRedIcon width={10.69} height={10.69} />
          ) : priority === 'medium' ? (
            <ArrowUpwardDownwardYellowIcon width={10.69} height={10.69} />
          ) : priority === 'low' ? (
            <ArrowDownwardGreenIcon width={10.69} height={10.69} />
          ) : null}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header styleContainer={styles.headerContainer}>
        <View style={{ width: 30 }}>
          <Button
            types="nude"
            width={30}
            height={30}
            styleWrap={styles.headerButton}
            styleContainer={styles.headerButton}
            onPress={() => actions.goBack()}
          >
            <ArrowLeftIcon width={20} height={20} fill={COLORS.black80} />
          </Button>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.textHeader}>{I18n.t('detailMaintenance')}</Text>
        </View>
      </Header>
      <ScrollView>
        <StepHorizontal paddingHorizontal={paddingHorizontal} />
        <View style={styles.bottomLine} />
        <View style={styles.wrapContent}>
          <Accordion
            isShow={true}
            label={I18n.t('detailTicket')}
            number="3"
            styleButtonLabel={{ paddingHorizontal }}
            styleWrap={styles.accordionWrap}
          >
            <View style={{ paddingHorizontal }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}
              >
                <Text style={styles.wrapTextKey}>No. Tiket</Text>
                <View style={{ width: '50%' }}>
                  <Text style={styles.wrapTextValue}>{ticket}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}
              >
                <Text style={styles.wrapTextKey}>Aset</Text>
                <View style={{ width: '50%' }}>
                  <Text style={styles.wrapTextValue}>{asset.name}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}
              >
                <Text style={styles.wrapTextKey}>Nama Tugas</Text>
                <View style={{ width: '50%' }}>
                  <Text style={styles.wrapTextValue}>{task.name}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}
              >
                <Text style={styles.wrapTextKey}>Agenda</Text>
                <View style={{ width: '50%' }}>
                  <Text style={styles.wrapTextValue}>{task.time}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}
              >
                <Text style={styles.wrapTextKey}>Lokasi</Text>
                <View style={{ width: '50%' }}>
                  <Text style={styles.wrapTextValue}>{asset.location}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}
              >
                <Text style={styles.wrapTextKey}>Prioritas</Text>
                {priorityFunc(task.priority.toLowerCase())}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 16,
                }}
              >
                <Text style={styles.wrapTextKey}>Deskripsi</Text>
                <View style={{ width: '50%' }}>
                  <Text style={styles.wrapTextValue}>
                    {step[step.length - 1].evidence.name
                      ? step[step.length - 1].evidence.name
                      : `-`}
                  </Text>
                </View>
              </View>
            </View>
          </Accordion>
          {currentStep === 'done' && (
            <View>
              <View style={styles.bottomLine} />
              <Accordion
                isShow={true}
                label={I18n.t('solution')}
                number="3"
                styleLabel={{
                  textTransform: 'capitalize',
                }}
                styleButtonLabel={{
                  paddingHorizontal,
                }}
                styleWrap={styles.accordionWrap}
              >
                <View style={{}}>
                  {step[step.length - 1].evidence.name ? (
                    <View style={styles.wrapTextSolution}>
                      <Text style={styles.wrapTextValueSolution}>
                        {step[step.length - 1].evidence.name}
                      </Text>
                    </View>
                  ) : null}
                  <FlatList
                    horizontal
                    data={step[step.length - 1].evidence.photo.filter(
                      (item) => item
                    )}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingHorizontal: 16,
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                      <TouchableOpacity>
                        <Image
                          source={{ uri: item }}
                          resizeMode="cover"
                          style={{
                            width: 150,
                            height: 150,
                            borderRadius: 9,
                            marginRight: 10,
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </Accordion>
            </View>
          )}
        </View>
      </ScrollView>
      {currentStep === 'waiting' || currentStep === 'inProgress' ? (
        <View>
          <Button
            title={
              currentStep === 'waiting'
                ? I18n.t('doIt')
                : currentStep === 'inProgress'
                ? I18n.t('sendSolution')
                : null
            }
            types="filled"
            styleWrap={{ padding: 10 }}
            onPress={() => actions.goToSendSolutionScreen()}
          />
        </View>
      ) : null}
      {isMessageMaintenanceStatus.isShow && (
        <Alert
          types={isMessageMaintenanceStatus.types}
          visible={isMessageMaintenanceStatus.isShow}
          title={isMessageMaintenanceStatus.title}
        />
      )}
    </View>
  );
};

export default DetailMaintenanceScreen;
