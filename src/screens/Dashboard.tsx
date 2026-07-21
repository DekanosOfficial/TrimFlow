import { Text, View } from "react-native";

import Screen from "../components/Screen"
import Header from "../components/Header";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";


export default function Dashboard() {
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

      <View style={{ flexDirection: "row"}}>
        <StatsCard
        value="12"
        label="Today"
        />
        <StatsCard
          value="3"
          label="Waiting"
        />
      </View>

      <View style={{ flexDirection: "row"}}>
        <StatsCard
        value="R1350"
        label="Revenue"
        />
        <StatsCard
          value="24"
          label="Clients"
        />
      </View>
      
    </Screen>
    
  );
}