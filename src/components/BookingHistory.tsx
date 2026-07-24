import { Text, StyleSheet } from "react-native";
import { Colors } from "../theme";
import Card from "./Card";

interface BookingHistoryProps{
    service: string;
    datetime: string;
}

export default function BookingHistory({service, datetime}:BookingHistoryProps) {
    return(
        <Card>
            <Text style={styles.heading}>Appointments</Text>
            <Text style={styles.service}>• {service}</Text>
            <Text style={styles.datetime}>• {datetime} </Text>
        </Card>


    )
}

const styles= StyleSheet.create({

    heading: {
        color: Colors.text,
        fontSize: 20,
        marginBottom: 16
    },

    service: {
        color: Colors.textSecondary,
        fontSize:16,
        
    },

    datetime: {
        color: Colors.textSecondary,
        fontSize: 14,
    },
})
