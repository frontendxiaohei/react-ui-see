import React, { useEffect, useState } from 'react';



function queryData() : Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}


function App() {

  const [num,setNum] = useState(0)


  useEffect(() => {
    console.log('effect');
    
    queryData().then((res) => {
      setNum(res)
    })
  }, [Date.now()])

  return (
    <div className="App">
      <button onClick={() => setNum((pre) => pre - 1)}>-</button>
      {num}
      <button onClick={() => setNum(num+1)}>+</button>
      
    </div>
  );
}

export default App;
