import React, {useState,useEffect } from 'react'
import CommonCard from '../../components/card/card'
import { Grid } from '@mui/material';

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

  
useEffect(()=> {
  fetchData()
},[])

  return (
    <Grid m={5}  display={'flex'} flexWrap={'wrap'} justifyContent={'space-evenly'}>
    { properties.map((property)=> {
      console.log(property , "<<< SINGLE")
      return (
        <>
        <CommonCard  key={property.id} name={property?.name} image={property?.thumbnail} price={property?.displayPrice?.fixedPrice} city={property?.address?.city?.name}/>
        </>
      )
    })
  
    }
      
    </Grid>
  )
}

export default Home
