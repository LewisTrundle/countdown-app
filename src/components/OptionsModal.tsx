import { View, Modal, Pressable, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles }  from '../styles';

type OptionsModalProps = {
  title?: string
  onClose: any
  isVisible: boolean
  children: any
};

export const OptionsModal = (props: OptionsModalProps) => {
  return (
    <Modal visible={props.isVisible} animationType='fade' onRequestClose={props.onClose} transparent >
      <View style={styles.modelContainer}>
        <View style={styles.modelContent}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>{props.title}</Text>
            <Pressable onPress={props.onClose}>
              <MaterialIcons name="close" color="#fff" size={25} />
            </Pressable>
          </View>
          <View style={styles.modalBodyContainer}>
            {props.children}
          </View>
          <View style={styles.modalFooterContainer}>

          </View>
        </View>
      </View>
    </Modal>
  )
};