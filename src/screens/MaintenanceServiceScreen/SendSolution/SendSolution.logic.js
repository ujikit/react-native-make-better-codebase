//package import here
import { useState, useEffect, useMemo } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import moment from 'moment';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

import { useDispatch, useSelector } from 'react-redux';

//local import here
import SendSolutionNavigator from './SendSolution.navigator';
import {
  updateMaintenanceStatus,
  globalMaintenanceDispatch,
  isMessageMaintenanceStatus,
} from '../../../redux/redux-actions';
import I18n from '../../../i18n';

const SendSolutionLogic = () => {
  //package value here
  const { navigator } = SendSolutionLogic.dependencies;
  const { goBack, goToCameraScreen } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);
  const abort = controller.signal;
  const { globalMaintenanceReducer } = useSelector(
    (state) => state.maintenance
  );
  let time = moment().format('DD MMM HH:MM');

  //state value here
  let [solution, setSolution] = useState('');
  let [
    isVisibleModalConfirmSendSolution,
    setIsVisibleModalConfirmSendSolution,
  ] = useState(false);
  let [modalVisible, setModalVisible] = useState(false);
  let [imageOneData, setImageOneData] = useState('');
  let [imageTwoData, setImageTwoData] = useState('');
  let [imageThreeData, setImageThreeData] = useState('');
  let [progressUpload, setProgressUpload] = useState('0%');

  //variable value

  //place your function in here
  useEffect(() => {
    dispatch(
      globalMaintenanceDispatch({
        currentSendSolutionImage: '',
        sendSolutionImageOne: '',
        sendSolutionImageTwo: '',
        sendSolutionImageThree: '',
      })
    );
  }, []);

  const handleOpenModalUploadPhoto = (photoNumber) => {
    setModalVisible(true);
    dispatch(
      globalMaintenanceDispatch({
        currentSendSolutionImage: photoNumber,
      })
    );
  };

  const _handleDeletePhoto = (photoNumber) => {
    setModalVisible(false);
    if (globalMaintenanceReducer.currentSendSolutionImage === 'one') {
      dispatch(
        globalMaintenanceDispatch({
          currentSendSolutionImage: '',
          sendSolutionImageOne: '',
        })
      );
    } else if (globalMaintenanceReducer.currentSendSolutionImage === 'two') {
      dispatch(
        globalMaintenanceDispatch({
          currentSendSolutionImage: '',
          sendSolutionImageTwo: '',
        })
      );
    } else if (globalMaintenanceReducer.currentSendSolutionImage === 'three') {
      dispatch(
        globalMaintenanceDispatch({
          currentSendSolutionImage: '',
          sendSolutionImageThree: '',
        })
      );
    }
  };

  const getLaunchCamera = () => {
    setModalVisible(false);
    setTimeout(() => {
      goToCameraScreen();
    }, 600);
  };

  const getLaunchGallery = () => {
    setModalVisible(false);
    setTimeout(() => {
      launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: true,
        },
        (capture) => {
          if (capture.didCancel) {
            return;
          }

          if (globalMaintenanceReducer.currentSendSolutionImage === 'one') {
            dispatch(
              globalMaintenanceDispatch({
                currentSendSolutionImage: '',
                sendSolutionImageOne: `data:image/png;base64,${capture.base64}`,
              })
            );
          } else if (
            globalMaintenanceReducer.currentSendSolutionImage === 'two'
          ) {
            dispatch(
              globalMaintenanceDispatch({
                currentSendSolutionImage: '',
                sendSolutionImageTwo: `data:image/png;base64,${capture.base64}`,
              })
            );
          } else if (
            globalMaintenanceReducer.currentSendSolutionImage === 'three'
          ) {
            dispatch(
              globalMaintenanceDispatch({
                currentSendSolutionImage: '',
                sendSolutionImageThree: `data:image/png;base64,${capture.base64}`,
              })
            );
          }
          setModalVisible(false);
        }
      );
    }, 600);
  };

  const sendSolution = (detailMaintenance) => {
    dispatch(
      updateMaintenanceStatus(
        abort,
        (progress) => {
          setProgressUpload(
            `${Math.floor((progress.loaded / progress.total) * 100)}%`
          );
        },
        goBack,
        {
          ...detailMaintenance,
          step: [
            detailMaintenance.step[0],
            detailMaintenance.step[1],
            {
              status: 'done',
              time,
              evidence: {
                name: solution,
                photo: [
                  globalMaintenanceReducer.sendSolutionImageOne,
                  globalMaintenanceReducer.sendSolutionImageTwo,
                  globalMaintenanceReducer.sendSolutionImageThree,
                ],
              },
            },
          ],
        }
      )
    );
    setIsVisibleModalConfirmSendSolution(false);
  };

  const handleSend = () => {
    if (!solution) {
      return dispatch(
        isMessageMaintenanceStatus({
          types: 'error',
          isShow: true,
          title: I18n.t('pleaseEnterSolution'),
        })
      );
    }
    setIsVisibleModalConfirmSendSolution(!isVisibleModalConfirmSendSolution);
  };

  return {
    //data props here
    data: {
      solution,
      modalVisible,
      isVisibleModalConfirmSendSolution,
      imageOneData,
      imageTwoData,
      imageThreeData,
      progressUpload,
    },
    //actions props here
    actions: {
      goBack,
      setSolution,
      setModalVisible,
      setIsVisibleModalConfirmSendSolution,
      setImageOneData,
      setImageTwoData,
      setImageThreeData,
      handleOpenModalUploadPhoto,
      _handleDeletePhoto,
      getLaunchCamera,
      getLaunchGallery,
      sendSolution,
      handleSend,
    },
  };
};

export default SendSolutionLogic;

SendSolutionLogic.dependencies = {
  navigator: SendSolutionNavigator,
};
