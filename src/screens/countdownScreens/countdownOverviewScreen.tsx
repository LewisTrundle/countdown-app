import { View, } from 'react-native';
import { useState, useEffect } from "react";
import { styles }  from '../../styles';
import { getAllCountdowns } from '../../helpers/storageAccess';
import { IconButton } from '../../components/IconButton';
import { CountdownCard } from '../../components/CountdownCard';


export function CountdownOverviewScreen({ navigation, route }) {
  const [countdowns, setCountdowns] = useState(null);
  const [retreivedCountdowns, setRetreivedCountdowns] = useState(false);


  // upon first render, get the list of countdowns
  useEffect(() => {
    let addedCountdown = route.params?.addedCountdown ? true : false;
    if (!retreivedCountdowns || addedCountdown) {
      getAllCountdowns().then((c) => {
        setCountdowns(c);
        setRetreivedCountdowns(!retreivedCountdowns);
      });
    }
  }, [route.params]);

  // once countdowns have been retrieved, calculate their durations left
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCountdowns = countdowns?.map((c) => {
        c.displayTimeDifference();
        return c
      });
      setCountdowns(updatedCountdowns);
    }, 1000); 
    return () => clearInterval(interval);
  }, [retreivedCountdowns]);

  const goToCountdownDetail = (c) => {
    const count = {countdown:{
      title: c.title,
      dateTime: c.dateTime,
      repeat: c.repeat,
      notifications: c.notifications,
      description: c.description,
      timeLeft: c.timeLeft
    }}
    navigation.navigate("CountdownDetail", {count});
  }


  return (
    <View style={[styles.bgContainer, styles.align]}>
      {countdowns && countdowns.map((c) => (
        <CountdownCard key={c.title} countdown={c} onPress={() => goToCountdownDetail(c)}/>
      ))}

      <IconButton iconName={"add-circle"} onPress={() => navigation.navigate('AddCountdown')} />
    </View>
  );
}