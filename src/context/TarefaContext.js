import React, { createContext, useState } from "react";

export const TarefaContext = createContext()

export function TarefaProvider({children}) {
    const [listaTarefas, setListaTarefas] = useState([''])
    const [nums, setNums] = useState([])
    let contador = parseInt((listaTarefas.length - 1) / 3)
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(3)

    return (
        <TarefaContext.Provider value={{
            listaTarefas,
            setListaTarefas,
            nums,
            setNums,
            contador,
            min,
            setMin,
            max,
            setMax
        }}>
            {children}
        </TarefaContext.Provider>
    )
}