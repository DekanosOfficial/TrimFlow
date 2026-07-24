import { Pressable, Text, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";


import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../navigation/types";

import { Colors, Spacing } from "../theme"


type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function BackButton() {
    
    const navigation = useNavigation<NavigationProp>();
    return (
        <Pressable
            onPress={() => navigation.goBack()} style={({ pressed }) => ({
                opacity: pressed ? 0.6 : 1
            })}
        >
            <Text style={styles.backButton}>← Back</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    backButton: {
        color: Colors.textSecondary,
        fontSize: 16,
        marginBottom: Spacing.md
  }
})