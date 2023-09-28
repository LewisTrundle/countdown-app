import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles }  from '../styles';


type IconButtonProps = {
  iconName: string
  onPress: any
}

export const IconButton = (props: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Icon name={props.iconName} size={100} color={"red"} />
    </TouchableOpacity>
  )
}