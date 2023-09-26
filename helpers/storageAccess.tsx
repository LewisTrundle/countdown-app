import { Countdown } from '../classes/Countdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

const addCountdown = async (countdown: Countdown): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(countdown);
    await AsyncStorage.setItem(countdown.title, jsonValue);
  } catch (e) {
    console.log(e);
  }
}

const getCountdown = async (countdownName: string): Promise<Countdown> => {
  try {
    const jsonValue = await AsyncStorage.getItem(countdownName);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
}

const getAllCountdowns = async () => {
  try {
    //await AsyncStorage.multiRemove(["Test5", "Test7", "Test1"]); 
    const keys: readonly string[] = await AsyncStorage.getAllKeys();
    //console.log(keys)
    const countdownList: Countdown[] = await Promise.all(keys.map(async (key) => {
      let c = await getCountdown(key);
      return new Countdown(c.title, c.dateTime, c.repeat, c.notifications, c.description)
    }))
    return countdownList;
  } catch (e) {
    console.log(e);
  }
}

export { addCountdown, getAllCountdowns, getCountdown };