//package import here
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

//local import here
import styles from './PrivacyPolicy.styles';
import PrivacyPolicyLogic from './PrivacyPolicy.logic';
import I18n from '../../../i18n';
import { Header, Button } from '../../../components';
import { COLORS, STYLES, IMAGES } from '../../../configs';
import { ArrowLeftIcon } from '../../../assets/svgs';

const PrivacyPolicyScreen = () => {
  //logic value here
  const { data, actions } = PrivacyPolicyLogic();

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
          {I18n.t('privacyPolicy')}
        </Text>
      </Header>
      <ScrollView>
        <View style={styles.wrapContainer}>
          <Image source={IMAGES.logoNew} style={styles.logoStyles} />
          <Text style={[styles.titleText, STYLES.mrt16]}>
            {I18n.t('privacyPolicyTitle')}
          </Text>
          <Text style={[STYLES.mrv16, styles.fontDate]}>
            Effective date: <Text style={styles.fontMonth}>Agustus 2021</Text>
          </Text>
          <Text style={styles.contentDesc}>
            Kami selaku tim <Text style={styles.fontBold}>LRT City</Text>{' '}
            menghormati Pribadi Anda dan berkomitmen untuk melindunginya. Kami
            paham betapa pentingnya Data Pribadi Anda dan Kami berkomitmen untuk
            tidak membagikan Data Pribadi Anda kepada pihak ketiga atau aplikasi
            lainnya tanpa seizin Anda. Anda wajib membaca Kebijakan Pribadi
            berikut (selanjutnya akan disebut "Kebijakan") untuk mempelajari
            lebih lanjut tentang komitmen Kami kepada Anda. {'\n\n'}Kebijakan
            Pribadi ini menjelaskan bagaimana{' '}
            <Text style={styles.fontBold}>LRT City </Text>
            (selanjutnya disebut "<Text style={styles.fontBold}>LRT City</Text>"
            atau “kami") mengoperasikan situs web dan aplikasi mobile
            <Text style={styles.fontBold}> LRT City</Text> (selanjutnya disebut
            "Aplikasi").
            {'\n\n'}Kami menggunakan data Anda untuk menyediakan dan
            meningkatkan Aplikasi. Dengan menggunakan Aplikasi, Anda menyetujui
            pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini.
            Kecuali terdapat ketentuan lain dalam Kebijakan Pribadi ini, istilah
            yang digunakan dalam Kebijakan Pribadi ini memiliki arti yang sama
            seperti dalam Syarat dan Ketentuan kami.{'\n\n'}
            Kebijakan Pribadi ini terakhir diperbarui pada tanggal 1 Agustus
            2021. Jika kami mengubah kebijakan ini kami akan memberitahukan
            perubahan itu di Situs agar Anda dapat mengetahui informasi apa yang
            kami kumpulkan, bagaimana kami menggunakannya dan dalam keadaan apa
            kami dapat mengungkapkannya.
          </Text>
        </View>
        <View style={styles.greyBlock} />
        <View style={styles.wrapContainer}>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.titleTwo')}
          </Text>
          <Text style={[styles.contentDesc, STYLES.mrv16]}>
            {I18n.t('privacyPolicyPage.descTwo')}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleOne')}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleOneA')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleOneADesc')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleOneANumber')}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleOneB')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleOneBDesc')}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleOneC')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleOneCDesc')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleOneCNumber')}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleOneD')}
          </Text>
          <Text style={[styles.contentDesc]}>
            <Text style={styles.fontBold}>LRT City </Text>menggunakan data yang
            dikumpulkan untuk berbagai tujuan, yaitu:{'\n'}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleOneDNumber')}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleOneE')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleOneEDesc')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {'\n'}
            <Text style={styles.fontBold}>LRT City </Text>{' '}
            {I18n.t('privacyPolicyPage.subtitleOneEDesc2')}
            {'\n'}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleTwo')}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleTwoA')}
          </Text>
          <Text style={[styles.contentDesc]}>
            <Text style={styles.fontBold}>LRT City </Text>{' '}
            {I18n.t('privacyPolicyPage.subtitleTwoADesc')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleTwoANumber')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleTwoADesc2')}
            {'\n'}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleTwoB')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleTwoBDesc')}
            {'\n'}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleTwoC')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleTwoCDesc')}
            {'\n'}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleTwoD')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleTwoDDesc')}
            {'\n'}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleTwoE')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleTwoEDesc')}
            {'\n'}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleTwoF')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleTwoFDesc')}
            {'\n'}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleTwoG')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleTwoGDesc')}
            {'\n'}
          </Text>
          <Text style={[styles.titleText]}>
            {I18n.t('privacyPolicyPage.subtitleTwoH')}
          </Text>
          <Text style={[styles.contentDesc]}>
            {I18n.t('privacyPolicyPage.subtitleTwoHDesc')}
            {'\n'}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('privacyPolicyPage.subtitleB8a1')}
            <Text style={[styles.contentDesc, styles.textBlue]}>
              easterngreenapartment@gmail.com;
            </Text>
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('privacyPolicyPage.subtitleB8a2')}
            <Text style={[styles.contentDesc, styles.textBlue]}>
              082112408214;
            </Text>{' '}
            or
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('privacyPolicyPage.subtitleB8a3')}(
            <Text style={[styles.contentDesc, styles.textBlue]}>See Map</Text>)
            {'\n'}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;
