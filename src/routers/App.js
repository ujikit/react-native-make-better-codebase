import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

import Stack from './Stack';
import { isBahasa } from '../i18n';
import NavigationService from '../configs/NavigationService';
import linking from './linking';
import NetInfo from '@react-native-community/netinfo';
import {
  chooseLanguage,
  showModal,
  progressUpload,
} from '../redux/redux-actions';
import { Modal, ScreenMessage } from '../components';
import { IMAGES, STYLES } from '../configs';
import I18n from '../i18n';

const App = () => {
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);
  const abort = controller.signal;
  const persistState = useSelector((state) => state.persist);
  const globalState = useSelector((state) => state.global);

  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (globalState.modal.title === I18n.t('error.noInternet')) {
      dispatch(progressUpload({ visible: false, value: '0%' }));
      controller.abort();
    }
  }, [controller, globalState.modal.isVisible]);

  useEffect(() => {
    if (first) {
      setFirst(false);
      if (persistState.language === '') {
        if (isBahasa()) {
          dispatch(chooseLanguage('id'));
        } else {
          dispatch(chooseLanguage('en'));
        }
      } else {
        dispatch(chooseLanguage(persistState.language));
      }
    }
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, [dispatch, first, persistState.language]);

  // Subscribe
  useEffect(() => {
    NetInfo.addEventListener((state) => {
      if (!state.type || !state.isConnected) {
        return dispatch(
          showModal({
            isVisible: true,
            sourceImage: IMAGES.networkTwo,
            title: I18n.t('error.noInternet'),
            desc: I18n.t('error.noInternetDesc'),
          })
        );
      }
      hideModal();
    });
  }, [dispatch, hideModal]);

  const hideModal = useCallback(() => {
    dispatch(
      showModal({
        isVisible: false,
        sourceImage: '',
        title: '',
        desc: '',
      })
    );
  }, [dispatch]);

  return (
    <NavigationContainer
      linking={linking}
      ref={(navigatorRef) => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    >
      <Stack />
      <Modal
        backdropOpacity={0.3}
        isVisible={globalState.modal.isVisible}
        onBackdropPress={() => hideModal()}
        onBackButtonPress={() => hideModal()}
        onSwipeComplete={() => hideModal()}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={200}
        animationOutTiming={200}
        children={
          <View style={STYLES.fx1}>
            <ScreenMessage
              sourceImage={globalState.modal.sourceImage}
              styleImage={styles.screenMessageImage}
              styleDesc={styles.screenMessageDescription}
              title={globalState.modal.title}
              desc={globalState.modal.desc}
            />
          </View>
        }
      />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screenMessageImage: {
    width: 160,
    height: 120,
  },
  screenMessageDescription: { lineHeight: 21 },
  button1Position: { alignSelf: 'center', width: 328 },
});

export default App;
