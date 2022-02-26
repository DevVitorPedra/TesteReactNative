import React, { useState, useEffect } from 'react'
import { FlatList, ImageBackground, ScrollView, Text, View } from 'react-native'
import Character from '../Character'
import Card from '../components/card'
import { StyledText } from '../components/card/style'
import Header from '../components/header'
import { StyledCharAvatar, StyledDetailsCard, StyledEpisodeName, StyledEpisodeCard } from './style'
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
      <StyledDetailsCard testID="scrollview" contentContainerStyle={{ alignItems: 'center' }}>
        {(data.length == 0) ?
          <>
            <ImageBackground testID='loading-image' style={{ flex: 1, width: 400, height: 400, paddingBottom: 10 }} source={{ uri: "https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg" }}></ImageBackground>
            <StyledText testID='loading-text' >You Again???</StyledText>
            <StyledText testID='loading-text' >Really???</StyledText>
          </> :

          <>
            <StyledEpisodeCard testID="episode-card">
              <StyledEpisodeName testID='text-name' >{data.name}</StyledEpisodeName>
              <Text testID='text' >was released in</Text>
              <StyledEpisodeName testID='text'>{data.air_date}</StyledEpisodeName>
            </StyledEpisodeCard >
            <StyledEpisodeCard testID='episode-card'>
              <StyledText testID='text'>Starring</StyledText>
              {characters.map(item => {
                return <Character testID='characters' key={item} navigation={navigation} url={item} />
              })}
            </StyledEpisodeCard>
          </>}
      </StyledDetailsCard>
    </>
  )
}
