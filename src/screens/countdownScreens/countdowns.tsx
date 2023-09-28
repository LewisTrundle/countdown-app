import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountdownOverviewScreen } from './countdownOverviewScreen';
import { AddCountdownScreen } from './addCountdownScreen';
import { CountdownDetailScreen } from './CountdownDetailScreen';

import Icon from 'react-native-vector-icons/Ionicons';


const CountdownsStack = createNativeStackNavigator();

const CountdownsStackScreen = () => {
  return (
    <CountdownsStack.Navigator
      screenOptions={{headerShown: true}}
    >
      <CountdownsStack.Screen name="CountdownOverview" component={CountdownOverviewScreen} options={{ title:'Countdowns' }} />
      <CountdownsStack.Screen name="AddCountdown" component={AddCountdownScreen} options={{ 
        title:'Add a New Countdown',
        headerRight: () => (
          <Icon name='checkmark' size={30} />
        ) }}
      />
      <CountdownsStack.Screen name="CountdownDetail" component={CountdownDetailScreen} options={{ title: "Insert title here" }} />
    </CountdownsStack.Navigator>
  );
}



export default CountdownsStackScreen;
