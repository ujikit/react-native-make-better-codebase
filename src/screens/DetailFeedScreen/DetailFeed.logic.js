//package import here
import { useState, useEffect, useRef, useMemo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AbortController } from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import { useDispatch } from 'react-redux';

//local import here
import DetailFeedNavigator from './DetailFeed.navigator';
import { detailFeedDispatch } from '../../redux/redux-actions';
import { ENDPOINT, IMAGES } from '../../configs';

const DetailFeedLogic = () => {
  //package value here
  const dispatch = useDispatch();
  const controller = useMemo(() => new AbortController(), []);
  const abort = controller.signal;
  const RefBottomSheet = useRef(null);
  const { navigator } = DetailFeedLogic.dependencies;
  const { goBack } = navigator();

  //state value here
  let [onModalViewPhoto, setOnModalViewPhoto] = useState(false);
  let [currentImageIndex, isCurrentImageIndex] = useState(0);
  let [imageUrl, setImageUrl] = useState('');
  let [
    currentContentOffsetScrollview,
    setCurrentContentOffsetScrollview,
  ] = useState({
    x: 0,
    y: 0,
  });
  const [isShowHeaderText, setIsShowHeaderText] = useState(false);

  //variable value here

  //place your function in here

  const onScroll = (contentOffset) => {
    setCurrentContentOffsetScrollview(contentOffset);
    if (contentOffset.y <= 0) {
      RefBottomSheet.current.snapTo(1);
    } else {
      RefBottomSheet.current.snapTo(2);
    }
  };

  const openModal = (index, images) => {
    setOnModalViewPhoto(true);
    isCurrentImageIndex(index);
    setImageUrl(images);
  };

  return {
    //data props here
    data: {
      RefBottomSheet,
      onModalViewPhoto,
      currentImageIndex,
      isShowHeaderText,
      imageUrl,
      currentContentOffsetScrollview,
    },
    //actions props here
    actions: {
      goBack,
      isCurrentImageIndex,
      setIsShowHeaderText,
      setOnModalViewPhoto,
      setImageUrl,
      onScroll,
      openModal,
    },
  };
};

export default DetailFeedLogic;

DetailFeedLogic.dependencies = {
  navigator: DetailFeedNavigator,
};
