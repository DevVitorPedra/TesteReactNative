import React,{useState,useEffect} from 'react'
import { ImageBackground, Text } from 'react-native'
import { StyledCharAvatar } from '../Character/style'
import { StyledCharacterCard } from './style'
import { StyledEpisodeCard } from '../Home/components/card/style'
import { StyledText } from '../Home/components/card/style'
export default function CharacterDetails({route}) {
    const [data,setData] = useState('')
    const awaiting = async()=>{
        const res =  await fetch(route.params.url)
        const char = await res.json()
        setData(char)
        
       
      }
      useEffect(() => {
    
        awaiting()
  
  }, []);
  return (
      <>
    {(data.length==0)?<ImageBackground  style={{flex:1,width:400,height:400,paddingBottom:10}} source={{uri:"https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg"}} /> : 
    (<StyledCharacterCard contentContainerStyle={{alignItems:'center'}}>
    <StyledCharAvatar style={{width:220,height:220,borderRadius:125}} source={{uri:data.image}}/>
    <StyledEpisodeCard style={{marginBottom:50}}>
    <StyledText>{data.name}</StyledText>
    <Text>Specie</Text>
    <StyledText>{data.species}</StyledText>
    <Text>Status</Text>
    <StyledText>{data.status}</StyledText>
    <Text>Origin</Text>
    <StyledText>{data.origin.name}</StyledText>
    <Text>Last Seen</Text>
    <StyledText>{data.location.name}</StyledText>
    </StyledEpisodeCard>
    
</StyledCharacterCard>)}
      </>
  )
}
