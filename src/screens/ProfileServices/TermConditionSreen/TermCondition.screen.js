//package import here
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

//local import here
import styles from './TermCondition.styles';
import TermConditionLogic from './TermCondition.logic';
import I18n from '../../../i18n';
import { Header, Button } from '../../../components';
import { COLORS, STYLES, IMAGES } from '../../../configs';
import { ArrowLeftIcon } from '../../../assets/svgs';

const TermConditionScreen = () => {
  //logic value here
  const { data, actions } = TermConditionLogic();

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
          {I18n.t('termCondition')}
        </Text>
      </Header>
      <ScrollView>
        <View style={styles.wrapContainer}>
          <Image source={IMAGES.logoNew} style={styles.logoStyles} />
          <Text style={[styles.titleText, STYLES.mrt16]}>
            {I18n.t('termConditionText.titleA')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.titleAdesc')}
          </Text>
          <Text style={styles.contentTitle}>
            {I18n.t('termConditionText.subtitleA1')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleA1desc')}
          </Text>
          <Text style={styles.contentTitle}>
            {I18n.t('termConditionText.subtitleA2')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleA2desc')}
          </Text>
          <Text style={styles.contentTitle}>
            {I18n.t('termConditionText.subtitleA3')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleA3desc')}
          </Text>
          <Text style={styles.contentTitle}>
            {I18n.t('termConditionText.subtitleA4')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleA4desc')}
          </Text>
          <Text style={styles.contentTitle}>
            {I18n.t('termConditionText.subtitleA5')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleA5desc')}
          </Text>
          <Text style={styles.contentTitle}>
            {I18n.t('termConditionText.subtitleA6')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleA6desc')}
          </Text>
          <Text style={styles.contentTitle}>
            {I18n.t('termConditionText.subtitleA7')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleA7desc')}
          </Text>
          <Text style={styles.contentTitle}>
            {I18n.t('termConditionText.subtitleA8')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleA8desc')}
          </Text>
          <Text style={styles.contentTitle}>
            {I18n.t('termConditionText.subtitleA9')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleA9desc')}
          </Text>
          <Text style={styles.contentTitle}>
            {I18n.t('termConditionText.subtitleA10')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleA10desc')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.titleAdesc2')}
          </Text>
        </View>
        <View style={styles.greyBlock} />
        <View style={styles.wrapContainer}>
          <Text style={styles.titleText}>
            {I18n.t('termConditionText.titleB')}
          </Text>
          <Text style={styles.contentTitle2}>
            {I18n.t('termConditionText.subtitleB1')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB1desc')}
          </Text>
          <Text style={styles.contentDesc}>
            a.{' '}
            <Text style={styles.fontBold}>
              {I18n.t('termConditionText.subtitleB1aTitle')}
            </Text>{' '}
            {I18n.t('termConditionText.subtitleB1aDesc')}
          </Text>
          <Text style={styles.contentDesc}>
            b.{' '}
            <Text style={styles.fontBold}>
              {I18n.t('termConditionText.subtitleB1bTitle')}
            </Text>{' '}
            {I18n.t('termConditionText.subtitleB1bDesc')}
          </Text>
          <Text style={styles.contentDesc}>
            c.{' '}
            <Text style={styles.fontBold}>
              {I18n.t('termConditionText.subtitleB1cTitle')}
            </Text>{' '}
            {I18n.t('termConditionText.subtitleB1cDesc')}
          </Text>
          <Text style={styles.contentDesc}>
            d.{' '}
            <Text style={styles.fontBold}>
              {I18n.t('termConditionText.subtitleB1dTitle')}
            </Text>{' '}
            {I18n.t('termConditionText.subtitleB1dDesc')}
          </Text>
          <Text style={styles.contentDesc}>
            e.{' '}
            <Text style={styles.fontBold}>
              {I18n.t('termConditionText.subtitleB1eTitle')}
            </Text>{' '}
            {I18n.t('termConditionText.subtitleB1eDesc')}
          </Text>
          <Text style={styles.contentDesc}>
            f.{' '}
            <Text style={styles.fontBold}>
              {I18n.t('termConditionText.subtitleB1fTitle')}
            </Text>{' '}
            {I18n.t('termConditionText.subtitleB1fDesc')}
          </Text>
          <Text style={styles.contentDesc}>
            g.{' '}
            <Text style={styles.fontBold}>
              {I18n.t('termConditionText.subtitleB1gTitle')}
            </Text>{' '}
            {I18n.t('termConditionText.subtitleB1gDesc')}
          </Text>
          <Text style={styles.contentDesc}>
            h.{' '}
            <Text style={styles.fontBold}>
              {I18n.t('termConditionText.subtitleB1hTitle')}
            </Text>{' '}
            {I18n.t('termConditionText.subtitleB1hDesc')}
          </Text>
          <Text style={styles.contentDesc}>
            i.{' '}
            <Text style={styles.fontBold}>
              {I18n.t('termConditionText.subtitleB1iTitle')}
            </Text>{' '}
            {I18n.t('termConditionText.subtitleB1iDesc')}
          </Text>
          <Text style={styles.contentTitle2}>
            {I18n.t('termConditionText.subtitleB2')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB2aTitle')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB2bTitle')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB2cTitle')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB2dTitle')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB2eTitle')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB2fTitle')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB2gTitle')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB2hTitle')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB2iTitle')}
          </Text>
          <Text style={styles.contentTitle2}>
            {I18n.t('termConditionText.subtitleB3')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB3Desc')}
          </Text>
          <Text style={styles.contentTitle2}>
            {I18n.t('termConditionText.subtitleB4')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB4aTitle')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB4bTitle')}
          </Text>
          <Text style={styles.contentTitle2}>
            {I18n.t('termConditionText.subtitleB5')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB5a')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB5i')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB5ii')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB5iii')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB5iv')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB5b')}
          </Text>
          <Text style={styles.contentTitle2}>
            {I18n.t('termConditionText.subtitleB6')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB6a')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB6b')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB6c')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB6d')}
          </Text>
          <Text style={styles.contentTitle2}>
            {I18n.t('termConditionText.subtitleB7')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7a')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7b')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7i')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7ii')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7iii')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7iv')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7v')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7vi')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7vii')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7viii')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7ix')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7x')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7xi')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7xii')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB7c')}
          </Text>
          <Text style={styles.contentTitle2}>
            {I18n.t('termConditionText.subtitleB8')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB8a')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB8a1')}
            <Text style={[styles.contentDesc, styles.textBlue]}>
              easterngreenapartment@gmail.com;
            </Text>
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB8a2')}
            <Text style={[styles.contentDesc, styles.textBlue]}>
              082112408214;
            </Text>{' '}
            atau
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB8a3')}(
            <Text style={[styles.contentDesc, styles.textBlue]}>
              lihat peta
            </Text>
            ){'\n'}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB8b')}
            <Text style={styles.textBlue}>https://hunianAja.id</Text>
            {'\n'}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB8c')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB8d')}
          </Text>
          <Text style={styles.contentTitle2}>
            {I18n.t('termConditionText.subtitleB9')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB9a')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB9b')}
          </Text>
          <Text style={styles.contentTitle2}>
            {I18n.t('termConditionText.subtitleB10')}
          </Text>
          <Text style={styles.contentDesc}>
            {I18n.t('termConditionText.subtitleB10desc')}
          </Text>
          <Text style={styles.closing}>© 2021 LRT City</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default TermConditionScreen;
