import React, { Reducer, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';


interface RefProps {
  aaa: () => void
}


const Sub: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  useImperativeHandle(ref, () => {
    return {
      aaa: () => {
        inputRef.current?.focus()
      }
    }
  }, [inputRef])
  return <div>
    <input ref={inputRef} />
  </div>
}


const Parent = React.forwardRef(Sub)


function App() {

  const ref = useRef<RefProps>(null)


  useEffect(() => {
    ref.current?.aaa()
  }, [])



  return (
    <div className="App">
        <Parent ref={ref} />
    </div>
  );
}


export default App;
