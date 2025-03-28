# Development Notes

This document covers various aspects of the code base that should be improved in the future.

---

## 1. Current Location & Map Behavior

- The map should center on the user's **current location** when the app loads.
- The current behavior uses a hardcoded user location. (Shown by the orange pin). In the real world this location would not be hardcoded.

---

## 2. API Structure & Hardcoded Params

**Current Structure:**

- All API calls are centralized in **one file (`api.ts`)**.

**Recommended Improvements:**

- **Modularize API Logic**: Separate the API logic into distinct services to improve maintainability and readability.
- **Store Types & Interfaces Separately**: Create a dedicated folder for types and interfaces to keep the project organized.
  - The Types I used for the `ChargingStationResponse` were based on the response. These might not be accurate but rather a placeholder.
  - Define **strong TypeScript interfaces** for all API requests and responses to improve type safety.
  - Use these types across the application to ensure that the data conforms to the expected structure and to prevent errors.
- **Dynamic Values for API Parameters**: Replace hardcoded values (e.g., user ID, car ID) with dynamically fetched ones.
- **Secure Storage of API Keys**: API URLs and keys should not be hardcoded into the app. Instead, they should be stored securely in a `.env` file or via secure storage mechanisms (e.g., environment variables, backend proxy).
- **Support Multiple Environments**: Configure different environments (e.g., development, staging, production) to ensure appropriate configurations are used for each.

---

## 3. Error Handling

**Current Behavior:**

- Errors are currently logged to the console, but there is no user-friendly error handling in place.

**Improvements Needed:**

- **User-friendly Error Messages**: Instead of raw error logs, provide clear, understandable error messages for users.
- **Retry Mechanisms**: Implement retry logic for handling network issues and timeouts.
- **Loading States**: Show appropriate loading indicators while waiting for API responses.
- **Error Boundary**: Implement error boundaries in the app to catch and handle unexpected errors gracefully.
- **Logging**: Integrate logging services like **Sentry** or **Datadog** for tracking and monitoring errors in production.
- **Toasts**: Integrate toasts or something similar to better inform the user of loading/success/fail attempts.
- **Testing**: No testing was implemented on this prototype, these should be added to prevent regressions and improve code quality.

---

## 4. Styles & Typography

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

## 5. Clean-up Unused Components & Colors

**Current Status:**

- Some unused files and styles from the template are still present in the repository.

**Action Items:**

- Do a **repository clean-up** to remove unused components, styles, and assets that are no longer necessary.
- Review all files to ensure they are properly used or remove redundant files.

---

## 6. Axios for API Calls

For this prototype, Axios was used to handle API requests due to its simplicity and ease of integration.

### axiosinstance-for-api-calls

**Current Behavior:**

- **axiosInstance** is used to mock API responses for testing.

### Implementation:

1. **Created an `axiosInstance` with a base URL**
2. **Intercepted the POST request to `https://example.ev.energy/chargingsession`**
3. **Returned a simulated success response**

In order to view the real response, replace `axiosInstance.post` with `axios.post`

**Recommended Improvements:**

- Replace the endpoint with a real, working endpoint. (And remove the instance, `axios.config.ts` once its unused)

---
