import React, { useState, useEffect } from 'react'
import { FlatList, ImageBackground, ScrollView, Text, View } from 'react-native'
import Card from '../Home/components/card'
import { StyledText } from '../Home/components/card/style'
import { StyledCharAvatar, StyledDetailsCard, StyledEpisodeName } from './style'
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
    <>
<StyledDetailsCard contentContainerStyle={{alignItems:'center'}}>
     {(data.length==0) ? <ImageBackground style={{flex:1,width:400,height:400,paddingBottom:10}} source={{uri:"https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg"}}></ImageBackground> :
     <>
    
      <StyledEpisodeName>{data.name}</StyledEpisodeName>
      <Text>was released in</Text>
      <StyledEpisodeName>{data.air_date}</StyledEpisodeName>
      <Text>and there was the following characters</Text>
      <StyledCharAvatar source={{uri:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}}/>
      </>
      }
  </StyledDetailsCard> 
  </> 
  )
}
