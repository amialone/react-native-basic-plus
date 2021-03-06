import React, { useMemo } from 'react'
import { View, ViewProps } from 'react-native'
import { useTheme } from '../hooks/useTheme'

interface ContainerProps extends ViewProps {
  customColor?: {
    light: string;
    dark: string;
  };
}

const Container: React.FC<ContainerProps> = ({
  customColor,
  children,
  style,
  ...rest }) => {
  const { bgColors, isDarkMode, theme } = useTheme();
  const backgroundColor = !!customColor ? customColor[theme] : bgColors.bgColor2;
  const viewStyle = useMemo(() => !!style
    ? [{ backgroundColor, flex: 1 }, style]
    : { backgroundColor, flex: 1 }, [isDarkMode, style]);

  return (
    <View style={viewStyle} {...rest}>
      {children}
    </View>
  )
}

export default Container;
