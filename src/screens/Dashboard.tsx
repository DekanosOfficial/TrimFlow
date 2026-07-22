import { Text, View, StyleSheet } from "react-native";

import Screen from "../components/Screen"
import Header from "../components/Header";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";
import AppointmentCard from "../components/AppointmentCard";
import { Colors } from "../theme";


export default function Dashboard() {
  return (
    <Screen>
      <Header
      title="Good Morning!"
      subtitle="Tuesday, 21 July"
      />

      <AppointmentCard
    
        time="10:30 AM"
        customer="Dean Davids"
        service="Low Taper"
        duration="45 mins"
        />

      <View style={styles.row}>
        <StatsCard
        value="12"
        label="Today"
        />
        <StatsCard
          value="3"
          label="Waiting"
        />
      </View>

      <View style={styles.row}>
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

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  }
})