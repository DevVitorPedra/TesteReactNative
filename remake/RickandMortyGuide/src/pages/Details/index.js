import React, {useState,useEffect} from 'react'
import Header from '../../widgets/Header'
import ScrollBackground from '../../components/background'
import { ImageBackground } from 'react-native'
import Texts from '../../components/Texts/Texts'
export default function Details() {

  const [data, setData] = useState('')
  const [characters, setCharacters] = useState([])

  const awaiting = async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/1`)
    const char = await res.json()
    setData(char)
    setCharacters(char.characters)
  }

  useEffect(() => {
    awaiting()
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
      <ImageBackground testID='loading-image' style={{ flex: 1, width: 400, height: 400, paddingBottom: 10 }} source={{ uri: "https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg" }}/>
      <Texts>You again??</Texts>
      <Texts>Really???</Texts>
      </>  
    }
      </ScrollBackground>
    </>
  )
}
