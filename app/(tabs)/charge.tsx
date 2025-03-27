import globalStyles from '@/styles/global.styles';
import React from 'react';
import { View, Text } from 'react-native';

const EmptyChargeDetailsScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Charging Details</Text>
      <Text style={globalStyles.primaryText}>
        This is where details about your charging session would be, such as your
        charging history or current status.
      </Text>
    </View>
  );
};

export default EmptyChargeDetailsScreen;
