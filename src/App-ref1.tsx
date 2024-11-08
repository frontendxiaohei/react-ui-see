import React, { Reducer, useEffect, useReducer, useRef, useState } from 'react';








function App() {

  const inputRef = useRef<HTMLInputElement | null>(null)


  useEffect(() => {
    // inputRef.current?.focus()
    // inputRef.current!.value = 'hello'
  },[])


  return (
    <div className="App">
      <input ref={inputRef} />
    </div>
  );
}


export default App;
