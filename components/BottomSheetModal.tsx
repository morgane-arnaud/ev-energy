import React from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import { IconSymbol } from './ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import globalStyles from '@/styles/global.styles';

interface BottomSheetModalProps {
  isVisible: boolean;
  onClose: () => void;
  onContinue: () => void;
  title: string;
  text: string;
  textLine2?: string; // Optional secondary text
  buttonText: string;
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  isVisible,
  onClose,
  onContinue,
  title,
  text,
  textLine2,
  buttonText,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.bottomSheet}
    >
      <View style={styles.bottomSheetContent}>
        <View style={styles.headerContainer}>
          <Text style={globalStyles.subHeading}>{title}</Text>
          <Pressable onPress={onClose}>
            <IconSymbol size={24} name='x.circle' color='white' />
          </Pressable>
        </View>

        <View style={styles.addressContainer}>
          <Text style={globalStyles.secondaryText}>{text}</Text>
          {textLine2 && (
            <Text style={globalStyles.secondaryText}>{textLine2}</Text>
          )}
        </View>

        <TouchableOpacity onPress={onContinue} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheetContent: {
    backgroundColor: Colors.background,
    padding: 35,
    paddingTop: 25,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  addressContainer: {
    marginBottom: 20,
    color: 'white',
    gap: 10,
  },
});

export default BottomSheetModal;
