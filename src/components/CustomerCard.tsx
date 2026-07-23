import { Text, StyleSheet } from "react-native";
import { Colors } from "../theme";
import Card from "./Card";

interface CustomerCardProps {
    name: string;
    phone: string;    
}

export default function({name, phone}:CustomerCardProps) {
    return (
        <Card>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.phone}>{phone}</Text>
        </Card>
    )
}


const styles = StyleSheet.create({
    name: {
        color: Colors.text,
        fontSize: 14
    },

    phone: {
        color: Colors.text,
        fontSize: 14
    }
})
