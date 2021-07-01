//package import here
import React from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';

//local import here
import styles from './ComplaintDetail.styles';
import ComplaintDetailLogic from './ComplaintDetail.logic';
import I18n from '../../../i18n';
import { Accordion, Button, Header, ModalViewPhoto } from '../../../components';
import { COLORS, STYLES } from '../../../configs';
import {
  ArrowLeftIcon,
  WhatsappIcon,
  CheckListIcon,
} from '../../../assets/svgs';
import ModalSuccessChange from './../component/ModalSuccessChange';

const ComplaintDetailScreen = () => {
  //logic value here
  const { data, actions } = ComplaintDetailLogic();

  const _renderItem = ({ item, index }) => (
    <Button
      types="nude"
      styleWrap={STYLES.pd0}
      styleContainer={STYLES.pd0}
      onPress={() => actions.setModal(index)}
    >
      <Image
        source={{ uri: item }}
        style={styles.imageItem}
        resizeMode="cover"
      />
    </Button>
  );

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
          {I18n.t('complaintDetails')}
        </Text>
      </Header>
      <ScrollView>
        <View style={[STYLES.pd16, STYLES.mrt12]}>
          <View style={styles.lineProgress} />
          <View style={[STYLES.row, STYLES.spaceBtwn]}>
            <View>
              <View
                style={[
                  styles.circleProgress,
                  STYLES.mrb8,
                  {
                    backgroundColor:
                      data.dataComplaint.status === 'Waiting'
                        ? COLORS.red50
                        : COLORS.black60,
                  },
                ]}
              />
              <Text
                style={{
                  color:
                    data.dataComplaint.status === 'Waiting'
                      ? COLORS.red50
                      : COLORS.black90,
                }}
              >
                Menunggu
              </Text>
              <Text style={[styles.statusTime, STYLES.mrt4]}>
                {data.dataComplaint.waitingDate}
              </Text>
            </View>
            <View style={styles.itemStatusCenter}>
              <View
                style={[
                  styles.circleProgress,
                  STYLES.mrb8,
                  {
                    backgroundColor:
                      data.dataComplaint.status === 'In Progress'
                        ? COLORS.orange50
                        : COLORS.black60,
                  },
                ]}
              />
              <Text
                style={{
                  color:
                    data.dataComplaint.status === 'In Progress'
                      ? COLORS.orange50
                      : COLORS.black90,
                }}
              >
                Pengerjaan
              </Text>
              {(data.dataComplaint.status === 'In Progress' ||
                data.dataComplaint.status === 'Finish') && (
                <Text
                  style={[styles.statusTime, STYLES.mrt4, STYLES.txtCenter]}
                >
                  {data.dataComplaint.inProgressDate}
                </Text>
              )}
            </View>
            <View style={styles.itemStatusRight}>
              <View
                style={[
                  styles.circleProgress,
                  STYLES.mrb8,
                  {
                    backgroundColor:
                      data.dataComplaint.status === 'Finish'
                        ? COLORS.green50
                        : COLORS.black60,
                  },
                ]}
              />
              <Text
                style={{
                  color:
                    data.dataComplaint.status === 'Finish'
                      ? COLORS.green50
                      : COLORS.black90,
                }}
              >
                Selesai
              </Text>
              {data.dataComplaint.status === 'Finish' && (
                <Text
                  style={[styles.statusTime, STYLES.mrt4, styles.textRight]}
                >
                  {data.dataComplaint.finishDate}
                </Text>
              )}
            </View>
          </View>
        </View>

        <View style={styles.bottomGrey} />

        <View style={[STYLES.pdh16]}>
          <Accordion
            isShow
            label="Informasi Tiket"
            styleButtonLabel={STYLES.pdh0}
          >
            <View style={[STYLES.rowAlgCenter, styles.cardRight, STYLES.mrb16]}>
              <Text style={styles.titleAccordion}>Ticket</Text>
              <Text style={styles.descAccordion}>
                {data.dataComplaint.ticketNumber}
              </Text>
            </View>
            <View style={[STYLES.rowAlgCenter, styles.cardRight, STYLES.mrb16]}>
              <Text style={styles.titleAccordion}>Komplain</Text>
              <Text style={styles.descAccordion}>
                {data.dataComplaint.complaint}
              </Text>
            </View>
            <View style={[STYLES.rowAlgCenter, styles.cardRight, STYLES.mrb16]}>
              <Text style={styles.titleAccordion}>Waktu</Text>
              <Text style={styles.descAccordion}>
                {data.dataComplaint.complaintDate}
              </Text>
            </View>
            <View style={[STYLES.rowAlgCenter, styles.cardRight, STYLES.mrb16]}>
              <Text style={styles.titleAccordion}>Lokasi</Text>
              <Text style={styles.descAccordion}>
                {data.dataComplaint.unit}
              </Text>
            </View>
            <View style={[STYLES.rowAlgCenter, styles.cardRight, STYLES.mrb16]}>
              <Text style={styles.titleAccordion}>Deskripsi</Text>
              <Text style={styles.descAccordion}>
                {data.dataComplaint.description}
              </Text>
            </View>
          </Accordion>
        </View>

        {data.dataComplaint.status === 'Finish' && (
          <View>
            <View style={styles.bottomGrey} />
            <View style={STYLES.pdh16}>
              <Accordion isShow label="Solusi" styleButtonLabel={STYLES.pdh0}>
                <Text style={styles.descCompleteComplaint}>
                  {data.dataComplaint.solution}
                </Text>
                <FlatList
                  horizontal
                  showHorizontalScrollIndicator={false}
                  data={data.dataComplaint.image}
                  pagingEnabled
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={_renderItem}
                />
              </Accordion>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={styles.wrapFooter}>
        <View style={[STYLES.rowAlgCenter, STYLES.spaceBtwn]}>
          <View style={STYLES.rowAlgCenter}>
            {/* <View style={styles.profileImage}>
              <Image
                source={{ uri: data.dataComplaint.tenantPhoto }}
                resizeMode="cover"
                style={styles.profileImage}
              />
            </View> */}
            <View style={STYLES.mrl8}>
              <Text style={[styles.normalText, STYLES.mrb4]}>
                {I18n.t('tenant')}
              </Text>
              <Text style={[styles.descText, { color: COLORS.black90 }]}>
                {data.dataComplaint.name}
              </Text>
            </View>
          </View>
          {data.dataComplaint.status === 'Finish' ? (
            <CheckListIcon width={28} height={28} />
          ) : (
            <Button
              types="nude"
              width={28}
              height={28}
              onPress={() => actions.openWhatsapp()}
            >
              <WhatsappIcon width={28} height={28} />
            </Button>
          )}
        </View>
        {data.dataComplaint.status === 'Waiting' ? (
          <Button
            title={I18n.t('work')}
            onPress={() => actions._changeStatusWaiting()}
            styleContainer={[STYLES.mrb16, STYLES.mrt20]}
            isLoading={data.complaintState.acceptComplaint.isLoading}
          />
        ) : data.dataComplaint.status === 'In Progress' ? (
          <Button
            title={I18n.t('uploadEvidence')}
            onPress={() => actions._sendEvidence()}
            styleContainer={[STYLES.mrb16, STYLES.mrt20]}
          />
        ) : (
          <View style={STYLES.mrb24} />
        )}
      </View>
      <ModalViewPhoto
        visible={data.onModalViewPhoto}
        onPress={() => actions.setOnModalViewPhoto(false)}
        types="scroll"
        imageData={data.dataComplaint.image}
        selectedIndex={data.selectedIndex}
      />
      <ModalSuccessChange
        visible={data.modalWarning}
        setShowModal={() => actions.setModalWarning(false)}
        pressBack={() => actions.goToEvidence()}
        pressSuccess={() => actions._sendEvidanceNow()}
        isLoading={data.complaintState.finishComplaint.isLoading}
      />
    </View>
  );
};

export default ComplaintDetailScreen;
