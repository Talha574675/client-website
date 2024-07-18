import React from 'react'
import { SliderDemo } from './ui/slider-componnet'

const SliderComponent = ({startName,endName,change}:{startName:string,endName:string,change:any}) => {
  return (
    <div>
        
       <SliderDemo onValueChange={(w)=>{
         change(w[0])
       }} />
       <div className='flex justify-between w-[80%]'>
        <h1>{startName}</h1>
        <h1>{endName}</h1>
       </div>
    </div>
  )
}

export {SliderComponent}