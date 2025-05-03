1- "cd algecom-front"

2- "npm install"

3- If you encounter some errors concerning "lucide-react", run this command: "npm install --save-dev @types/lucide-react"

4- Now to run the project as a user (since some features won't work in dev mode) "npm run build" or "npm run start"


!- Concerning the dashboard sidebar disabling when the user doesn't have a store:
    ° When a user creates a store, call setHasStore(true)
    ° The sidebar will automatically update to show content
    ° Store state persists across sessions using Zustand
    ° Development mode bypasses the store check