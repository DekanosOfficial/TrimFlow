import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppNavigator from "./src/navigation/AppNavigator";
import { initializeDatabase } from "./src/database/schema";


export default function App() {
  useEffect(() => {
    initializeDatabase();
  }, []);
  
  return (
    <SafeAreaProvider>    
      <AppNavigator/>
    </SafeAreaProvider>

  );
}