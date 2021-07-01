//package import
import React, { memo, useState } from 'react';
import { View, LayoutAnimation, UIManager, Platform, Text } from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import Button from '../Button';
import { COLORS, STYLES } from '../../configs';
import { ChevronDownIcon, ChevronUpIcon } from '../../assets/svgs';

const Accordion = ({
  children,
  label,
  styleButtonLabel,
  styleLabel,
  styleWrap,
  isShow,
}) => {
  //state value here
  const [isExpand, setIsExpand] = useState(isShow);

  //place your function in here
  const _toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpand(!isExpand);
  };

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View style={[STYLES.w100, styleWrap]}>
      <Button
        color={COLORS.primaryWhite}
        styleWrap={[STYLES.w100, STYLES.br0]}
        styleContainer={[styles.containerButton, styleButtonLabel]}
        onPress={_toggleExpand}
      >
        <Text style={[styles.categoryText, styleLabel]}>{label}</Text>
        {isExpand ? (
          <ChevronUpIcon width={12} height={12} fill={COLORS.black80} />
        ) : (
          <ChevronDownIcon width={12} height={12} fill={COLORS.black80} />
        )}
      </Button>
      {isExpand && children}
    </View>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  isShow: PropTypes.bool,
  label: PropTypes.string,
  styleButtonLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleWrap: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
};

Accordion.defaultProps = {
  children: <View />,
  isShow: false,
  label: '',
  styleButtonLabel: {},
  styleLabel: {},
  styleWrap: {},
};

export default memo(Accordion);
