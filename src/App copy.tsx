import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import React, { Reducer, useEffect, useReducer, useState } from 'react';




interface Todo {
  id: number
  title: string
  completed: boolean
}

interface Data{
  todos: Todo[]
}

interface Action {
  type: 'add' | 'del' | 'udp' | 'find'
  params: any
}


function reducer(action: Action, state: Data) {
  switch (action.type) {
    case 'add':
      return {
        todos: [...state.todos, action.params]
      }
    case 'del':
      return {
        todos: state.todos.filter(item => item.id!== action.params)
      }
    case 'udp':
      return {
        todos: state.todos.map(item => {
          if (item.id === action.params.id) {
            return {
             ...item,
             ...action.params
            }
          }
          return item
        })
      }
    case 'find':
      return {
        todos: state.todos.filter(item => item.id === action.params)
      }
    default:
      return state
  }
}







function App() {

  // const [res,dispatch] = useReducer<Reducer<Data,Action>>(reducer,{todos:[]})


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


export default App;
