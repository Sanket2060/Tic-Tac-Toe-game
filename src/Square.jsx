import React from "react";
import { useState } from "react";
import { ImCross } from "react-icons/im";
export default function Square({className,value,onSquareClick}) {
    return <button 
    className={`square w-1/3 h-1/3  border-2 border-white ${className} `}
    onClick={onSquareClick}
    >{value}</button>;
  }
  