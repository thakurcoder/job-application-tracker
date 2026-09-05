import { useEffect, useState } from "react";
import Update from "../components/Update";

const Home = ()=>{

    const [data,setData] = useState([]);
    const [isOpen,setisOpen] = useState(false);
    const [updateData,setUpdateData] = useState(null)

    const fetchData = async()=>{
        const response = await fetch("/api/test");
        const data = await response.json();
        setData(data)
        console.log("data in home ",data)
    }

    useEffect( ()=>{
        fetchData()
    },[isOpen])

    const handleUpdate = (item)=>{
      // console.log(item)
      setUpdateData(item)
        setisOpen(true)
        console.log(isOpen)
    }

    return <>
    <div className="rounded-2xl">
        
        <div className="text-2xl p-2 text-amber-50 text-center">
            {
                data.map((item,index) => {
                   return<div className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:shadow-md">
                   <div className="flex flex-col gap-1">
                     <h1 className="text-base font-semibold text-gray-900">{item.company}</h1>
                     <h1 className="text-sm font-normal text-gray-500">{item.date}</h1>
                     <h1 className="text-sm font-normal text-gray-700">{item.message}</h1>
                   </div>
                 
                   <div className="flex items-center gap-2 shrink-0">
                     <button onClick={()=>handleUpdate(item)} className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700 active:bg-blue-800">
                       Update
                     </button>
                     <button className="rounded-md bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-100 active:bg-red-200">
                       Delete
                     </button>
                   </div>
                 </div>
})
            }
            

            {isOpen && <Update isOpen = {isOpen} isClose = {()=>setisOpen(false)} props = {updateData} />}
        </div>

    </div>
    </>
}


export default Home;