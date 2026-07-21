import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "../theme";

interface CardProps {
    children: ReactNode;
}

export default function Card({ children }: CardProps) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.surface,
        borderRadius: Radius.lg,
        padding: Spacing.md,
        marginBottom: Spacing.md
    },
});