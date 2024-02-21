import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { TarefaContext } from "../context/TarefaContext";
import Icons from 'react-native-vector-icons/Feather'
import Page from "./Page";

export default props => {
    const { listaTarefas, setListaTarefas, nums, min, setMin, max, setMax } = useContext(TarefaContext)
    const [done, setDone] = useState([])

    concluir = (tarefa) => {
        if (done.includes(tarefa)) {
            setDone(done.filter(item => item !== tarefa))
        } else {
            setDone([
                ...done,
                tarefa
            ])
        }
    }

    deletar = (index) => {
        listaTarefas.splice(index, 1)
        setListaTarefas([
            ...listaTarefas
        ])
    }

    exibir = () => {
        return listaTarefas.map((Tarefa, Index) => {
            if (Tarefa !== '' && Index > min && Index <= max) {
                return (
                    <View style={styles.task} key={Index}>
                        <TouchableOpacity
                            style={done.includes(Tarefa) ? styles.done : styles.notDone}
                            onPress={() => concluir(Tarefa)}
                        >
                            {done.includes(Tarefa) ? <Icons name='check' size={15} color="#000000" /> : false}
                        </TouchableOpacity>
                        <Text style={done.includes(Tarefa) ? styles.doneText : styles.text}>{Tarefa}</Text>
                        <TouchableOpacity
                            onPress={() => deletar(Index)}
                        >
                            <Icons name='trash-2' size={25} color='#000000' />
                        </TouchableOpacity>
                    </View>
                )
            }
        })
    }

    return (
        <>
            <ScrollView style={styles.container}>
                {exibir()}
            </ScrollView>
            <Page />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: 286,
        padding: 10,
    },
    task: {
        flexDirection: 'row',
        backgroundColor: '#F4EAE0',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 1,
        shadowColor: '#000000',
        marginBottom: 10
    },
    notDone: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 13
    },
    done: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 13,
        backgroundColor: '#F4DFC8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: 5,
        width: 190,
        fontSize: 18,
        color: '#000000'
    },
    doneText: {
        padding: 5,
        width: 190,
        fontSize: 18,
        color: '#000000',
        textDecorationLine: 'line-through'
    }
})