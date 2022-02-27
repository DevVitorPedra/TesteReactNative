import React, { useState, useEffect } from 'react'
import {  ImageBackground, Text } from 'react-native'
import Character from '../../Widgets/character'
import HighlighText from '../../components/highlight-text'
import Header from '../../Widgets/header'
import Texts from '../../components/text'
import { StyledDetailsCard, StyledEpisodeName } from './style'
import EpisodeCard from '../../components/episode-card'
import ScrollBackground from '../../components/background'
import Description from '../../components/description'
import StyledFooter from '../../Widgets/footer'
export default function Details({ navigation, route }) {

  const [data, setData] = useState('')
  const [characters, setCharacters] = useState([])

  const awaiting = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${route.params.id}`)
    const char = await res.json()
    setData(char)
    setCharacters(char.characters)
  }

  useEffect(() => {
    awaiting()
  }, []);

  return (
    <>
      <Header  title="Episode Details" />
      <ScrollBackground testID="scrollview" contentContainerStyle={{ alignItems: 'center' }}>
        {(data.length == 0) ?
          <>
            <ImageBackground testID='loading-image' style={{ flex: 1, width: 400, height: 400, paddingBottom: 10 }} source={{ uri: "https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg" }}></ImageBackground>
            <Texts testID='loading-text' >You Again???</Texts>
            <Texts testID='loading-text' >Really???</Texts>
          </> :
          <>
            <EpisodeCard testID="episode-card">
              <HighlighText testID='text-name' >{data.name}</HighlighText>
              <Description testID='text' >was released in</Description>
              <HighlighText testID='text'>{data.air_date}</HighlighText>
            </EpisodeCard >
            
              <HighlighText testID='text'>Starring</HighlighText>
              {characters.map(item => {
                return <Character testID='characters' key={item} navigation={navigation} url={item} />
              })}
          
          </>}
      </ScrollBackground>
      <StyledFooter><Texts>VSP®</Texts></StyledFooter>
    </>
  )
}
