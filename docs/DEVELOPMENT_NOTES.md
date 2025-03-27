# 📄 Development Notes

This document covers various aspects of the project, including improvements, architecture decisions, and future enhancements.

---

## 📍 1. Current Location & Map Behavior

- The map should center on the user's **current location** when the app loads.
- **Zoom level should adjust dynamically** to focus on the nearest charging stations.

**Current Behavior:**

- The current behavior uses a hardcoded user location.

**Future Enhancements:**

- Implement **real-time location tracking** to update the map to the user's real location. This could either be based on their current location or a default home location.
- Allow users to manually **search for locations** instead of relying only on GPS.

---

## 🔧 2. API Structure & Hardcoded Params

**Current Structure:**

- All API calls are centralized in **one file (`api.ts`)**.

**Recommended Improvements:**

- **Modularize API Logic**: Separate the API logic into distinct services to improve maintainability and readability.
- **Store Types & Interfaces Separately**: Create a dedicated folder for types and interfaces to keep the project organized.
  - The Types I used for the `ChargingStationResponse` were based on the response. These might not be accurate but rather a placeholder.
  - Define **strong TypeScript interfaces** for all API requests and responses to improve type safety.
  - Use these types across the application to ensure that the data conforms to the expected structure and to help with code autocompletion and error checking.
- **Dynamic Values for API Parameters**: Replace hardcoded values (e.g., user ID, car ID) with dynamically fetched ones.
- **Secure Storage of API Keys**: API URLs and keys should not be hardcoded into the app. Instead, they should be stored securely in a `.env` file or via secure storage mechanisms (e.g., environment variables, backend proxy).
  **Support Multiple Environments**: Configure different environments (e.g., development, staging, production) to ensure appropriate configurations are used for each.

---

## ❌ 3. Error Handling

**Current Behavior:**

- Errors are currently logged to the console, but there is no user-friendly error handling in place.

**Improvements Needed:**

- **User-friendly Error Messages**: Instead of raw error logs, provide clear, understandable error messages for users.
- **Retry Mechanisms**: Implement retry logic for handling network issues and timeouts.
- **Loading States**: Show appropriate loading indicators while waiting for API responses.
- **Error Boundary**: Implement error boundaries in the app to catch and handle unexpected errors gracefully.
- **Logging**: Integrate logging services like **Sentry** or **Datadog** for tracking and monitoring errors in production.
- **Toasts**: Integrate toasts or something similar to better inform the user of loading/success/fail attempts.

---

## 🎨 4. Styles & Typography

**Current Implementation:**

- Custom colors are applied, but the overall theme could be improved.
- Typography is not fully standardized.

**Recommended Enhancements:**

- Use a **theme provider** (e.g., for light/dark mode) to adapt styles based on system preferences.
- Standardize **typography** (font sizes, weights, spacing) to maintain a consistent look across the application.
- Consider using a utility-first CSS framework like **Tailwind CSS** for more scalable and maintainable styles.
  - I used Stylesheet here because it came with the template and this was a protoype.
- Create reusable components for elements like buttons to maintain consistency in design and styling.

---

## 🧹 5. Clean-up Unused Components & Colors

**Current Status:**

- Some unused files and styles from the template are still present in the repository.

**Action Items:**

- Perform a **repository clean-up** to remove unused components, styles, and assets that are no longer necessary.
- Review all files to ensure they are properly utilized or remove them if redundant.

---

## ⚙️ 6. axiosInstance for API Calls

### axiosinstance-for-api-calls

**Current Behavior:**

- **axiosInstance** is used to mock API responses for testing.

### Implementation:

1. **Created an `axiosInstance` with a base URL**
2. **Intercepted the POST request to `https://example.ev.energy/chargingsession`**
3. **Returned a simulated success response**

In order to view the real response, replace `axiosInstance.post` with `axios.post`

**Recommended Improvements:**

- Replace the endpoint with a real, working endpoint.

---

## 🚀 7. Future Enhancements

- I added a Profile Tab: This would be a dedicated section where users can manage their profile and preferences (Settings, default charging station preferences, etc).
- I also added a Charge Tab: This could be a central hub for users to manage and monitor their charging sessions.
  - Real-time session status (with the option to pause, resume, or stop the session)
  - Charging history (eg Location, Cost, Duration)
  - Session metrics (eg time taken, energy consumed, and cost per session)
- Notifications: To alert users about charging status changes, session completions, station availability, or app-related notifications
- As mentioned above, the map feature would track a user in real time.
  Further additions could be
  - Location-based recommendations
  - Directions: Allow users to open the selected charging station's address in their preferred map app for easy navigation.
  - Additional station details: Provide more detailed information on each charging station, such as estimated travel time, distance, and even potential wait times based on current availability.
  - While I added how many connections were at the charging station, more information (eg station current availability or waiting time, station maintenance/broken status) could be useful.
- User Authentication & Account Sync
- User Engagement Features, maybe based on a Sustainability Focus
- Responsive/Animated Designs and Features
- Offline Mode

---
