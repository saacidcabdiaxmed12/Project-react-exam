import React, { useState } from 'react'

const Student = (props) => {
    const [count,setcount] = useState(0);
    const handleIncrement = ()=>{
        setcount(count+1);
    }
  return (
    <div>
        <h2>Hello Mr. {props.name}</h2>
        <button>{count}</button>
        <button onClick={handleIncrement} className=' bg-blue-500 

  dark:bg-gray-900 dark:text-white
  
  '> Increment</button>
<div class="max-w-sm bg-white rounded-xl shadow-md p-6">
  <h2 class="text-xl font-bold mb-2">Card Title</h2>
  <p class="text-gray-600">{count}</p>
  <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded tracking-wide leading-loose"  onClick={handleIncrement} >
    Read More
  </button>



  
</div>

    </div>
  )
}

export default Student