
import {Text, StyleSheet } from "react-native";
import { Colors } from "../theme";
import Card from "./Card";

interface AppointmentCardProps {
    // children: ReactNode;
    customer: string;
    service: string;
    time: string;
    duration: string;
}

export default function AppointmentCard({customer, service, time, duration}:AppointmentCardProps) {
    return (
        <Card>
          <Text style={styles.heading}>Next Appointment</Text>
          <Text style={styles.customer}>{customer}</Text>
          <Text style={styles.service}>{service}</Text>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.duration}>{duration}</Text>


        </Card>
    )
}

const styles = StyleSheet.create({

    heading: {
        color: Colors.textSecondary,
        fontSize: 14,
        marginBottom: 16
    },

    customer: {
        color: Colors.text,
        fontSize: 22,
        fontWeight: "600",
        marginTop: 12
    },

    service: {
        color: Colors.textSecondary,
        fontSize: 16,
        marginTop: 4
    },

    time: {
        color: Colors.text,
        fontSize: 24,
        fontWeight: "700",
    },

    duration: {
        color: Colors.textSecondary,
        fontSize: 14,
        marginTop: 12
    }
})