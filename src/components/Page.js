import React, { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { TarefaContext } from "../context/TarefaContext";
import Icons from 'react-native-vector-icons/Feather'

export default props => {

    const { listaTarefas, nums, min, setMin, max, setMax } = useContext(TarefaContext)


    enumerar = () => {
        return nums.map(num => {
            // if (num !== 0) {
            return (
                <TouchableOpacity
                    onPress={() => {
                        return (
                            setMin(num * 3),
                            setMax((num * 3) + 3),
                            console.log(min, max)
                        )
                    }}
                >
                    <Text style={styles.pageText}>{num + 1}</Text>
                </TouchableOpacity>
            )
            // }
        })
    }

    return (
        <View style={[styles.roll, min < 3 ? { justifyContent: 'flex-end' } : false]}>
                {
                    min >= 3 ?
                        <TouchableOpacity
                            onPress={() => {
                                return (
                                    setMin(min - 3),
                                    setMax(max - 3)
                                )
                            }}
                        >
                            <Icons name='arrow-left' size={30} color='#000' />
                        </TouchableOpacity>
                        : false
                }
                <View
                    style={styles.page}
                >
                    {nums.length >= 1 ? enumerar() : false}
                </View>
                {
                    listaTarefas.length - 1 > max ?
                        <TouchableOpacity
                            onPress={() => {
                                return (
                                    setMin(min + 3),
                                    setMax(max + 3)
                                )
                            }}
                        >
                            <Icons name='arrow-right' size={30} color='#000' />
                        </TouchableOpacity>
                        : false
                }
            </View>
    )
}

const styles = StyleSheet.create({
    roll: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    page: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 200,
        marginHorizontal: 5
    },
    pageText: {
        fontSize: 20,
        color: '#000000',
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000000'
    }
})