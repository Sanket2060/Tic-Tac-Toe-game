import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImCross } from "react-icons/im";
import { FaCircleDot } from "react-icons/fa6";
import Square from './Square';

function App() {
  const [squares,setSquares]=useState(Array(9).fill(null))
  const handleClick=(i)=>{
    const nextSquares = squares.slice();
    nextSquares[i] =  <ImCross color='#808080'/>
    ;
    setSquares(nextSquares);
  }
  return (
    <>
      <div className="bg-black w-screen h-screen flex justify-center items-center">
        {/* <ImCross color='#808080'/>
     <FaCircleDot  color='#808080'/> */}
        <div className="box w-72 h-72 flex flex-wrap">
          <Square value={squares[0]} className="flex justify-center items-center border-l-0 border-t-0" onSquareClick={()=>handleClick(0)} />
          <Square value={squares[1]} className=" flex justify-center items-center border-t-0" onSquareClick={()=>handleClick(1)} />
          <Square value={squares[2]} className="flex justify-center items-center border-t-0 border-r-0" onSquareClick={()=>handleClick(2)} />
          <Square value={squares[3]} className="   flex justify-center items-center border-l-0" onSquareClick={()=>handleClick(3)}/>
          <Square value={squares[4]} className="  flex justify-center items-center" onSquareClick={()=>handleClick(4)} />
          <Square value={squares[5]} className="flex justify-center items-center border-r-0" onSquareClick={()=>handleClick(5)} />
          <Square value={squares[6]} className=" flex justify-center items-center border-l-0 border-b-0" onSquareClick={()=>handleClick(6)}/>
          <Square value={squares[7]} className="   flex justify-center items-center border-b-0" onSquareClick={()=>handleClick(7)}/>
          <Square value={squares[8]} className="  flex justify-center items-center border-b-0 border-r-0" onSquareClick={()=>handleClick(8)}/>
        </div>

        {/* <div className="whiteline w-0 border border-r-2 border-white h-72"></div>
     <div className="whiteline w-0 border border-r-2 border-white h-72"></div> */}


      </div>
    </>
  )
}

export default App
