//package import here
import React from 'react';
import { SafeAreaView, Text, TouchableHighlight, View } from 'react-native';

//local import here
import styles from './Setting.styles';
import SettingLogic from './Setting.logic';
import I18n from '../../i18n';
import { COLORS } from '../../configs';

const ExampleHooksScreen = () => {
  //logic value here
  const { data, actions } = SettingLogic();

  //place your extension component here

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{I18n.t('selectLanguage')}</Text>
      <View style={styles.content}>
        <TouchableHighlight
          style={[styles.button, styles.border]}
          underlayColor={COLORS.black40}
          disabled={data.persistState.language === 'en'}
          onPress={() => actions._handleClick('en')}
        >
          <>
            <Text style={styles.text}>English</Text>
            {data.persistState.language === 'en' ? (
              <View style={styles.wrapIcon}>
                <Text>{I18n.t('selected')}</Text>
              </View>
            ) : null}
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor={COLORS.black40}
          disabled={data.persistState.language === 'id'}
          onPress={() => actions._handleClick('id')}
        >
          <>
            <Text style={styles.text}>Bahasa Indonesia</Text>
            {data.persistState.language === 'id' && (
              <View style={styles.wrapIcon}>
                <Text>{I18n.t('selected')}</Text>
              </View>
            )}
          </>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default ExampleHooksScreen;
