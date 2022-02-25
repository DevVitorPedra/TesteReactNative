import React, { useState, useEffect } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import Card from '../Home/components/card'
import { StyledDetailsCard } from './style'
export default function Details({route}) {
  const [ data, setData] = useState('')
  const awaiting = async()=>{
    const res =  await fetch(`https://rickandmortyapi.com/api/episode/${route.params.id}`)
    const char = await res.json()
    setData(char)
  }
  
  useEffect(() => {
   
      setData(awaiting())
    
}, []);
  return (
<StyledDetailsCard>
     {(data.length==0) ?<Text>Loading</Text> : <Text>{data.name}</Text>}
  </StyledDetailsCard>  
  )
}
