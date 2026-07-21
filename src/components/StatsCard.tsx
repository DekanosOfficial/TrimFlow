import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "../theme";

interface StatsCardProps {
    value: string;
    label: string;
}

export default function StatsCard({ value, label }: StatsCardProps) {
    return (
      <View style={styles.statscard}>
        <Text style={styles.value}>{value}</Text>

        {label && (
            <Text style={styles.label}>
                {label}
            </Text>
        )}
      </View>        
    );
}

const styles = StyleSheet.create({

    rpw: {
        flexDirection: "row"
    },

    statscard: {
        flex:1,
        marginHorizontal: Spacing.sm,
        backgroundColor: Colors.surface,
        borderRadius: Radius.lg,
        padding: Spacing.lg,
        marginBottom: Spacing.lg,
        alignItems: "center"

    },

    value: {
        color: Colors.text,
        fontSize: 28,
        fontWeight: "700"
    },

    label: {
        color: Colors.textSecondary,
        fontSize: 15,
        marginTop: 4,
    }

});