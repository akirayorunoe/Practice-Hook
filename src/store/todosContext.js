import { createContext, useReducer } from 'react'
import {initState, reducer} from './reducer'

export const TodosContext = createContext()

function Provider({children}){
    const [state,dispatch] = useReducer(reducer,initState)
    return (
        <TodosContext.Provider value={[state,dispatch]}>
            {children}
        </TodosContext.Provider>
    );
}

export default Provider