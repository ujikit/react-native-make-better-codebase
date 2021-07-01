//package import here
import { useEffect, useState, useMemo, useCallback } from 'react';
import { BackHandler, Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';

//local import here
import ComplaintDetailNavigator from './ComplaintDetail.navigator';
import { COLORS, IMAGES } from '../../../configs';
import {
  selectedComplaint,
  postAcceptComplaint,
  resetAcceptComplaint,
  postFinishComplaint,
  PROGRESS_UPLOAD,
} from './../../../redux/redux-actions';

const ComplaintDetailLogic = () => {
  //package value here
  const { navigator } = ComplaintDetailLogic.dependencies;
  const {
    goBack,
    goToComplaintForm,
    goToComplaintResult,
    goToComplaintEvidence,
    navigation,
  } = navigator();
  const complaintState = useSelector((state) => state.complaint);
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);

  //state value here
  const [modalVisible, setModalVisible] = useState(false);
  const [dataComplaint, setDataComplaint] = useState([]);
  const [onModalViewPhoto, setOnModalViewPhoto] = useState(false);
  const [modalWarning, setModalWarning] = useState(false);
  const [progressUpload, setProgressUpload] = useState('0%');

  //variable value here
  useEffect(() => {
    return () => controller.abort();
  }, [controller]);

  const abort = controller.signal;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const listImage = [
    {
      image: IMAGES.solutionOne,
    },
    {
      image: IMAGES.solutionTwo,
    },
  ];

  useEffect(() => {
    //function here
    setDataComplaint(complaintState.data);
    BackHandler.addEventListener('hardwareBackPress', backHandler);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
  }, [backHandler, complaintState.data, dataComplaint, dispatch, goBack]);

  const backHandler = useCallback(() => {
    dispatch(resetAcceptComplaint());
  }, [dispatch]);

  useEffect(() => {
    if (complaintState.acceptComplaint.code === 200) {
      dispatch(selectedComplaint(complaintState.acceptComplaint.data));
      setDataComplaint(complaintState.data);
    }

    if (complaintState.finishComplaint.code === 200) {
      setModalWarning(false);
      dispatch(selectedComplaint(complaintState.finishComplaint.data));
      setDataComplaint(complaintState.data);
    }
  }, [
    complaintState.acceptComplaint.code,
    complaintState.acceptComplaint.data,
    complaintState.data,
    complaintState.finishComplaint.code,
    complaintState.finishComplaint.data,
    dispatch,
  ]);

  useEffect(() => {
    if (complaintState.dataFinish !== null) {
      setModalWarning(true);
    }
  }, [complaintState.dataFinish]);

  //place your function in here

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

  const _changeStatusWaiting = () => {
    const body = { complaintId: dataComplaint.complaintId };
    if (!complaintState.acceptComplaint.isLoading) {
      dispatch(postAcceptComplaint(abort, body));
    }
  };

  const _sendEvidence = () => {
    goToComplaintEvidence();
  };

  const goToEvidence = () => {
    setModalWarning(false);
    goToComplaintEvidence();
  };

  const _sendEvidanceNow = useCallback(() => {
    setModalWarning(false);
    dispatch(
      postFinishComplaint(complaintState.dataFinish, (progress) => {
        dispatch({
          type: PROGRESS_UPLOAD,
          payload: `${Math.floor((progress.loaded / progress.total) * 100)}%`,
        });
      })
    );
  }, [complaintState.dataFinish, dispatch]);

  const openWhatsapp = () => {
    var phone = '';
    dataComplaint.tenantPhone.indexOf('0') === 0
      ? (phone = dataComplaint.tenantPhone.replace('0', '+62'))
      : dataComplaint.tenantPhone;

    Linking.openURL(`whatsapp://send?phone=${phone}`);
  };

  const setModal = (item) => {
    setOnModalViewPhoto(true);
    setSelectedIndex(item);
  };

  return {
    //data props here
    data: {
      complaintState,
      dataComplaint,
      listImage,
      modalVisible,
      modalWarning,
      onModalViewPhoto,
      selectedIndex,
    },
    //actions props here
    actions: {
      _changeStatusWaiting,
      _pointType,
      _sendEvidence,
      _sendEvidanceNow,
      backHandler,
      goToComplaintForm,
      goToEvidence,
      goToComplaintResult,
      goBack,
      openWhatsapp,
      setModalVisible,
      setOnModalViewPhoto,
      setModalWarning,
      setSelectedIndex,
      setModal,
    },
  };
};

export default ComplaintDetailLogic;

ComplaintDetailLogic.dependencies = {
  navigator: ComplaintDetailNavigator,
};
