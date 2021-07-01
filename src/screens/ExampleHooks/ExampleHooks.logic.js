//package import here
import { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

//local import here
import ExampleHooksNavigator from './ExampleHooks.navigator';

const ExampleHooksLogic = () => {
  //package value here
  const { navigator } = ExampleHooksLogic.dependencies;
  const { goBack } = navigator();

  //state value here
  const { persistState, todoState } = useSelector(
    (state) => ({
      persistState: state.persist,
      todoState: state.todo,
    }),
    shallowEqual
  );

  //variable value here

  useEffect(() => {
    //function here
  }, []);

  //place your function in here

  return {
    //data props here
    data: {
      persistState,
      todoState,
    },
    //actions props here
    actions: {
      goBack,
    },
  };
};

export default ExampleHooksLogic;

ExampleHooksLogic.dependencies = {
  navigator: ExampleHooksNavigator,
};
