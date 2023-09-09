import {createContext, ReactNode, useState} from "react";
import { IPokemon } from "../interfaces/interfaces";

const Context = createContext({});

interface ContextProps {
    children: ReactNode
}

/*export function PokemonsContextProvider({children}: ContextProps){
    const [pokemonsContext, setPokemonsContext] = useState<IPokemon>([])
    return(
        <Context.Provider value={pokemonsContext, setPokemonsContext}>
            {children}
        </Context.Provider>
    )
}*/