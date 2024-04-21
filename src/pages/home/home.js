import React, {useState,useEffect } from 'react'
import CommonCard from '../../components/card/card'

const Home = () => {

  const [properties , setProperties] = useState([]); 

  const api ="https://api.housivity.com/api/v1/property"

  async function fetchData() {
    try {
      const response = await fetch(api);
      if (!response.ok) {
       console.log('Error Occured!!!')
      }
      const data = await response.json();
      console.log(data , "<<< DATA");
      setProperties(data?.propertyList);
    } catch (error) {
      console.error(error.message);
    }
  }
  console.log(properties , "<<<< PROPERTIES")
  
useEffect(()=> {
  fetchData()
},[])

  return (
    <>
    <CommonCard/>
      
    </>
  )
}

export default Home
