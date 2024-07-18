'use client'
import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";

export const Wheel = () => {
  const [color, setColor] = useState("#aabbcc");
  useEffect(()=>{
     console.log(color)
  },[color])
  return <HexColorPicker color={color} onChange={setColor} />;
};