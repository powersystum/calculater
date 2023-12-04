import React, { useState } from 'react'
import './App.css'
 
function App() {
  const [value,setValue]=useState('');
  
  function handle(e){
    setValue(value + e.target.innerHTML)
  }
  function equal(){
    setValue(eval(value))
  }
  function AChandler(){
    setValue('')
  }
  function dell(){
     setValue(value.toString().slice(0,-1))
  }
  
  return (
    <div className='calculator'>
      <input type='text' placeholder='0' value={value}/>
      <div>
        <button onClick={AChandler}>AC</button>
        <button onClick={dell}>DEL</button>
        <button className='operator'  onClick={handle}>%</button>
        <button className='operator'  onClick={handle}>/</button>
      </div>
      <div>
        <button onClick={handle}>7</button>
        <button  onClick={handle}>8</button>
        <button  onClick={handle}>9</button>
        <button className='operator'  onClick={handle}>*</button>
      </div>
      <div>
        <button  onClick={handle}>4</button>
        <button  onClick={handle}>5</button>
        <button  onClick={handle}>6</button>
        <button className='operator'  onClick={handle}>-</button>
      </div>
      <div>
        <button  onClick={handle}>1</button>
        <button  onClick={handle}>2</button>
        <button  onClick={handle}>3</button>
        <button className='operator'  onClick={handle}>+</button>
      </div>
      <div>
        <button  onClick={handle}>00</button>
        <button  onClick={handle}>0</button>
        <button  onClick={handle}>.</button>
        <button className='equalbtn'  onClick={equal}>=</button>
      </div>
    </div>
  )
}

export default App