import { Pressable, Text, View, TextInput, StyleSheet } from "react-native";

import { useRoute } from "@react-navigation/native";

import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "../navigation/types";

import { useNavigation } from "@react-navigation/native";

import { NativeStackHeaderProps, NativeStackNavigationProp } from "@react-navigation/native-stack";

import Screen from "../components/Screen"
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import BookingHistory from "../components/BookingHistory";
import AppModal from "../components/AppModal";
import StatsCard from "../components/StatsCard";

import { useState } from "react";

import { Colors, Spacing } from "../theme";

import { deleteCustomer } from "../database/customerQueries";

import BackButton from "../components/BackButton";

type CustomerRouteProp = RouteProp<
  RootStackParamList,
  "CustomerDetails"
>;

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;




export default function CustomerDetails() {
const route = useRoute<CustomerRouteProp>();

const { id, name, phone } = route.params;

const [editModalVisible, setEditModalVisible] = useState(false);
const [deletemodalVisible, setDeletemodalVisible] = useState(false);

const [editedName, setEditedName] = useState(name);

const [editedPhone, setEditedPhone] = useState(phone)

const navigation = useNavigation<NavigationProp>();


  return (
    <Screen>
      <BackButton />

      <Header 
        title="Customer Details"
      />
      

      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>

      <View style={styles.stats}>
        <StatsCard
          value="21"
          label="Visits"
        />
        <StatsCard
          value="21 July"
          label="Last Visit"
        />
      </View>

      <BookingHistory   
        service="Low Taper"
        datetime="21 Jul - 10:30"
      />

      <View style={styles.actions}>
          <View style={styles.button}>
            <PrimaryButton
              title="Edit"
              onPress={() => setEditModalVisible(true)}
            />
          </View>
          <View style={styles.button}>
            <PrimaryButton
              title=" Delete"
              onPress={() => setDeletemodalVisible(true)}
            />
          </View>
      </View>

      <AppModal
      testID="editCustomer"
        visible={editModalVisible}
        title="Edit Customer"
        onClose={() => setEditModalVisible(false)}
      >
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#888"
          value={editedName}
          onChangeText={setEditedName}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#888"
          value={editedPhone}
          onChangeText={setEditedPhone}
        />

        <View style={styles.actions}>
          <View style={styles.button}>
            <PrimaryButton
              title="Save"
              onPress={() => {
              console.log(editedName, editedPhone);
              setEditModalVisible(false);
              }}
              />
          </View>
          <View style={styles.button}>
            <PrimaryButton
              title="Cancel"
              onPress={() => {
                  
              setEditModalVisible(false);
              }}
            />            
          </View>
        </View>
      </AppModal>

      <AppModal
        testID="deleteCustomer"
        visible={deletemodalVisible}
        title="Delete Customer"
        onClose={() => setDeletemodalVisible(false)}>
        
        
        <View style={styles.actions}>
          <View style={styles.button}>
            <PrimaryButton
              title="Delete"
              onPress={() => {
                deleteCustomer(id);
                navigation.goBack();
              }}
            />
          </View>
          <View style={styles.button}>
            <PrimaryButton
              title="Cancel"
              onPress={() => {

                
              setDeletemodalVisible(false);
              }}
            />
          </View>

        </View>

      </AppModal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  profile: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 20,
    marginBottom: 10
  },

  name:{
    color: Colors.text,
    fontSize:20,
    padding: Spacing.sm
  },

  phone: {
    color: Colors.text,
    fontSize: 20,
    padding: Spacing.sm
  },

  stats: {
    flexDirection: "row",
    marginTop: 14
  },
  
  input:{
    backgroundColor:"#2A2A2A",
    color: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom:12
  },

  actions: {
    flexDirection: "row",
    gap: Spacing.sm,
  },

  button: {
    flex: 1
  },
  
})