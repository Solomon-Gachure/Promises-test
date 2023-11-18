import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Async = () => {
    const [fact,setFact]=useState([]);
const fetchdata=async ()=>{
    try{
        const response=await axios.get('https://catfact.ninja/fact')
        setFact(response.data.fact);
    }
    catch (error){
        console.log(error);
    }
};
useEffect(()=>{
    fetchdata();
}, [])



  return (
    <div>
        {fact}
    </div>
  )
}

export default Async