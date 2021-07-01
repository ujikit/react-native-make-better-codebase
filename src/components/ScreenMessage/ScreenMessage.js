import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { STYLES } from '../../configs';

const ScreenMessage = ({
  children,
  desc,
  link,
  onPressLink,
  sourceIcon,
  sourceImage,
  styleContainer,
  styleImage,
  styleTitle,
  styleDesc,
  styleLink,
  title,
}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      {sourceImage ? (
        <Image
          source={sourceImage}
          style={[styles.image, styleImage]}
          resizeMode="contain"
        />
      ) : null}
      {sourceIcon ? <View style={STYLES.mrb12}>{sourceIcon}</View> : null}
      {title ? <Text style={[styles.title, styleTitle]}>{title}</Text> : null}
      {desc ? <Text style={[styles.desc, styleDesc]}>{desc}</Text> : null}
      {link ? (
        <Text style={[styles.link, styleLink]} onPress={onPressLink}>
          {link}
        </Text>
      ) : null}
      {children}
    </View>
  );
};

ScreenMessage.propTypes = {
  children: PropTypes.node,
  desc: PropTypes.string,
  link: PropTypes.string,
  onPressLink: PropTypes.func,
  sourceIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  sourceImage: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  styleContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleImage: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleTitle: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleDesc: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  styleLink: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  title: PropTypes.string,
};

ScreenMessage.defaultProps = {
  children: <View />,
  desc: '',
  link: '',
  onPressLink: () => null,
  sourceIcon: <View />,
  sourceImage: '',
  styleContainer: {},
  styleImage: {},
  styleTitle: {},
  styleDesc: {},
  styleLink: {},
  title: '',
};

export default memo(ScreenMessage);
