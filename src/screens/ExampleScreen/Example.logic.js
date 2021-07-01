//package import here
import { useSelector, shallowEqual } from 'react-redux';

//local import here
import ExampleNavigator from './Example.navigator';

const ExampleLogic = () => {
  //package value here
  const { navigator } = ExampleLogic.dependencies;
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

export default ExampleLogic;

ExampleLogic.dependencies = {
  navigator: ExampleNavigator,
};
