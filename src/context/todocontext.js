import {createContext,useContext} from 'react'

export const todocontext=createContext({
    todos:[
        {
           id:1,
           todo:'todo Msg',
           completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
}) 

export const useTodo=()=>{
    return useContext(todocontext)
}

export const Todoprovider=todocontext.Provider