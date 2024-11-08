import React, { createContext, Reducer, useContext, useEffect, useImperativeHandle, useReducer, useRef, useState } from 'react';






const countContext = createContext(111)

function Aaa() {
  return <div>
    <countContext.Provider value={222}>
      <Bbb />
    </countContext.Provider>
  </div>
}


function Bbb() {
  return <div>
    <Ccc />
  </div>
}

function Ccc() {
  const count = useContext(countContext)
  return <h2>
    context的值为: {count}
  </h2>
}







function App() {






  return (
    <div className="App">
      <Aaa />
    </div>
  );
}


export default App;
