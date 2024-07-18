import { Wheel } from "./wheel"

export const Lista1= ()=>{
    return <div>
        <div  className="w-[30vw] border  m-2">
      <div className="bg-gray-300 h-10 text-xl text-center flex items-center justify-center text-black">front Body </div>
      <div className="border  h-60">
        <Wheel/> 
      </div>
      <div className="flex-wrap flex items-start justify-start space-x-2 bg-gray-300 h-60">
         {['Team Name','Patern','number','Upload File','Player Name'].map((el)=>{
            return  <div className="flex flex-wrap bg-slate-400  rounded-md `">
            <h2 className="min-w-[100px] text-xl p-2 ">{el}</h2>
          </div>
         })}
      </div>
       <div className="flex border  h-20 space-x-2 my-2 bg-slate-300 ">
          <div className="border bg-slate-500 text-white rounded-md  min-w-20 flex items-center justify-center `">Colors</div>
          <div className="border bg-slate-500 text-white rounded-md  min-w-20 flex items-center justify-center `">Patterns</div>
          <div className="border bg-slate-500 text-white rounded-md px-2 min-w-20 flex items-center justify-center p-2`">Applications</div>
          <div className="border bg-slate-500 text-white rounded-md  min-w-20 flex items-center justify-center `">Save</div>
       </div>
    </div>
    </div>
}