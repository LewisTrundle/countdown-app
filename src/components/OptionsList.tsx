import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import styles from '../styles/styles';

type OptionsListProps = {
  onSelect: any,
  onModalClose: any
  optionData: any,
};


export const OptionsList = (props: OptionsListProps) => {
  return (
    <FlatList
      data={props.optionData}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity onPress={() => {
            props.onSelect(item);
            props.onModalClose();
          }}>
            <View style={styles.modalListButtons}>
              <Text style={styles.modalListButtonsText} key={index}>{item}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  )
}