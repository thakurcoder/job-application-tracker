import axios from "axios";
import { useState } from "react";

const Update = ({props,isOpen,isClose}) => {
    // if (!isopen) return null;

    // console.log("in updates",props)
    console.log("isopen = ",isOpen )
    console.log("isopen = ",isClose )
    console.log("company ", props)
    console.log("id of props",props._id)

    const [updateData,setUpdateData] = useState({
      company:props.company,
      date:props.date,
      message:props.message
    })
    
    const handleChange = (e) =>{
      const {name,value} = e.target
      setUpdateData((prev)=>({
        ...prev,
        [name]:value
      }))
    } 


    const handleSubmit = async(e)=>{
      e.preventDefault()
      
      try {
        const response = await axios.patch(`api/test/${props._id}`,updateData)
        console.log(response) 
        isClose()
      } catch (error) {
        console.log("errror while updating the data :- ",error)
      }
      
    }
    return (

      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4 rounded-xl bg-white p-6 shadow-xl">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Company </label>
              <input 
              name="company"
                placeholder={props.company}
                type="text"
                value={updateData.company}
                onChange={handleChange}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Date </label>
              <input
              name="date"
                placeholder=""
                type="date"
                value={updateData.date}
                onChange={handleChange}
                className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Message </label>
              <textarea
              name="message"
                rows={5}
                cols={50}
                placeholder=""
                type="text"
                value={updateData.message}
                onChange={handleChange}
                className="resize-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button
              
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </>
    );
  };

export default Update;