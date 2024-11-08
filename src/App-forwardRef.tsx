import React, { Reducer, useEffect, useReducer, useRef, useState } from 'react';



const Sub: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref) => {
  return <div>
    <input ref={ref} />
  </div>
}


const Parent = React.forwardRef(Sub)

function App() {
  const ref = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    console.log(ref.current);
    ref.current?.focus()
  }, [])

  return (
    <div className="App">
      <Parent ref={ref} />
    </div>
  );
}


export default App;
