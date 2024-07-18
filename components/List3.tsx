import { Slider } from "@radix-ui/react-slider"
import { Input } from "./ui/input"
import { SliderDemo } from "./ui/slider-componnet"
import { Checkbox } from "./ui/checkbox"
import RoundSlider from '@/components/circular-slider'
import TextSlider from '@/components/text-slider'
import { SliderComponent } from "./slider-component"
import { useEffect,useState } from "react"
export const List3a = ()=>{
    const [size,setSize]= useState(0)
    useEffect(()=>{
      console.log(size)
    },[size])
    return <div className="h-screen my-2 text-[14px] bg-slate-200 px-2  flex flex-col space-y-8 ">
     
      <div className="flex mt-10 ">
        <h2 className="w-[7em]">
            Sample Text
        </h2>
         <Input   type="number" placeholder="85" className=" bg-white w-[56%] ml-2"/>      
      </div>
      <div className="flex ">
        <h2 className="flex w-[7em]">
            FONT
        </h2>
        <TextSlider options={['Poppins','Roboto']}/>
      </div>
      <div className="flex w-full flex-row">
        <h2 className="w-40">Size</h2>
        <div className="w-full">
        <SliderComponent startName="small" endName="Large" change={setSize}/>
      </div>
      </div>
    
      <div className="flex flex-row w-full`">
        <h2 className="w-40 flex">Position</h2>
         <div className="space-y-2 flex flex-col w-full ">
         <div className="w-full">
           <SliderComponent startName="Left" endName="Right" change={setSize}/>
         </div>
        <div className="w-full">
          <SliderComponent startName="small" endName="Large" change={setSize}/>
         </div>
                          
         </div>
       
         
        </div>
        
        <div className="flex">
            <h2 className="w-40">Rotate</h2>
            {/* <div className="relative">
                <div className="w-40 h-40   bg-white rounded-full border border-gray-800"></div>
                <div className="w-[135px] h-[135px] top-3 left-3  absolute   bg-gray-300 border border-gray-800 rounded-full"></div>
                <div className="w-5 h-5 bg-black absolute rounded-full top-0 right-16"></div>
            </div> */}
            <div>
                <RoundSlider/>
            </div>
        </div>
        <div className="  h-40">
          <div className="flex justify-between mx-2 mt-3">
            <button className="bg-black text-white px-8 py-1">Colors</button>
            <button className="bg-white text-gray-700 px-8 py-1" >Pattern</button>
            <button className="text-gray-700 px-8 py-1 bg-white">Mascot</button>
          </div>
          <div className="flex">
            <div className="w-[130px] bg-white mt-5  ml-3 text-8xl font-semibold p-2 text-center  ">
               T
            </div>
            <div className="flex mt-5 mx-5 space-x-2 ">
                <h2 className="text-[15px] text-nowrap">Base Color</h2>
                <div className="flex space-x-2">
                     <Checkbox className="bg-red-600  h-7 w-7 " id='Base Color'/>
                     <Checkbox className="bg-gray-600  h-7 w-7" id='Base Color'/>
                     <Checkbox className="bg-yellow-600  h-7 w-7" id='Base Color'/>
                     <Checkbox className="bg-transparent  h-7 w-7" id='Base Color'/>
                </div>
            </div>
          </div>
        </div>
    </div>
}