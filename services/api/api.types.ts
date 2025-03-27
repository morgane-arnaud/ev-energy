export interface StartChargingResponse {
  success: boolean;
  message: string;
}

interface AddressInfo {
  AddressLine1: string;
  CountryID: number;
  DistanceUnit: number;
  ID: number;
  Latitude: number;
  Longitude: number;
  Postcode: string;
  StateOrProvince: string;
  Title: string;
  Town: string;
}

interface Connection {
  ConnectionTypeID: number;
  CurrentTypeID: number;
  ID: number;
  LevelID: number;
  PowerKW: number;
  Quantity: number;
  StatusTypeID: number;
}

export interface ChargingStationResponse {
  AddressInfo: AddressInfo;
  Connections: Connection[];
  DataProviderID: number;
  DataQualityLevel: number;
  DateCreated: string;
  DateLastStatusUpdate: string;
  DateLastVerified: string;
  ID: number;
  IsRecentlyVerified: boolean;
  NumberOfPoints: number;
  OperatorID: number;
  StatusTypeID: number;
  SubmissionStatusTypeID: number;
  UUID: string;
  UsageTypeID: number;
}
