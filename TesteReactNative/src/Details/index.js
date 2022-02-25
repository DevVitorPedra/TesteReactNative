import React, { useState, useEffect } from 'react'
import { FlatList, ImageBackground, ScrollView, Text, View } from 'react-native'
import Character from '../Character'
import Card from '../Home/components/card'
import { StyledText } from '../Home/components/card/style'
import { StyledCharAvatar, StyledDetailsCard, StyledEpisodeName, StyledEpisodeCard } from './style'
export default function Details({navigation,route}) {
  const [ data, setData] = useState('')
  const [characters,setCharacters] = useState([])

  const awaiting = async()=>{
    const res =  await fetch(`https://rickandmortyapi.com/api/episode/${route.params.id}`)
    const char = await res.json()
    setData(char)
    
    setCharacters(char.characters)
  }
  const getChars = async (url) =>{
    const res = await fetch(url)
    const char = await res.json()
    return char
  }
  useEffect(() => {
    
      awaiting()

}, []);
  return (
    <>
<StyledDetailsCard contentContainerStyle={{alignItems:'center'}}>
     {(data.length==0) ? <ImageBackground style={{flex:1,width:400,height:400,paddingBottom:10}} source={{uri:"https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg"}}></ImageBackground> :
     
     <>
     <StyledEpisodeCard>
    
      <StyledEpisodeName>{data.name}</StyledEpisodeName>
      <Text>was released in</Text>
      <StyledEpisodeName>{data.air_date}</StyledEpisodeName>
      </StyledEpisodeCard>
      <StyledEpisodeCard>
        <StyledText>Starring</StyledText>
        {characters.map(item=>{
          return <Character key={item} navigation={navigation} url={item}/>
        })}
      </StyledEpisodeCard>
</>
      }
  </StyledDetailsCard> 
  </> 
  )
}
