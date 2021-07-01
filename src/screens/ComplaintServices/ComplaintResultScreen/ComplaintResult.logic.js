//package import here
import { useEffect, useState } from 'react';
import { IMAGES } from '../../../configs';

//local import here
import ComplaintResultNavigator from './ComplaintResult.navigator';

const ComplaintResultLogic = () => {
  //package value here
  const { navigator } = ComplaintResultLogic.dependencies;
  const { goBack } = navigator();

  //state value here
  const [modalVisible, setModalVisible] = useState(false);
  const [alertSave, setAlertSave] = useState(false);

  //variable value here
  const complaintReport = {
    description: 'Lampu sudah dalam kondisi menyala dan baik',
    reporter: 'Ardi sulaiman F.',
    position: 'Teknisi',
    reporterImage: IMAGES.logo,
    imageEvidence: [{ url: IMAGES.logo }, { url: IMAGES.logo }],
  };

  useEffect(() => {
    //function here
    setAlertSave(true);
  }, [alertSave]);

  //place your function in here

  return {
    //data props here
    data: {
      complaintReport,
      modalVisible,
      alertSave,
    },
    //actions props here
    actions: {
      goBack,
      setModalVisible,
      setAlertSave,
    },
  };
};

export default ComplaintResultLogic;

ComplaintResultLogic.dependencies = {
  navigator: ComplaintResultNavigator,
};
