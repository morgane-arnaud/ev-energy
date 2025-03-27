import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  Pressable,
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
import BottomSheetModal from '@/components/BottomSheetModal';
import { getChargingStations } from '@/services/api/api';
import { IconSymbol } from '@/components/ui/IconSymbol';
import AlertBanner from '@/components/AlertBanner';

const HomeScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [isInfoBannerVisible, setIsInfoBannerVisible] = useState(false);
  const [chargingStations, setChargingStations] = useState<any[]>([]); //TODO: Types
  const [selectedChargerDetails, setSelectedChargerDetails] = useState<{
    address: string;
    numberOfConnections: number;
  } | null>(null);

  const initialRegion = {
    latitude: USER_CURRENT_LATITUDE,
    latitudeDelta: DEFAULT_LATITUDE_DELTA,
    longitude: USER_CURRENT_LONGITUDE,
    longitudeDelta: DEFAULT_LONGITUDE_DELTA,
  };

  const fetchChargingStations = async () => {
    setIsLoading(true);
    const stations = await getChargingStations();
    setChargingStations(stations);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchChargingStations();
  }, []);

  const startCharging = () => {
    // TODO: BE Call
    setIsBottomSheetVisible(false);
    // TODO: what next ? router.push('..') ?
  };

  const handleSelectCharger = (chargerDetails: any) => {
    const { AddressLine1, Town, StateOrProvince, Postcode } =
      chargerDetails?.AddressInfo ?? {};

    setSelectedChargerDetails({
      address: `${AddressLine1}, ${Town}, ${StateOrProvince} ${Postcode}`,
      numberOfConnections: chargerDetails?.Connections?.length,
    });
    setIsBottomSheetVisible(true);
  };

  if (isLoading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator />
      </View>
    );
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
          headerRight: () => (
            <Pressable
              onPress={() => setIsInfoBannerVisible(!isInfoBannerVisible)}
            >
              <IconSymbol
                size={20}
                name='info.circle'
                color='white'
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
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
          {chargingStations?.map((charger) => {
            return (
              <Marker
                key={charger.ID}
                coordinate={{
                  latitude: charger.AddressInfo.Latitude,
                  longitude: charger.AddressInfo.Longitude,
                }}
                onPress={() => handleSelectCharger(charger)}
              >
                <View style={styles.marker}>
                  <Text style={styles.markerText}>
                    {charger.Connections.length}
                  </Text>
                </View>
              </Marker>
            );
          })}
        </MapView>
      </View>
      {isInfoBannerVisible && (
        <AlertBanner
          onClose={() => setIsInfoBannerVisible(false)}
          text='Each circle shows the number of available charging stations. Tap on one to view more details! '
        />
      )}
      <BottomSheetModal
        isVisible={isBottomSheetVisible}
        title='Address'
        text={selectedChargerDetails?.address ?? ''}
        textLine2={`${selectedChargerDetails?.numberOfConnections} Charging ${
          selectedChargerDetails?.numberOfConnections === 1
            ? 'Station'
            : 'Stations'
        }`}
        onContinue={startCharging}
        onClose={() => setIsBottomSheetVisible(false)}
        buttonText='Start Charging'
      />
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
  marker: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerText: {
    ...globalStyles.buttonText,
    fontSize: 14,
  },
});
