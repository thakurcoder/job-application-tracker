import { useEffect, useState } from "react";
import Navbar from "../components/Navbar"

const Home = ()=>{

    const [data,setData] = useState([]);

    const fetchData = async()=>{
        const response = await fetch("/api/test");
        const data = await response.json();
        setData(data)
        console.log(data)
    }

    useEffect( ()=>{
        fetchData()
    },[])

    return <>
    <div className="rounded-2xl">
        
        <div className="text-2xl p-2 text-amber-50 text-center">
            <h1>data1</h1>
            <h1>data1</h1>
            <h1>data1</h1>
            <h1>data1</h1>
            <h1>data1</h1>
            <h1>data1</h1>
        </div>

    </div>
    </>
}


export default Home;