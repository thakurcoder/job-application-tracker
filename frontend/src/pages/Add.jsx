import { useState } from "react";


const Add = () => {

    const [formData, setformData] = useState({company:"",date:"",message:""});

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setformData({
            company:e.target.company.value,
            date:e.target.date.value,
            message:e.target.message.value
        })
        console.log(formData)
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
