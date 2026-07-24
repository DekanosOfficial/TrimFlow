import { Text, StyleSheet, Pressable } from "react-native";
import { Colors, Radius, Spacing } from "../theme";
import { useState } from "react";

interface PrimaryButtonProps {
    title: string;
    onPress: () => void;
}


export default function PrimaryButton({ title, onPress }: PrimaryButtonProps) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
           <Text style={styles.title}>{title}</Text>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing.md,
        borderRadius: Radius.lg,
        alignItems:"center",
        marginBottom: Spacing.lg
    },
    title: {
        color: Colors.text,
        fontSize: 16,
        fontWeight: "600"
    },
})

