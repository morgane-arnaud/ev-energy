import axios from 'axios';
import { OPEN_CHARGE_MAP_API_KEY, OPEN_CHARGE_MAP_API_URL } from './config';

//  Fetch charging stations, return the list of charging stations
export const getChargingStations = async (): Promise<any> => {
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
