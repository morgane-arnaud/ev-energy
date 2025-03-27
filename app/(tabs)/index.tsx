import globalStyles from '@/styles/global.styles';
import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.heading}>Map View</Text>
      <Text style={globalStyles.primaryText}>
        This is where the mapview of surrounding charging session would be.
      </Text>
    </View>
  );
};

export default HomeScreen;
