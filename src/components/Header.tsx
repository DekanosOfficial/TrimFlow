import { View, Text, StyleSheet } from "react-native";
import { Colors, Spacing } from "../theme";

interface HeaderProps {
    title: string;
    subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {subtitle && (
            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        )}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: Spacing.lg, 
    },

    title: {
        color: Colors.text,
        fontSize: 28,
        fontWeight: "700",
    },

    subtitle: {
        color: Colors.textSecondary,
        fontSize: 15,
        marginTop: 4,
    },
});