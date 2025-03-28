# Future Enhancements

This document outlines potential future features that could be implemented. The goal of the future enhancments would be improving user experience, expanding functionality, and optimizing performance/scalability.

---

## 1. Current Location & Map Behavior

- The map should center on the user's **current location** when the app loads.
- **Zoom level should adjust dynamically** to focus on the nearest charging stations.

**Current Behavior:**

- The current behavior uses a hardcoded user location.
- When a charging session is started, a simple alert is used to show whether the request was a success or fail.

**Future Enhancements:**

- Implement **real-time location tracking** to update the map to the user's real location. This could either be based on their current location or a default home location.
- Allow users to manually **search for locations** instead of relying only on GPS.
- **Directions**: Allow users to open the selected charging station's address in their preferred map app for **easy navigation**.
- Additional station details: Provide more **detailed information** on each charging station, such as estimated travel time, distance, and even potential wait times based on current availability.
- When a charging session is started, replace the simple alert with a more **user-friendly notification**, and navigate to Charge Tab to see more details about the session/be able to pause or stop it.

Further additions could be

- **Location-based** recommendations
- While I added how many **connections** were at the charging station, more **information** (eg station current availability or waiting time, station maintenance/broken status) could be useful.

---

## 2. Profile/Charge Tabs

- I added a Profile Tab

  - This would be a dedicated section where users can manage their profile and preferences (Settings, default charging station preferences, etc).

- I also added a Charge Tab
  - This could be a central hub for users to manage and monitor their charging sessions.
    - Real-time session status (with the option to pause, resume, or stop the session)
    - Charging history (eg Location, Cost, Duration)
    - Session metrics (eg time taken, energy consumed, and cost per session)

---

## 3. Notifications

To alert users about charging status changes, session completions, station availability, or app-related notifications

---

## 4. Other

- User Engagement Features (maybe based on a Sustainability Focus)
- Responsive/Animated Designs and Features
- Offline Mode - to allow the user to use some of the functionality without needing an internet connection
- User Authentication & Account Sync

---
