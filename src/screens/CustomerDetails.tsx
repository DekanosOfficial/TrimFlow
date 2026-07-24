import { Text } from "react-native";

import { useRoute } from "@react-navigation/native";

import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "../navigation/types";

import { View } from "react-native";

import Screen from "../components/Screen"
import Header from "../components/Header";

type CustomerRouteProp = RouteProp<
  RootStackParamList,
  "CustomerDetails"
>;


export default function CustomerDetails() {
const route = useRoute<CustomerRouteProp>();

const { id, name, phone } = route.params;

  return (
    <Screen>
      <Header
        title={name}
        subtitle="Customer Details"
      />
      
      <Text style={{ color: "white"}}>ID: {id}</Text>
      <Text style={{ color: "white"}}>Phone: {phone}</Text>
      

    </Screen>
    
  );
}