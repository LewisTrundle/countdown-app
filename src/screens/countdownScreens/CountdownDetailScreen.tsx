import { View, Text } from 'react-native';
import { styles }  from '../../styles';


export function CountdownDetailScreen({ navigation, route }) {
  const { countdown } = route?.params.count
  return (
    <View style={styles.bgContainer}>
      <View style={styles.countdownTimerContainer}>
        <Text style={[styles.timeUnit, styles.yearUnit]}>{countdown.timeLeft.years}</Text>
        <Text style={styles.timeSeparator}></Text>
        <Text style={[styles.timeUnit, styles.dayUnit]}>{countdown.timeLeft.days}</Text>
        <Text style={styles.timeSeparator}></Text>
        <Text style={[styles.timeUnit, styles.hourUnit]}>{countdown.timeLeft.hours}</Text>
        <Text style={styles.timeSeparator}></Text>
        <Text style={[styles.timeUnit, styles.minuteUnit]}>{countdown.timeLeft.minutes}</Text>
        <Text style={styles.timeSeparator}></Text>
        <Text style={[styles.timeUnit, styles.secondUnit]}>{countdown.timeLeft.seconds}</Text>
        <Text style={styles.timeSeparator}></Text>
      </View>
      <Text style={styles.timetitle}>Years Days Hours Minutes Seconds</Text>
    </View>
  )
}