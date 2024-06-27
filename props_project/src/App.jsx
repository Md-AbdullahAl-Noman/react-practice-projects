
import './App.css'
import Usercard from './components/Usercard'

function App() {
 const myArr=[2,4,6,8];
 let myObj = {name:"Noman", age: 25, city:"Dhaka"}

  return (
    <>
     <h1 className='bg-red-500 text-black rounded-lg p-4 mb-4'>This is the Tailwind project</h1>

      <Usercard passedArr={myArr} user="Noman" navigate="Visit"/>
      <Usercard passedObj={myObj} user="Satyajit" navigate="Click"/>
      <Usercard user="Naimul" />
    </>
  )
}

export default App
