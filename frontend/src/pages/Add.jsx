import { useEffect, useState } from "react";
import axios from 'axios';


const Add = () => {

    const [formData, setformData] = useState({company:"",date:"",message:""});

    useEffect(()=>{

    })
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const newData = {
          company:e.target.company.value,
          date:e.target.date.value,
          message:e.target.message.value
      }
        setformData(newData)
        console.log(formData)
        try {
            const response = await axios.post('/api/test',newData);
            console.log("backend response",response.data);
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
      <div className="text-center mt-3 text-2xl">
        <form onSubmit={handleSubmit} className="bg-amber-50">
            <input name="company" type="text" placeholder="company Name" />
            <div>
            <label>Date of apply</label>
            <input name="date" type="date" placeholder="date" />
            </div>

            <textarea name="message" rows={5} cols={50} placeholder="type  your message here..." />
            <button type="submit" className="bg-amber-950 border-2 rounded-3xl text-white p-2">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Add;
