import React, { useContext, useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icons from 'react-native-vector-icons/Feather'
import { TarefaContext } from "../context/TarefaContext";

export default props => {
    const { listaTarefas, setListaTarefas, nums, setNums, contador } = useContext(TarefaContext)
    const [texto, setTexto] = useState('')


    adiciona = () => {
        if (texto !== '') {
            setListaTarefas([
                ...listaTarefas,
                texto
            ])
            setTexto('')
        } else {
            Alert.alert('Tarefa vazia', 'Adicione uma tarefa!')
        }
        if (contador == (listaTarefas.length - 1) / 3) {
            setNums([
                ...nums,
                contador])
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Adicione uma tarefa:"
                placeholderTextColor='#000000'
                value={texto}
                onChangeText={setTexto}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => adiciona()}
            >
                <Icons name='plus-circle' size={15} color='#000000' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#FAF6F0',
        width: 250,
        height: 36,
        padding: 10,
        justifyContent: 'center',
        color: '#000000',
        fontSize: 14
    },
    button: {
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#FAF6F0',
        width: 36,
        height: 36,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})