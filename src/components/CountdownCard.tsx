import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles }  from '../styles';
import { Countdown } from '../classes/Countdown';

type CountdownCardProps = {
  countdown: Countdown
  onPress: any
}

export const CountdownCard = ({ countdown, onPress }: CountdownCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.countdownCardContainer}>
        <View style={styles.countdownCardImageContainer}>
          <Image style={styles.countdownCardImage} source={require('../assets/robot.png')} />
        </View>
        <View style={styles.countdownCardBodyContainer}>
          <Text style={[styles.countdownCardText, styles.countdownCardTitle]}>{countdown.title}</Text>
          <Text style={[styles.countdownCardText]}>{(countdown.dateTime).toString().replace(/\b(?=(\d{3})+(?!\d))/g, "")}</Text>
        </View>
        <View style={styles.countdownCardCounterContainer}>
          <Text style={[styles.countdownCardText]}>{countdown.timeLeftSingleUnit.value.toString()}</Text>
          <Text style={[styles.countdownCardText]}>{countdown.timeLeftSingleUnit.unit}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};