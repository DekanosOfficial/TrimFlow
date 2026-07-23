import { View, TextInput, StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "../theme";


interface SearchBarProp {
    placeholder: string;

}

export default function SearchBar({placeholder}:SearchBarProp) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={Colors.textSecondary}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.surface,
        borderRadius: Radius.lg,
        marginBottom: Spacing.lg,
        paddingHorizontal: Spacing.lg
    },

    input: {
        color: "white",
        fontSize: 16,
        height: 50
        
    }
    
})