import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator }from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";
import CustomerDetails from "../screens/CustomerDetails";

import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false}}>
                <Stack.Screen
                    name="Home"
                    component={BottomTabs}
                />

                <Stack.Screen
                    name="CustomerDetails"
                    component={CustomerDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}