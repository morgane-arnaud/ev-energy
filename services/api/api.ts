import axios from 'axios';
import {
  EV_ENERGY_API_URL,
  OPEN_CHARGE_MAP_API_KEY,
  OPEN_CHARGE_MAP_API_URL,
} from './config';
import { ChargingStationResponse, StartChargingResponse } from './api.types';
import axiosInstance from './axios.config';

//  Fetch charging stations, return the list of charging stations
export const getChargingStations = async (): Promise<
  ChargingStationResponse[]
> => {
  try {
    const response = await axios.get(OPEN_CHARGE_MAP_API_URL, {
      params: {
        output: 'json',
        countrycode: 'US',
        key: OPEN_CHARGE_MAP_API_KEY,
        compact: true, // Use compact output (omit unnecessary data)
        verbose: false, // Set to false to reduce response size
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching charging stations:', error);
    throw new Error('Failed to fetch charging stations.');
  }
};

// Start a charging session for a given charger ID.
export const startChargingSession = async (
  chargerId?: number
): Promise<StartChargingResponse> => {
  if (chargerId === undefined) {
    return { success: false, message: 'Please select a charging station.' };
  }

  try {
    const { data } = await axiosInstance.post(EV_ENERGY_API_URL, {
      //   using axiosInstance to mock a success response, use axios instead for actual response
      user: 1, // Hardcoded user ID for prototype
      car_id: 1, // Hardcoded car ID for prototype
      charger_id: chargerId,
    });

    return data;
  } catch (error: any) {
    console.log(
      'Error starting charging session:',
      error?.response?.data || error
    );
    return { success: false, message: 'Failed to start charging session.' };
  }
};
