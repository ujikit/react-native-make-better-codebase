//package import here
import { useEffect, useCallback } from 'react';

//local import here
import ListDataNavigator from './ListData.navigator';

const ListDataLogic = () => {
  //package value here
  const { navigator } = ListDataLogic.dependencies;
  const { goBack, goToPaymentDetail, goToDetailNews } = navigator();

  //state value here

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const _handleNavigate = useCallback(
    (type, data) => {
      if (type === '1') {
        goToPaymentDetail(data);
      } else if (type === '2') {
        goToPaymentDetail(data);
      } else if (type === '5') {
        goToDetailNews(data);
      }
    },
    [goToDetailNews, goToPaymentDetail]
  );

  return {
    //data props here
    data: {},
    //actions props here
    actions: {
      goBack,
      _handleNavigate,
    },
  };
};

export default ListDataLogic;

ListDataLogic.dependencies = {
  navigator: ListDataNavigator,
};
