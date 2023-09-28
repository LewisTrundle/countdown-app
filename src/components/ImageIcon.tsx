import { View, Image } from 'react-native';
import styles from '../styles/styles';

export const ImageIcon = (props: {
  source: string;
  backgroundColour?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.fullSize} source={require('../assets/robot.png')} />
    </View>
  )
} 