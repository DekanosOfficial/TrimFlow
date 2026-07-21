import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../screens/Dashboard";
import Calendar from "../screens/Calender";
import NewBooking from "../screens/NewBooking";
import Customers from "../screens/Customers";
import Settings from "../screens/Settings";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
        >
            <Tab.Screen 
            name="Dashboard" 
            component={Dashboard}
            />
        
            <Tab.Screen 
            name="Calender" 
            component={Calendar}
            />

            <Tab.Screen 
            name="Booking" 
            component={NewBooking}
            />
            
            <Tab.Screen 
            name="Customers" 
            component={Customers}
            />

            <Tab.Screen 
            name="Settings" 
            component={Settings}
            />
        </Tab.Navigator>
    );
}