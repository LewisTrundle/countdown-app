import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import styles, { stopwatchOptions } from '../styles/styles';

const StopwatchTimer = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  return (
    <View>
      <Stopwatch
        laps
        msecs
        start={isStopwatchStart}
        reset={resetStopwatch}
        options={stopwatchOptions}
        getTime={(time) => {
          console.log(time);
        }}
      />
      <View style={styles.stopwatchButtonContainer}>
        <TouchableHighlight
          onPress={() => {
            setIsStopwatchStart(!isStopwatchStart);
            setResetStopwatch(false);
          }}>
          <Text style={styles.buttonText}>
            {!isStopwatchStart ? 'START' : 'STOP'}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setIsStopwatchStart(false);
            setResetStopwatch(true);
          }}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}


const CountdownTimer = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  return (
    <View style={styles.bgContainer}>
      <Timer
        totalDuration={timerDuration}
        msecs
        start={isTimerStart}
        reset={resetTimer}
        options={stopwatchOptions}
        handleFinish={() => {
          alert('Custom Completion Function');
        }}
        getTime={(time) => {
          console.log(time);
        }}
      />
      <TouchableHighlight
        onPress={() => {
          setIsTimerStart(!isTimerStart);
          setResetTimer(false);
        }}>
        <Text style={styles.buttonText}>
          {!isTimerStart ? 'START' : 'STOP'}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          setIsTimerStart(false);
          setResetTimer(true);
        }}>
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableHighlight>
    </View>
  )
}


const StopwatchScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.bgContainer}>
      <View style={styles.bgContainer}>
        <StopwatchTimer />
      </View>
    </SafeAreaView>
  );
};


export default StopwatchScreen;