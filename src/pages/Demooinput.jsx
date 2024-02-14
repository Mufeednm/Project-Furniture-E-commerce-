import React, { useState } from 'react'

const Demooinput = () => {
    const [name,setName]=useState("")
    const handleclick= ((e)=>setName(e.target.value))
  return (
    <div className='bg-red-200'>Demooinput

<div className='ml-3'>

<input 
type="text"
placeholder='type'
onChange={(e)=>setName(e.target.value) }
 />

 <button onClick={handleclick} >
    submit
 </button>

</div>
<h2>{name}</h2>
    </div>
  )
}

export default Demooinput