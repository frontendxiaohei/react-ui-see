import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import React, { useEffect, useState } from 'react';



// function logMiddleware(func: (arg0: (...args: any[]) => any, arg1: any, arg2: any) => any) {
//   return function(set: (arg0: any) => any, get: () => any, store: any) {
//     function newSet(...args: any[]) {
//       console.log('调用了set方法: ', get())
//       return set(...args)
//     }
//     return func(newSet, get, store)
//   }
// }


const useAppStore = create(persist((set) => ({
  num: 0,
  name: 'hello zustand',
  setNum: (num: number) => set({ num })
}),{
  name: 'app-storage'
}))



function App() {
  // @ts-ignore
  const setNum = useAppStore((state) => state.setNum)
  // @ts-ignore
  const num = useAppStore(state => state.num)

  useEffect(() => {
    useAppStore.subscribe((state) => {
      console.log(useAppStore.getState());      
    })
  },[])

  return (
    <div className="App">
      <input 
        value={num}
        onChange={(e) => setNum(e.currentTarget.value)}
      />
      <B />
    </div>
  );
}



function B() {
  return <div>
    <C />
  </div>
}

function C() {
  // @ts-ignore
  const name = useAppStore(state => state.name)
  return <p>
    {name}
  </p>
}

export default App;
