import React, { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImCross } from "react-icons/im";
import { FaCircleDot } from "react-icons/fa6";
import Square from './Square';
import sound1 from './assets/sound1.wav'
import sound2 from './assets/sound2.wav'
import negative_beeps from './assets/negative_beeps.mp3'
function App() {

  const [xIsNext, setXIsNext] = useState(true);
  const [xScore,setXScore]=useState(0);
  const [oScore,setOScore]=useState(0);
  const [draw,setDraw]=useState(0);

  const [squares,setSquares]=useState(Array(9).fill(null))
  const handleClick=(i)=>{
    if (squares[i]){
      return
    }
    
     const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
      new Audio(sound1).play();
    } else {
      nextSquares[i] = 'O';
      new Audio(sound2).play();
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  useEffect(()=>{
    console.log("Squares:",squares);
  },[squares])

  const  calculateWinner=(squares)=> {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // console.log(squares[a],squares[b],squares[c]);
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log("Game over");
        return squares[a];
      }
    }
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {            //yo if else ettikai run hunxa??
    new Audio(negative_beeps).play();
    status = "Winner: " + winner;
  
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  return (
    <>
      <div className="bg-black w-screen h-screen flex flex-col justify-center items-center">
        {/* <ImCross color='#808080'/>
     <FaCircleDot  color='#808080'/> */}
        <div className="box w-72 h-72 flex flex-wrap mb-8">
          <audio src={sound1}></audio>
          <audio src={sound2}></audio>


          <Square value={squares[0]=='X'?<ImCross color='#808080' size={41}/>:squares[0]==null?'':<FaCircleDot color='#808080' size={41}/>} className="flex justify-center items-center border-l-0 border-t-0" onSquareClick={()=>handleClick(0)} />
          <Square value={squares[1]=='X'?<ImCross color='#808080' size={41}/>:squares[1]==null?'':<FaCircleDot color='#808080' size={41}/>} className=" flex justify-center items-center border-t-0" onSquareClick={()=>handleClick(1)} />
          <Square value={squares[2]=='X'?<ImCross color='#808080' size={41}/>:squares[2]==null?'':<FaCircleDot color='#808080' size={41}/>} className="flex justify-center items-center border-t-0 border-r-0" onSquareClick={()=>handleClick(2)} />
          <Square value={squares[3]=='X'?<ImCross color='#808080' size={41}/>:squares[3]==null?'':<FaCircleDot color='#808080' size={41}/>} className="   flex justify-center items-center border-l-0" onSquareClick={()=>handleClick(3)}/>
          <Square value={squares[4]=='X'?<ImCross color='#808080' size={41}/>:squares[4]==null?'':<FaCircleDot color='#808080' size={41}/>} className="  flex justify-center items-center" onSquareClick={()=>handleClick(4)} />
          <Square value={squares[5]=='X'?<ImCross color='#808080' size={41}/>:squares[5]==null?'':<FaCircleDot color='#808080' size={41}/>} className="flex justify-center items-center border-r-0" onSquareClick={()=>handleClick(5)} />
          <Square value={squares[6]=='X'?<ImCross color='#808080' size={41}/>:squares[6]==null?'':<FaCircleDot color='#808080' size={41}/>} className=" flex justify-center items-center border-l-0 border-b-0" onSquareClick={()=>handleClick(6)}/>
          <Square value={squares[7]=='X'?<ImCross color='#808080' size={41}/>:squares[7]==null?'':<FaCircleDot color='#808080' size={41}/>} className="   flex justify-center items-center border-b-0" onSquareClick={()=>handleClick(7)}/>
          <Square value={squares[8]=='X'?<ImCross color='#808080' size={41}/>:squares[8]==null?'':<FaCircleDot color='#808080' size={41}/>} className="  flex justify-center items-center border-b-0 border-r-0" onSquareClick={()=>handleClick(8)}/>
        </div>
      {/* <div className='text-[#808080] text-xl'>{status}</div> */}
      <div className="scoreboard flex font-raleway text-white justify-between w-72 text-lg">
        <div className="player1">
          <div className="heading">PLAYER 1 (x)</div>
          <div className="score flex justify-center text-5xl">{xScore}</div>
        </div>
        <div className="tie">
          <div className="heading">TIE</div>
          <div className="score flex justify-center text-5xl">{draw}</div>
        </div>
        <div className="player2">
          <div className="heading">PLAYER 2 (O)</div>
          <div className="score flex justify-center text-5xl">{oScore}</div>
        </div>
      </div>

        {/* <div className="whiteline w-0 border border-r-2 border-white h-72"></div>
     <div className="whiteline w-0 border border-r-2 border-white h-72"></div> */}


      </div>
    </>
  )
}

export default App
