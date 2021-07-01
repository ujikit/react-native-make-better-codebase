//package import here
import { useEffect } from 'react';

//local import here
import PrivacyPolicyNavigator from './PrivacyPolicy.navigator';

const PrivacyPolicyLogic = () => {
  //package value here
  const { navigator } = PrivacyPolicyLogic.dependencies;
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

export default PrivacyPolicyLogic;

PrivacyPolicyLogic.dependencies = {
  navigator: PrivacyPolicyNavigator,
};
