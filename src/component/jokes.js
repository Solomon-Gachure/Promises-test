import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Jokes = () => {

const [jokes, setJokes]=useState([])
const fetchdata=async ()=>{
    try{
        const response= await axios.get('https://official-joke-api.appspot.com/random_joke')
        setJokes([response.data])
    }
    catch (error){
        console.log('error', error)
    }
}
useEffect(()=>{
    fetchdata()
},[])

  return (
    <div>
        {jokes.map((joke)=>(
            <div key={joke.id}>
{joke.setup}
{joke.punchline}
            </div>
        ))}
        
    </div>
  )
}

export default Jokes