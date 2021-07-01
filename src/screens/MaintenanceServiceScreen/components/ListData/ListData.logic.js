//package import here
import { useEffect, useCallback } from 'react';

//local import here
import ListDataNavigator from './ListData.navigator';

const ListDataLogic = () => {
  //package value here
  const { navigator } = ListDataLogic.dependencies;
  const { goBack, goToDetailMaintenance } = navigator();

  //state value here

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here

  return {
    //data props here
    data: {},
    //actions props here
    actions: {
      goBack,
      goToDetailMaintenance,
    },
  };
};

export default ListDataLogic;

ListDataLogic.dependencies = {
  navigator: ListDataNavigator,
};
