//package import here
import { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

//local import here
import AccountNavigator from './Account.navigator';

const AccountLogic = () => {
  //package value here
  const { navigator } = AccountLogic.dependencies;
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

export default AccountLogic;

AccountLogic.dependencies = {
  navigator: AccountNavigator,
};
