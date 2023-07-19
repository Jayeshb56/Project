import React, {useEffect, useState} from 'react'

function Tv() {
    const [count,setCount] = useState(0)


  

  return (
    <div>
        <center>
            <h1 className='m-3'>{count}</h1>
        <button className='m-5' onClick={() =>{setCount(count + 1);}}>Subscribe</button>
        </center>
    </div>
  )
}
export default Tv;