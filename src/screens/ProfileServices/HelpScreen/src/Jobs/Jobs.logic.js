//package import here
import { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

//local import here
import JobsNavigator from './Jobs.navigator';

const JobsLogic = () => {
  //package value here
  const { navigator } = JobsLogic.dependencies;
  const { goBack, toDetail } = navigator();

  //state value here
  const listService = [
    {
      name: 'Permasalahan pada pemeliharaan',
    },
    {
      name: 'Permasalahan pada komplain',
    },
    {
      name: 'Permasalahan pada meteran air',
    },
    {
      name: 'Permasalahan pada perbaikan',
    },
    {
      name: 'Permasalahan pada serah terima',
    },
  ];

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here

  return {
    //data props here
    data: {
      listService,
    },
    //actions props here
    actions: {
      goBack,
      toDetail,
    },
  };
};

export default JobsLogic;

JobsLogic.dependencies = {
  navigator: JobsNavigator,
};
