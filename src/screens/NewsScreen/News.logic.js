//package import here
import { useState, useEffect, useRef } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

//local import here
import NewsNavigator from './News.navigator';
import { IMAGES } from '../../configs';

const NewsLogic = () => {
  //package value here
  const RefBottomSheet = useRef(null);
  const { navigator } = NewsLogic.dependencies;
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
      imageUrl,
      currentContentOffsetScrollview,
    },
    //actions props here
    actions: {
      goBack,
      isCurrentImageIndex,
      setOnModalViewPhoto,
      setImageUrl,
      onScroll,
      openModal,
    },
  };
};

export default NewsLogic;

NewsLogic.dependencies = {
  navigator: NewsNavigator,
};
