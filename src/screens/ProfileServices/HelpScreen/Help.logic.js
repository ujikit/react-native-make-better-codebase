//package import here
import { useEffect, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

//local import here
import HelpNavigator from './Help.navigator';

const HelpLogic = () => {
  //package value here
  const { navigator } = HelpLogic.dependencies;
  const { goBack, toDetail } = navigator();

  //state value here
  const [modalCs, setModalCs] = useState(false);
  const [search, setSearch] = useState('');
  let [isSearchData, setIsSearchData] = useState('');
  const [newSearch, setNewSearch] = useState(false);
  let [resultData, setResultData] = useState([]);
  const { accountState } = useSelector(
    (state) => ({
      accountState: state.account,
    }),
    shallowEqual
  );

  //variable value here
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

  useEffect(() => {
    //function here
  }, []);

  //place your function in here
  const searchHelp = (text) => {
    setSearch(text);
    setIsSearchData(true);

    if (text === '' || text === null) {
      setResultData([]);
    } else {
      const newData = listService.filter((item) => {
        const itemData = `${item.name.toLowerCase()}`;

        const textData = search.toLowerCase();

        return itemData.indexOf(textData) > -1;
      });
      setNewSearch(true);
      setResultData(newData);
    }
  };

  return {
    //data props here
    data: {
      accountState,
      isSearchData,
      modalCs,
      newSearch,
      resultData,
      search,
    },
    //actions props here
    actions: {
      goBack,
      setModalCs,
      searchHelp,
      setSearch,
      toDetail,
    },
  };
};

export default HelpLogic;

HelpLogic.dependencies = {
  navigator: HelpNavigator,
};
