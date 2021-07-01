//package import here
import { useEffect, useState, useMemo } from 'react';
import { BackHandler } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import ComplaintEvidenceNavigator from './ComplaintEvidence.navigator';
import {
  finishedComplaint,
  globalComplaintDispatch,
} from './../../../redux/redux-actions';

const ComplaintEvidenceLogic = () => {
  //package value here
  const { navigator } = ComplaintEvidenceLogic.dependencies;
  const {
    goBack,
    goToCameraScreen,
    goToComplaintForm,
    goToComplaintResult,
  } = navigator();
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  const [modalVisible, setModalVisible] = useState(false);
  const [reason, setReason] = useState('');
  const [modalPickPhoto, setModalPickPhoto] = useState(false);
  const [imageOne, setImageOne] = useState('');
  const [imageTwo, setImageTwo] = useState('');
  const [imageThree, setImageThree] = useState('');
  const [indexImage, setIndexImage] = useState('');
  const [imageOneBase64, setImageOneBase64] = useState('');
  const [imageTwoBase64, setImageTwoBase64] = useState('');
  const [imageThreeBase64, setImageThreeBase64] = useState('');
  const complaintState = useSelector((state) => state.complaint);
  const { globalComplaintReducer } = useSelector((state) => state.complaint);

  //variable value here
  const abort = controller.signal;

  //place your function in here

  const _setPickModal = (index) => {
    if (index === 'one' && globalComplaintReducer.sendSolutionImageOne) {
      dispatch(
        globalComplaintDispatch({
          currentSendSolutionImage: '',
          sendSolutionImageOne: '',
        })
      );
    } else if (index === 'two' && globalComplaintReducer.sendSolutionImageTwo) {
      dispatch(
        globalComplaintDispatch({
          currentSendSolutionImage: '',
          sendSolutionImageTwo: '',
        })
      );
    } else if (
      index === 'three' &&
      globalComplaintReducer.sendSolutionImageThree
    ) {
      dispatch(
        globalComplaintDispatch({
          currentSendSolutionImage: '',
          sendSolutionImageThree: '',
        })
      );
    }
    setModalPickPhoto(true);
    setIndexImage(index);
    dispatch(
      globalComplaintDispatch({
        currentSendSolutionImage: index,
      })
    );
  };

  const _getLaunchCamera = () => {
    goToCameraScreen();
  };

  const _getLaunchGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      (response) => {
        setModalPickPhoto(false);
        if (response.didCancel !== true) {
          if (indexImage === 'one') {
            dispatch(
              globalComplaintDispatch({
                currentSendSolutionImage: '',
                sendSolutionImageOne: `data:image/png;base64,${response.base64}`,
              })
            );
            setImageOneBase64(`data:image/png;base64,${response.base64}`);
          } else if (indexImage === 'two') {
            dispatch(
              globalComplaintDispatch({
                currentSendSolutionImage: '',
                sendSolutionImageTwo: `data:image/png;base64,${response.base64}`,
              })
            );
            setImageTwoBase64(`data:image/png;base64,${response.base64}`);
          } else {
            dispatch(
              globalComplaintDispatch({
                currentSendSolutionImage: '',
                sendSolutionImageThree: `data:image/png;base64,${response.base64}`,
              })
            );
            setImageThreeBase64(`data:image/png;base64,${response.base64}`);
          }
        }
      }
    );
  };

  const _sendEvidence = () => {
    const complaintId = complaintState.data.complaintId;
    const image = [imageOneBase64, imageTwoBase64, imageThreeBase64];
    const body = { complaintId: complaintId, solution: reason, image: image };
    dispatch(finishedComplaint(body));
    goBack();
  };

  return {
    //data props here
    data: {
      complaintState,
      imageOne,
      imageTwo,
      imageThree,
      indexImage,
      modalVisible,
      modalPickPhoto,
      reason,
    },
    //actions props here
    actions: {
      _getLaunchCamera,
      _getLaunchGallery,
      _setPickModal,
      _sendEvidence,
      goBack,
      setReason,
      setModalVisible,
      setModalPickPhoto,
      goToComplaintForm,
      goToComplaintResult,
    },
  };
};

export default ComplaintEvidenceLogic;

ComplaintEvidenceLogic.dependencies = {
  navigator: ComplaintEvidenceNavigator,
};
