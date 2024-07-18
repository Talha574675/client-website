'use client'
import { useEffect } from "react"
import { useAnimate, useInView } from "framer-motion"
import {Wheel }from "./wheel"
import Tabbs from "./Tabss"

export const List = ()=> {
  
  return (
 
   <div className="  flex flex-row border border-black w-[100vw]`">
    <div className="flex-1 border border-black flex items-center">
        <div className="flex bg-gray-300 rounded-md ml-1  p-4"> 
            <ul className="flex flex-col space-y-5">
                <li>Icon 1</li>
                <li>Icon 2</li>
                <li>Icon 3</li>
                <li>Icon 4</li>
            </ul>
        </div>
        <div className="bg-gray-300  justify-between flex-col flex  p-3 ml-2 rounded-md h-40">
              <div>
                  <button className="p-2 bg-slate-400 rounded-md">Upload</button>
                  <p>No File Selected</p>                

              </div>
              <div>
                <button className="bg-red-500 text-white p-2 rounded-md mr-2">Front</button>
                <button className="bg-red-500 text-white p-2 rounded-md">Back</button>
              </div>
         </div>
    </div>
    <div  className="flex-1 border w-full ">
        <div> </div>

    </div>
     <div>
      <Tabbs/>
     </div>
   </div> 
)
}