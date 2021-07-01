//package import here
import { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

//local import here
import MaintenanceNavigator from './Maintenance.navigator';

const MaintenanceLogic = () => {
  //package value here
  const { navigator } = MaintenanceLogic.dependencies;
  const { navigation, goBack, goToNotifications } = navigator();

  //state value here

  //variable value here

  //place your function in here

  return {
    //data props here
    data: {},
    //actions props here
    actions: {
      navigation,
      goBack,
      goToNotifications,
    },
  };
};

export default MaintenanceLogic;

MaintenanceLogic.dependencies = {
  navigator: MaintenanceNavigator,
};
