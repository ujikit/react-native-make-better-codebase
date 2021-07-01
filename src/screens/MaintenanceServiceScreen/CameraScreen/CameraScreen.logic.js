//package import here
import { useEffect, useState, useCallback, useRef } from 'react';
import { RNCamera } from 'react-native-camera';
import { useDispatch, useSelector } from 'react-redux';

//local import here
import CameraScreenNavigator from './CameraScreen.navigator';
import { globalMaintenanceDispatch } from '../../../redux/redux-actions';

const CameraScreenLogic = () => {
  //package value here
  const { navigator } = CameraScreenLogic.dependencies;
  const { goBack } = navigator();
  const dispatch = useDispatch();
  const { globalMaintenanceReducer } = useSelector(
    (state) => state.maintenance
  );

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

      if (globalMaintenanceReducer.currentSendSolutionImage === 'one') {
        dispatch(
          globalMaintenanceDispatch({
            currentSendSolutionImage: '',
            sendSolutionImageOne: `data:image/png;base64,${capture.base64}`,
          })
        );
      } else if (globalMaintenanceReducer.currentSendSolutionImage === 'two') {
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

export default CameraScreenLogic;

CameraScreenLogic.dependencies = {
  navigator: CameraScreenNavigator,
};
