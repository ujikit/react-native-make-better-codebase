//package import here
import { useEffect } from 'react';

//local import here
import HelpDetailNavigator from './HelpDetail.navigator';

const HelpDetailLogic = () => {
  //package value here
  const { navigator } = HelpDetailLogic.dependencies;
  const { goBack } = navigator();

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
    },
  };
};

export default HelpDetailLogic;

HelpDetailLogic.dependencies = {
  navigator: HelpDetailNavigator,
};
