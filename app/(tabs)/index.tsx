import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/Colors';
import {
  USER_CURRENT_LATITUDE,
  DEFAULT_LATITUDE_DELTA,
  USER_CURRENT_LONGITUDE,
  DEFAULT_LONGITUDE_DELTA,
} from '@/constants/Map.constants';
import globalStyles from '@/styles/global.styles';

const HomeScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialRegion = {
    latitude: USER_CURRENT_LATITUDE,
    latitudeDelta: DEFAULT_LATITUDE_DELTA,
    longitude: USER_CURRENT_LONGITUDE,
    longitudeDelta: DEFAULT_LONGITUDE_DELTA,
  };

  if (isLoading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator />
      </View>
    );
    return;
  }
  return (
    <SafeAreaView style={globalStyles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => (
            <Text style={globalStyles.headerTitle}>
              Find a charging station nearby
            </Text>
          ),
          headerStyle: { backgroundColor: Colors.background },
        }}
      />
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          loadingEnabled={isLoading}
          rotateEnabled={false}
        >
          <Marker
            key='userCurrentLocation'
            coordinate={{
              latitude: USER_CURRENT_LATITUDE,
              longitude: USER_CURRENT_LONGITUDE,
            }}
            pinColor={Colors.tertiary}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
});
