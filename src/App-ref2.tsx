import React, { Reducer, useEffect, useReducer, useRef, useState } from 'react';








function App() {

  const numRef = useRef<number>(0)

  const [_,forceRender] = useState(0)

  return (
    <div className="App">
      <button
        onClick={() => {
          numRef.current += 1
          forceRender(Math.random())
        }}
      >
        {numRef.current}
      </button>
    </div>
  );
}


export default App;
