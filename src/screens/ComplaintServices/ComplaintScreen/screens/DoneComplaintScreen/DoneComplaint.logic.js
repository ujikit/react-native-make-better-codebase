//package import here
import { useEffect, useState } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

//local import here
import DoneComplaintNavigator from './DoneComplaint.navigator';
import { COLORS } from '../../../../../configs';
import { selectedComplaint } from './../../../../../redux/redux-actions';

const DoneComplaintLogic = () => {
  //package value here
  const { navigator } = DoneComplaintLogic.dependencies;
  const { goBack, goToComplaintDetail } = navigator();
  const dispatch = useDispatch();

  //state value here
  const [tabTypes, setTabTypes] = useState('');
  const [listComplaint, setListComplaint] = useState({});
  const [progressUpload, setProgressUpload] = useState(false);
  const [dataProgress, setDataProgress] = useState('');
  const { complaintState } = useSelector(
    (state) => ({
      complaintState: state.complaint,
    }),
    shallowEqual
  );

  //variable value here
  const complaintData = complaintState.listComplaint.data;

  useEffect(() => {
    setListComplaint(complaintData);
  }, [complaintData]);

  useEffect(() => {
    if (complaintState.finishComplaint.isLoading) {
      setProgressUpload(true);
      setDataProgress(complaintState.progressUpload);
    } else {
      setProgressUpload(false);
    }
  }, [
    complaintState.finishComplaint.code,
    complaintState.finishComplaint.isLoading,
    complaintState.progressUpload,
    dispatch,
  ]);

  //place your function in here
  const _colorStatus = (status) => {
    switch (status) {
      case 'Waiting':
        return COLORS.red50;
      case 'In Progress':
        return COLORS.orange50;
      case 'Finish':
        return COLORS.green50;
    }
  };

  const _navTab = (types) => {
    switch (types) {
      case 'All':
        setTabTypes('');
        break;
      case 'Menunggu':
        setTabTypes('Menunggu');
        break;
      case 'Pengerjaan':
        setTabTypes('Pengerjaan');
        break;
      case 'Selesai':
        setTabTypes('Selesai');
        break;
    }
  };

  const _gotToComplaintDetail = (item) => {
    dispatch(selectedComplaint(item));
    goToComplaintDetail();
  };

  return {
    //data props here
    data: {
      complaintState,
      dataProgress,
      listComplaint,
      tabTypes,
      progressUpload,
    },
    //actions props here
    actions: {
      goBack,
      _colorStatus,
      _navTab,
      _gotToComplaintDetail,
      goToComplaintDetail,
    },
  };
};

export default DoneComplaintLogic;

DoneComplaintLogic.dependencies = {
  navigator: DoneComplaintNavigator,
};
