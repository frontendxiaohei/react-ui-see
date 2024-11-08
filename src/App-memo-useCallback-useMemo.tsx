import React, { createContext, memo, Reducer, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useReducer, useRef, useState } from 'react';
/**
 * memo 是防止 props 没变时的重新渲染，useMemo 和 useCallback 是防止 props 的不必要变化。
 * 所以说，如果子组件用了 memo，那给它传递的对象、函数类的 props 就需要用 useMemo、useCallback 包裹，否则，每次 props 都会变，memo 就没用了。
反之，如果 props 使用 useMemo、useCallback，但是子组件没有被 memo 包裹，那也没意义，因为不管 props 变没变都会重新渲染，只是做了无用功。
memo + useCallback、useMemo 是搭配着来的，少了任何一方，都会使优化失效。
 * 
 * 
 * @returns 
 */

function Aaa() {
  const [,setNum] = useState(1)

  const [count,setCount] = useState(2)

  useEffect(() => {
    setInterval(() => {
      setNum(Math.random())
    }, 2000)
  },[])

  useEffect(() => {
    setTimeout(() => {
      setCount(Math.random())
    }, 2000)
  },[])

  // function bbbCallback() {}
  const bbbCallback = useCallback(function () {

  },[])

  const count2 = useMemo(() => {
    return count * 100
  },[count])

  return <div>
    <MemoBbb count={count2} callback={bbbCallback}  />
  </div>
}


interface BbbProps {
  count: number
  callback: Function
}
function Bbb(props:BbbProps) {
  console.log('bbb render');
  return <h2>
    {props.count}
  </h2>
}

const MemoBbb = memo(Bbb)

function App() {






  return (
    <div className="App">
      <Aaa />
    </div>
  );
}


export default App;
