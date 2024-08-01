import React from 'react';
import {Text, TextComponent, TextProps, ViewProps} from 'react-native';
type MyText = {
  onPress?: () => void;
  children?: React.ReactElement;
  style?: TextProps['style'];
  boldy?: boolean;
};
const MyText = ({onPress, children, style, boldy = false, ...rest}) => {
  const fontFamily = boldy ? 'Audiowide-Regular' : 'Redressed-Regular';
  return (
    <Text
      onPress={onPress}
      style={[{color: '#000'}, {fontFamily}, style]}
      {...rest}>
      {children}
    </Text>
  );
};

export default MyText;
