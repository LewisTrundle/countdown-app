import { View, TouchableOpacity, Image, Modal, FlatList, Pressable, Text } from 'react-native';
import { useState, useEffect } from "react";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../styles/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { IconWithText } from '../../components/IconWithText';
import { Countdown } from '../../classes/Countdown';
import { addCountdown } from '../../helpers/storageAccess';

import { RepeatOptions } from '../../enums/RepeatOptions';
import { NotificationOptions } from '../../enums/NotificationOptions';

import { OptionsModal } from '../../components/OptionsModal';
import { OptionsList } from '../../components/OptionsList';



export function AddCountdownScreen({ navigation }) {
  const [dateTimeModalIsOpen, setDateTimeModalIsOpen] = useState(false);
  const [repeatModalIsOpen, setRepeatModalIsOpen] = useState(false);
  const [notificationModalIsOpen, setNotificationModalIsOpen] = useState(false);
  const [mode, setMode] = useState(null);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [desc, setDesc] = useState('');
  const [doesRepeat, setDoesRepeat] = useState(RepeatOptions.OneTime);
  const [notification, setNotification] = useState(NotificationOptions.NoNotification)


  const storeCountdown = async (navigation): Promise<void> => {
    const countdown = new Countdown(title, date, doesRepeat, notification, desc);
    console.log("Just about to add ", countdown)
    await addCountdown(countdown);
    console.log("Just added ", countdown)
    navigation.navigate("CountdownOverview", {addedCountdown: true});
  }

  const toggleModal = (hook, setHook) => {
    setHook(!hook);
  };

  const openDateTimeModal = (mode): void => {
    setMode(mode);
    toggleModal(dateTimeModalIsOpen, setDateTimeModalIsOpen);
  };

  // only defines the checkmark after the page has rendered to avoid rendering issues.
  // need to redefine checkmark function after each update to countdown property
  useEffect((): void => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => storeCountdown(navigation)} >
          <Icon name='checkmark' size={30} />
        </TouchableOpacity>
      )
    });
  }, [title, desc, date, doesRepeat, notification]);
  

  return (
    <View style={styles.bgContainer}>
      {dateTimeModalIsOpen && (
        <DateTimePicker
          value={date}
          mode={mode}
          onChange={(_event, selectedDate): void => {
            toggleModal(dateTimeModalIsOpen, setDateTimeModalIsOpen);
            setDate(selectedDate);
          }}
        />
      )}
      
      <OptionsModal
        title="Select a Repeat Option"
        onClose={() => toggleModal(repeatModalIsOpen, setRepeatModalIsOpen)}
        isVisible={repeatModalIsOpen}>
          <OptionsList optionData={Object.values(RepeatOptions)} onSelect={setDoesRepeat} onModalClose={() => toggleModal(repeatModalIsOpen, setRepeatModalIsOpen)}/>
      </OptionsModal>

      <OptionsModal
        title="Select a Notification Option"
        onClose={() => toggleModal(notificationModalIsOpen, setNotificationModalIsOpen)}
        isVisible={notificationModalIsOpen}>
          <OptionsList optionData={Object.values(NotificationOptions)} onSelect={setNotification} onModalClose={() => toggleModal(notificationModalIsOpen, setNotificationModalIsOpen)}/>
      </OptionsModal>


      <View style={[styles.inputContainer, styles.titleIconContainer]}>
        <View style={[ styles.titleInputContainer]}>
          <Input
            placeholder='Enter title...'
            onChangeText={(text) => {setTitle(text)}}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.fullSize} source={require('../../assets/robot.png')} />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder='Enter description...'
          onChangeText={(text) => setDesc(text)}
        />
      </View>
      
      <View style={styles.buttonRow}>
        <IconWithText
          onPress={() => openDateTimeModal("date")}
          iconName={"calendar"} 
          iconSize={50}
          text={date.toLocaleDateString('en-GB')}
        />
        <IconWithText
          onPress={() => openDateTimeModal("time")}
          iconName={"time"} 
          iconSize={50}
          text={date.toLocaleTimeString('en-GB')}
        />
      </View>
      <View style={styles.buttonRow}>
        <IconWithText
          onPress={()=> toggleModal(repeatModalIsOpen, setRepeatModalIsOpen)}
          iconName={"repeat"} 
          iconSize={50}
          text={doesRepeat}
        />
        <IconWithText
          onPress={() => toggleModal(notificationModalIsOpen, setNotificationModalIsOpen)}
          iconName={"notifications"} 
          iconSize={50}
          text={notification}
        />
      </View>
    </View>
  );
}