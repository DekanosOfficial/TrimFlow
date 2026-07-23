import { Colors } from "../theme";


import Screen from "../components/Screen"
import Header from "../components/Header";
import CustomerCard from "../components/CustomerCard";
import SearchBar from "../components/SearchBar";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { 
  Text, 
  View, 
  Modal, 
  TextInput, 
  StyleSheet 
} from "react-native";




export default function Customers() {
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("")
  return (

    <Screen>
      <Header
            title="Customers"
            subtitle="Manage your clients"
            />

      <SearchBar placeholder="Search Customer..."/>
      <PrimaryButton
      title="Add Customer"
      onPress={() => setModalVisible(true)}
      /> 

      <CustomerCard 
        name="Dean Davids"
        phone="000 000 0000"  
      />
      <CustomerCard 
        name="Benji Blue Bills"
        phone="000 000 0001"/>
      <CustomerCard 
        name="Dylan Davids"
        phone="000 000 0002"
      />

      <Modal 
        visible={modalVisible}
        transparent={true}
        animationType="slide">
          <View style={styles.modalBackground}>
            <View style={styles.modalCard}>
              <Text style={styles.title}>
                Add Customer
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Name"
                placeholderTextColor="#888"
                value={name}
                onChangeText={setName}

              />

              <TextInput
                style={styles.input}
                placeholder="Phone"
                placeholderTextColor="#888"
                value={phone}
                onChangeText={setPhone}
              />

              <PrimaryButton
                title="Save"
                onPress={() => {
                  console.log(name, phone);

                  setModalVisible(false);

                  setName("")
                  setPhone("")
                }}
              />

              <PrimaryButton
                title="Cancel"
                onPress={() => {
                  
                  setModalVisible(false);
                  setName("");
                  setPhone("");
                }}
              />

            </View>
          </View>

      </Modal>


    </Screen>
    
  );
}



const styles = StyleSheet.create({
  input:{
    backgroundColor:"#2A2A2A",
    color: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom:12
  },
  modalBackground: {
    flex: 1,
    backgroundColor:"rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center"
  },

  modalCard: {
    width: "90%",
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 16
  },

  title: {
    color: Colors.text,
    fontSize: 22, 
    fontWeight: "700",
    marginBottom: 20,
  }

})
