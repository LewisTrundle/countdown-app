import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { styles } from '../styles';


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
      <TouchableOpacity
        onPress={() => {
          setIsTimerStart(!isTimerStart);
          setResetTimer(false);
        }}>
        <Text>
          {!isTimerStart ? 'START' : 'STOP'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIsTimerStart(false);
          setResetTimer(true);
        }}>
        <Text>RESET</Text>
      </TouchableOpacity>
    </View>
  )
}

const stopwatchOptions = {
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 55,
    color: '#F6F7FC',
  },
};

/*
  - if timeOClock is false then display START and disable LAP
    - if click when toC(false) (START is currently displayed) then set toc(true) and tP(false)
  - if toc(true) and set tp(false) then display STOP and display LAP
    - if click when toc(true) and tp(false) (STOP is currently displayed) then keep toc(true) and set tp(true)
  - if toc(true) and tP(true) then display RESUME and display RESET
    - if click when toc(true) and tP(true) (RESUME is currently displayed) then keep toc(true) and set tp(false)
    - if RESET is clicked, then set toc(false) and tp(true)
*/
const StopwatchScreen = ({ navigation }) => {
  const [timeIsOnClock, setTimeIsOnClock] = useState(false);
  const [timePaused, setTimePaused] = useState(true);

  return (
    <SafeAreaView style={styles.stopwatchBgContainer}>
      <View style={styles.stopwatchTimerContainer}>
        <Stopwatch
          laps
          msecs
          start={!timePaused && timeIsOnClock}
          reset={!timeIsOnClock && timePaused}
          options={stopwatchOptions}
          getTime={(time) => {
            //console.log(time);
          }}
        />
      </View>
      <View style={styles.stopwatchButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            if (!timeIsOnClock) {
              setTimeIsOnClock(true);
              setTimePaused(false);
            } else {
              setTimePaused(!timePaused);
            }
          }}
          style={[styles.stopwatchButton, styles.stopwatchLeftButton]}>
          <Text style={styles.stopwatchButtonText}>
            {!timeIsOnClock ? 'START' : !timePaused ? 'STOP' : 'RESUME'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          disabled={!timeIsOnClock}
          onPress={() => {
            if (timePaused) {
              setTimeIsOnClock(false);
            } else {
              // lap the time
            }
          }}
          style={!timeIsOnClock ? [styles.stopwatchButton, styles.stopwatchRightButton, styles.disabledButton] : [styles.stopwatchButton, styles.stopwatchRightButton]}>
          <Text style={styles.stopwatchButtonText}>{timePaused ? 'RESET' : 'LAP'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default StopwatchScreen;