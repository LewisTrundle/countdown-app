import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles';


export const IconWithText = (props: {
  onPress?: any,
  iconName: string,
  iconSize?: number,
  iconColor?: string,
  text: string
}) => {
  return (
    <View style={styles.iconTextCombo}>
      <TouchableOpacity onPress={props.onPress} >
        <Icon name={props.iconName} size={props.iconSize} color={props.iconColor} />
      </TouchableOpacity>
      <Text>{props.text}</Text>
    </View>
  )
}