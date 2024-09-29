import { useState } from 'react'
import './App.css'
import { Todoprovider } from './context/todocontext'
import { useEffect } from 'react'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/Todoitem'
function App() {
const [todos,setTodos]=useState([])

//Use of context
const addTodo=(todo)=>{
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
}
const updateTodo=(id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
}
const deleteTodo=(id)=>{
setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
}
const toggleComplete=(id)=>{
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
}
//----------------------------------


//Local Storage 
useEffect(()=>{
const todos=JSON.parse(localStorage.getItem('todos'))
if(todos&& todos.length>0){
      setTodos(todos)
}
},[])

useEffect(()=>{
localStorage.setItem('todos',JSON.stringify(todos))
},[todos])


//---------------------------------------------------------
  return (
  <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
   <div className="bg-[#172842] h-full py-8 shadow-lg shadow-red-900">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-neutral-800 ">
                    <h1 className="text-2xl font-bold text-center mb-3 mt-2">To-Do Manager</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>


                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                {todos.map((todo)=>(
                  <div key={todo.id} className='w-full'>
                    <TodoItem todo={todo}/>
                  </div>
                ))}

                    </div>
                </div>
               
            </div>
            <div>
              <a href="https://portfoliox1.vercel.app/"><div className='my-10 bg-[#172842] text-neutral-300 font-semibold text-md h-8 flex justify-center items-center rounded-md cursor-pointer shadow-md w-full shadow-cyan-800 lg:w-1/6 '>
              <button>
            PortFolio</button></div></a>
            </div>
            
    </Todoprovider>
  )
}

export default App
