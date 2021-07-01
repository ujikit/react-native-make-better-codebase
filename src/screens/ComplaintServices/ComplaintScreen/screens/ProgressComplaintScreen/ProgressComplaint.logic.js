//package import here
import { useEffect, useState } from 'react';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';

//local import here
import ProgressComplaintNavigator from './ProgressComplaint.navigator';
import { COLORS } from '../../../../../configs';
import { selectedComplaint } from './../../../../../redux/redux-actions';

const ProgressComplaintLogic = () => {
  //package value here
  const { navigator } = ProgressComplaintLogic.dependencies;
  const { goBack, goToComplaintDetail } = navigator();
  const dispatch = useDispatch();

  //state value here
  const [listComplaint, setListComplaint] = useState([]);
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

  //place your function in here
  const _colorStatus = (status) => {
    switch (status) {
      case 'Waiting':
        return COLORS.red50;
      case 'In Progress':
        return COLORS.orange50;
      case 'Done':
        return COLORS.green50;
    }
  };

  const _gotToComplaintDetail = (item) => {
    dispatch(selectedComplaint(item));
    goToComplaintDetail();
  };

  return {
    //data props here
    data: {
      listComplaint,
    },
    //actions props here
    actions: {
      goBack,
      _colorStatus,
      _gotToComplaintDetail,
    },
  };
};

export default ProgressComplaintLogic;

ProgressComplaintLogic.dependencies = {
  navigator: ProgressComplaintNavigator,
};
