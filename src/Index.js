import React from "react";
import { View, StatusBar, StyleSheet, KeyboardAvoidingView } from "react-native";

import Input from "./components/Input";
import Lista from "./components/Lista";

export default props => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar />
            <Input />
            <Lista />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        backgroundColor: '#F4DFC8',
        alignItems: 'center'
    }
})