# EV Public Charging App Prototype

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Overview

The **EV Charging App Prototype** is a mobile application that allows users to find nearby public electric vehicle (EV) charging stations, select one, and start a charging session. This protoype app integrates with the **OpenChargeMap API** to get a list of nearby public charging stations and sends a request to the **ev.energy backend** to simulate starting the charging session.

This prototype focuses on basic functionality and API integration. It lays the foundation for a more sophisticated solution with future features.

### Prerequisites

- Install **Node.js** and **Expo CLI**

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <https://github.com/morgane-arnaud/ev-energy.git>
cd ev-energy
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
 npx expo start
```

This will start the Expo development server and open the Expo client, where you can choose to run the app on an emulator or a physical device.

### 4. Docs

[DEVELOPMENT_NOTES.md](docs/DEVELOPMENT_NOTES.md)

## 5. Mocking API Requests with `axiosInstance`

Since the `ev-example` API endpoint does not exist, I created a reusable `axiosInstance` to mock the response when a user attempts to start a charging session.
For more details, refer to [AxiosInstance for API Calls](docs/DEVELOPMENT_NOTES.md#axiosinstance-for-api-calls).
