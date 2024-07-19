import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
function App2() {

  const[data, setdata]=useState([]);

  const getData = async () => {
    const mainData = await axios.get('http://localhost:4000/courses');
    setdata(mainData.data)

  }

  useEffect(()=>{
    getData()
  } ,[])

  return data ? (
  <>
  {
    data.map((val, index)=>{
      return(
        <>
        <h1 className='bg-red-300 text-center text-3xl text-white' key = {index + 1}>{val.courseName}</h1>
        </>
      )
    })
  }
  </>
  ) : (<h1>Loadiing..</h1>)
}

export default App2;
