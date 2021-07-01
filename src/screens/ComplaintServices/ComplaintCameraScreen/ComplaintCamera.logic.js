//package import here
import { useEffect, useState, useCallback, useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import { useDispatch, useSelector } from 'react-redux';

//local import here
import ComplaintCameraNavigator from './ComplaintCamera.navigator';
import { globalComplaintDispatch } from '../../../redux/redux-actions';

const ComplaintCameraLogic = () => {
  //package value here
  const { navigator } = ComplaintCameraLogic.dependencies;
  const { goBack } = navigator();
  const dispatch = useDispatch();
  const { globalComplaintReducer } = useSelector((state) => state.complaint);

  //state value here
  const refCamera = useRef(null);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const _handleFlashLight = useCallback(() => {
    if (flashMode) {
      setFlashMode(RNCamera.Constants.FlashMode.off);
    } else {
      setFlashMode(RNCamera.Constants.FlashMode.torch);
    }
  }, [flashMode]);

  const _handleCapture = useCallback(async () => {
    if (refCamera.current) {
      const options = { quality: 0.5, base64: true };
      const capture = await refCamera.current.takePictureAsync(options);

      if (globalComplaintReducer.currentSendSolutionImage === 'one') {
        dispatch(
          globalComplaintDispatch({
            currentSendSolutionImage: '',
            sendSolutionImageOne: `data:image/png;base64,${capture.base64}`,
          })
        );
      } else if (globalComplaintReducer.currentSendSolutionImage === 'two') {
        dispatch(
          globalComplaintDispatch({
            currentSendSolutionImage: '',
            sendSolutionImageTwo: `data:image/png;base64,${capture.base64}`,
          })
        );
      } else if (globalComplaintReducer.currentSendSolutionImage === 'three') {
        dispatch(
          globalComplaintDispatch({
            currentSendSolutionImage: '',
            sendSolutionImageThree: `data:image/png;base64,${capture.base64}`,
          })
        );
      }

      goBack();
    }
  }, []);

  return {
    //data props here
    data: {
      flashMode,
      refCamera,
    },
    //actions props here
    actions: {
      goBack,
      setFlashMode,
      _handleFlashLight,
      _handleCapture,
    },
  };
};

export default ComplaintCameraLogic;

ComplaintCameraLogic.dependencies = {
  navigator: ComplaintCameraNavigator,
};
