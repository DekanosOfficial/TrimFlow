import { useEffect, useState } from "react";
import { Customer, getCustomers } from "../database/customerQueries";

import { Text, StyleSheet } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import Screen from "../components/Screen";
import Header from "../components/Header";
import CustomerCard from "../components/CustomerCard";
import Card from "../components/Card";
import { Colors } from "../theme";
import AppModal from "../components/AppModal";
import PrimaryButton from "../components/PrimaryButton";

export default function NewBooking() {

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  // Controls whether the customer selector is visible
  const [customerModalVisible, setCustomerModalVisible] = useState(false);

  const services = [
    "Low Taper",
    "High Taper",
    "Fade", 
    "Buzz Cut"
  ];
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);


  useEffect(() => {
    // Load customers from SQLite when the screen opens.
    setCustomers(getCustomers());
  }, []);

  return (
    <Screen>
      <Header
        title="New Booking"
        subtitle="Create an appointment"
      />

      {/* Customer Selection */}
      <Card>
        <Text style={styles.sectionTitle}>
          Customers
        </Text>

        {selectedCustomer ? (
          <CustomerCard
            name={selectedCustomer.name}
            phone={selectedCustomer.phone}
            onPress={() => {
              // Open customer selector so the customer can be changed
              setCustomerModalVisible(true);
            }}
          />
        ) : (
          <>
            <Text style={styles.placeholder}>
              No customer selected
            </Text>

            <PrimaryButton
              title="Select Customer"
              onPress={() => {
                // Open customer selector
                setCustomerModalVisible(true);
              }}
            />
          </>
        )}
      </Card>


      {/* Services */}
      <Text style={styles.sectionTitle}>
        Services
      </Text>

      {services.map((service) => (
        <Text
          key={service}
          onPress={() => {
            // Store the service the barber selected
            setSelectedService(service);
          }}
          style={{ color: "white", marginTop: 20}}
        >
          {service}
        </Text>
      ))}


      {/* Date selection */}
      <Text style={styles.sectionTitle}>
        Date
      </Text>

      <Text
        onPress={() => {
          // Open Date selection
          setShowDatePicker(true);
        }}
        style={styles.option}
      >
        {selectedDate
        ? selectedDate.toLocaleDateString()
      : "Select Date"}
      </Text>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          onValueChange={(event, date) => {
            // Close the picker after selcting date
            setShowDatePicker(false);

            // Save selected date
            if (date) {
              setSelectedDate(date);
            }
          }}
        />
      )}


      {/* Time selection */}
      <Text style={styles.sectionTitle}>
        Time
      </Text>

      <Text 
        onPress={() => {
          // Temporary time selection.
          setSelectedTime("10:30");
        }}
        style={styles.option}
      >
        {selectedTime || "Select time"}
      </Text>
  
      {/* Customer Selector */}
      <AppModal
        visible={customerModalVisible}
        title="Select Customer"
        onClose={() => setCustomerModalVisible(false)}
      >
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            name={customer.name}
            phone={customer.phone}
            onPress={() => {
              // Store customer that was selected
              setSelectedCustomer(customer);

              // Close the customer selector
              setCustomerModalVisible(false);
            }}
          />
        ))}
      </AppModal>

    </Screen>
    
  );
}


const styles = StyleSheet.create({
  sectionTitle: {
    color:  Colors.text,
    fontSize: 18,
    fontWeight: "700",
    marginBottom:12,
  },
  placeholder: {
    color: Colors.textSecondary,
    fontSize: 15
  },
  option: {
    color: Colors.text,
    fontSize: 16,
    marginBottom: 12,

  }
});