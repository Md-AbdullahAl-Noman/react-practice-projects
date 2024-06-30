import { useState } from "react"

function App() {
 
const [color, setColor] = useState('cyan')
  return (

    <div className="h-[100vh] w-full"
    style={{backgroundColor: color}}>

<div className="flex justify-center items-top-full space-x-2 mb-8">
    <div className=" p-4 rounded flex space-x-2 mb-8">
        <button className="bg-red-500 p-2 rounded-lg" onClick={()=>{setColor('red')}}>Red</button>
        <button className="bg-green-500 p-2 rounded-lg" onClick={()=>{setColor('green')}}>Green</button>
        <button className="bg-blue-500 p-2 rounded-lg" onClick={()=>{setColor('blue')}}>Blue</button>
        <button className="bg-orange-500 p-2 rounded-lg" onClick={()=>{setColor('orange')}}>Orange</button>
        <button className="bg-yellow-500 p-2 rounded-lg"  onClick={()=>{setColor('yellow')}}>Yellow</button>
    </div>
</div>


    </div>
   
  )
}

export default App
