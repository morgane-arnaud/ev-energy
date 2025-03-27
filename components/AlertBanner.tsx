import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { IconSymbol } from './ui/IconSymbol';
import globalStyles from '@/styles/global.styles';

interface Props {
  onClose: () => void;
  text: string;
}
export default function AlertBanner({ onClose, text }: Props) {
  return (
    <View style={styles.alertBanner}>
      <Text style={styles.alertText}>{text}</Text>
      <TouchableOpacity onPress={onClose}>
        <IconSymbol size={22} name={'x.circle'} color='white' />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  alertBanner: {
    backgroundColor: '#162A2D',
    padding: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    top: 10,
    gap: 5,
    alignSelf: 'center',
  },
  alertText: {
    ...globalStyles.secondaryText,
    fontWeight: 500,
  },
});
