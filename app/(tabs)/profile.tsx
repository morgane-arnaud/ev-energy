import globalStyles from '@/styles/global.styles';
import React from 'react';
import { View, Text } from 'react-native';

const EmptyProfileScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Profile Details</Text>
      <Text style={globalStyles.primaryText}>
        This is where your profile information would be displayed and settings
        would be available.
      </Text>
    </View>
  );
};

export default EmptyProfileScreen;
