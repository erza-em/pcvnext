import React, { useState, useEffect  } from 'react';

export default function Home() {
  const [count,setCount] = useState(0)
  useEffect(() => {
      
      console.log('Hey ' + count)
  }, [count]);
  return (
    <div>
      <h1></h1>
    </div>
  )
}
