import React, {useState,useEffect} from 'react'
import Header from '../../widgets/header'
import ScrollBackground from '../../components/background'
import { ImageBackground } from 'react-native'
import Texts from '../../components/text'
import ExpandedCard from '../../components/expanded-card'
import HighlightText from '../../components/highlight-text'
import Description from '../../components/description'
import Character from '../../widgets/character'
import { getData } from '../../utils/functions'
export default function Details({navigation,route}) {

  const [data, setData] = useState('')
  const [characters, setCharacters] = useState('')
  const url = `https://rickandmortyapi.com/api/episode/${route.params.id}`
  
    
  

  useEffect(() => {
    getData(url,setData)
    setCharacters(data.characters)
  }, []);
  return (
    <>
      <Header title="Episode Details"/>
      <ScrollBackground testID="scrollview" contentContainerStyle={{ alignItems: 'center' }}>
      {(data.length == 0)?
      <>
      <ImageBackground testID='loading-image' style={{ flex: 1, width: 400, height: 400, paddingBottom: 10 }} source={{ uri: "https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg" }}/>
      <Texts>You again??</Texts>
      <Texts>Really???</Texts>
      </>  
      :
      <>
      <ExpandedCard>
        <HighlightText>{data.name}</HighlightText>
        <Description testID='text' >was released in</Description>
        <HighlightText>{data.air_date}</HighlightText>
      </ExpandedCard>
      <HighlightText>Starring</HighlightText>
      {(data)? data.characters.map(item => {
                return <Character testID='characters' key={item} navigation={navigation} url={item} />
              }):<HighlightText>Nobody</HighlightText>}
      </>  
    }
      </ScrollBackground>
    </>
  )
}
