import { ReactNode } from "react";
import { Text, View, Modal,  StyleSheet } from "react-native";
import { Colors, Radius, Spacing } from "../theme";

interface AppModalProps {
    visible: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
}

export default function AppModal({
    visible,
    title,
    children,
    onClose
}: AppModalProps) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.background}>
                <View style={styles.card}>
                    <Text style={styles.title}>
                        {title}
                    </Text>

                    {children}

                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:"rgba(0, 0, 0, 0.6)",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: "90%",
        backgroundColor: Colors.surface,
        padding: Spacing.lg,
        borderRadius: Radius.lg
    },
    title: {
        color: Colors.text,
        fontSize:20,
        fontWeight: "700",
        marginBottom: Spacing.lg
    }
})





        