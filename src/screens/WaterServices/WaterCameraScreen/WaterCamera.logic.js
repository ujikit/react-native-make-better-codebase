//package import here
import { useEffect, useState, useCallback, useRef } from 'react';
import { RNCamera } from 'react-native-camera';

//local import here
import WaterCameraNavigator from './WaterCamera.navigator';

const WaterCameraLogic = (dataItem) => {
  //package value here
  const { navigator } = WaterCameraLogic.dependencies;
  const { goBack, goToWaterForm } = navigator();

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
      goToWaterForm(dataItem, capture);
    }
  }, [dataItem, goToWaterForm]);

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

export default WaterCameraLogic;

WaterCameraLogic.dependencies = {
  navigator: WaterCameraNavigator,
};
