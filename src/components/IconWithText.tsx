import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles }  from '../styles';

type IconWithTextProps = {
  onPress?: any,
  iconName: string,
  iconSize?: number,
  iconColor?: string,
  text: string
};

export const IconWithText = ({ onPress, iconName, iconSize, iconColor, text }: IconWithTextProps) => {
  return (
    <View style={styles.iconWithTextContainer}>
      <TouchableOpacity onPress={onPress} >
        <Icon name={iconName} size={iconSize} color={iconColor} />
      </TouchableOpacity>
      <Text>{text}</Text>
    </View>
  )
};