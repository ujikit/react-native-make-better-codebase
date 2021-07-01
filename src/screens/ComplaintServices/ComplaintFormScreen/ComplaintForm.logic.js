//package import here
import { useEffect, useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

//local import here
import ComplaintFormNavigator from './ComplaintForm.navigator';

const ComplaintFormLogic = () => {
  //package value here
  const { navigator } = ComplaintFormLogic.dependencies;
  const { goBack, goToComplaintResult } = navigator();

  //state value here
  const [description, setDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [imageData, setImageData] = useState('');

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const getLaunchCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      (response) => {
        setImageData(response.uri);
        setModalVisible(false);
      }
    );
  };

  const getLaunchGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      (response) => {
        setImageData(response.uri);
        setModalVisible(false);
      }
    );
  };

  return {
    //data props here
    data: {
      description,
      modalVisible,
      imageData,
    },
    //actions props here
    actions: {
      goBack,
      setDescription,
      setModalVisible,
      goToComplaintResult,
      getLaunchCamera,
      getLaunchGallery,
    },
  };
};

export default ComplaintFormLogic;

ComplaintFormLogic.dependencies = {
  navigator: ComplaintFormNavigator,
};
