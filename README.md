# React + Vite

🚀 Project Title
    - Setting-Panel

🛠️ Technologies Used
    - React
    - Redux
    - Redux Persist
    - React Router DOM
    - React Toastify
    - React Icons
    - React i18next
    - TailwindCSS

📄 Project Description

    Setting-Panel is a modern React-based Single Page Application (SPA) that allows users to customize the application’s appearance and language preferences based on their needs. The app supports theme toggling, language switching, and features a complete cart flow along with a customizable notification system.

🔄 App Workflow

    On first visit, the app auto-detects the user's system theme and sets the app theme accordingly.
    The default language is English, but users can switch to German at any time via the settings.
    
    A Products page displays a list of static products. 
    Users can:

        - Add items to the cart
        - Remove items from the cart (either via the cart or directly on the products page)

    Authentication Flow:

        - If the user is not signed in, a Sign In button appears on the app bar.
        - Upon signing in, the user's information is displayed.
        - Users can update their profile, including changing their name.

    Notifications:

        - Users receive notifications when interacting with the cart or updating their profile.
        - Notifications can be enabled or disabled from the Profile Page.
        - When notifications are disabled, users won’t receive any further alerts.

🧠 Core Concepts

    To maintain state consistency across page reloads, the app uses Redux Persist to store and rehydrate Redux state. 
    
    The following user preferences and data are persisted:

        - Theme Mode (Light/Dark)
        - Language Preference
        - Notification Settings
        - Cart Items
        - User Information

## 🚀 App Setup & Run

1. Install dependencies:

   ```bash
   npm install

2. Run App:

    npm run dev