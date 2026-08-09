import { View, TextInput, StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "../theme";


interface SearchBarProp {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;

}

export default function SearchBar({
    placeholder, 
    value, 
    onChangeText
}:SearchBarProp) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={Colors.textSecondary}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    );
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