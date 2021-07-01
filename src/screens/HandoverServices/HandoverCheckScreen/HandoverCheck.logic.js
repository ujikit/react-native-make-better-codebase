//package import here
import { useEffect, useState } from 'react';

//local import here
import HandoverCheckNavigator from './HandoverCheck.navigator';
import styles from './HandoverCheck.styles';
import { COLORS, IMAGES } from '../../../configs';

const HandoverCheckLogic = () => {
  //package value here
  const { navigator } = HandoverCheckLogic.dependencies;
  const { goBack, goToComplaintForm, goToComplaintResult } = navigator();

  //state value here
  const [modalVisible, setModalVisible] = useState(false);

  //variable value here
  const complaintDetal = {
    status: 'Pengerjaan',
    title: 'Lampu rusak',
    location: 'Tower Palem',
    description: 'Lampu rusak secara tiba-tiba, sudah sekitar 1 minggu',
    reporter: 'Ardi sulaiman F.',
    reporterImage: IMAGES.logo,
    imageEvidence: [
      { url: IMAGES.logo },
      { url: IMAGES.logo },
      { url: IMAGES.logo },
    ],
    statusReport: [
      {
        status: 'Menunggu',
        date: '12 Feb 2021 | 13:00',
      },
      {
        status: 'Pengerjaan',
        date: '13 Februari 2021 | 15:50',
      },
    ],
  };

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const _lineType = (index, totalLength) => {
    if (index === 0 && totalLength === 1) {
      return null;
    } else if (index === 0 && totalLength > 1) {
      return styles.halfLineBtm;
    } else if (index !== 0 && totalLength !== index + 1) {
      return styles.fullLine;
    } else if (index !== 0 && totalLength === index + 1) {
      return styles.halfLineTop;
    }
  };

  const _pointType = (status) => {
    switch (status) {
      case 'Menunggu':
        return COLORS.red50;
      case 'Pengerjaan':
        return COLORS.blue50;
      case 'Selesai':
        return COLORS.green50;
    }
  };

  return {
    //data props here
    data: {
      complaintDetal,
      modalVisible,
    },
    //actions props here
    actions: {
      goBack,
      _lineType,
      _pointType,
      setModalVisible,
      goToComplaintForm,
      goToComplaintResult,
    },
  };
};

export default HandoverCheckLogic;

HandoverCheckLogic.dependencies = {
  navigator: HandoverCheckNavigator,
};
