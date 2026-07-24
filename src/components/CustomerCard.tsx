import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "../theme";
import Card from "./Card";

interface CustomerCardProps {
    name: string;
    phone: string;
    onPress?: () => void;
        
}

export default function CustomerCard({name, phone, onPress}:CustomerCardProps) {
    return (
        <Pressable onPress={onPress}
        style={({ pressed }) => ({
            opacity: pressed ? 0.7 : 1
        })}
        >
            <Card>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.phone}>{phone}</Text>
                
            </Card>
        </Pressable>
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
