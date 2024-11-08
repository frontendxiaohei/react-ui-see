import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import React, { Reducer, useEffect, useReducer, useState } from 'react';




interface Data{
  result: number
}

interface Action {
  type: 'add' | 'minus',
  num: number
}

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case 'add':
      return {
        result: state.result + action.num
      }
    case'minus':
      return {
        result: state.result - action.num
      }
    default:
      return state
  }
}




function App() {

  const [res,dispatch] = useReducer<Reducer<Data,Action>>(reducer,{result:0})


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <button onClick={() => dispatch({type:'add', num: 2})}>+</button>
        <button onClick={() => dispatch({type:'minus', num: 2})}>-</button>
        <div>{res.result}</div>
      </div>
    </div>
  );
}


export default App;
