import { Text } from "react-native";

import Screen from "../components/Screen"
import Header from "../components/Header";
import Card from "../components/Card";

export default function App() {
  return (
    <Screen>
      <Header
      title="Good Morning!"
      subtitle="Tuesday, 21 July"
      />

      <Card>
        <Text style={{ color: "white"}}>
          Next Appointment
          </Text>
      </Card>
    </Screen>
    
  );
}