import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, ImageBackground } from 'react-native'
import { StyledText } from '../components/card/style'
import Card from '../components/card'
import Header from '../components/header'
import { StyledPagination, StyledPaginationButton } from './style'

export default function HomeSCreen({ navigation }) {
  const [data, setData] = React.useState([])

  const [url, setUrl] = useState('https://rickandmortyapi.com/api/episode')
  const awaiting = async () => {
    const res = await fetch(url)
    const char = await res.json()
    setData(char)
  }

  useEffect(() => {
    awaiting()
  }, [url]);


  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={'black'} />
      <Header title="Rick and Morty Guide" />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: '#67E756' }}>
        {(data.length == 0) ?
          <>
            <ImageBackground style={{ flex: 1, width: 400, height: 400, paddingBottom: 10 }} source={{ uri: "https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg" }}></ImageBackground>
            <StyledText>Hold on!!!</StyledText>
            <StyledText>We're loading!!!</StyledText>
          </>
          :
          <>
            {data.results.map((item) => {
              return <Card key={item.name} name={item.name} episode={item.episode} date={item.air_date} navigation={navigation} id={item.id} />
            })}
          </>
        }
      </ScrollView>
      {(data.length == 0) ? null : <StyledPagination>
        {(data.info.prev) ? <StyledPaginationButton color="#08A8CC" title="Prev" onPress={() => {
          setData('')
          setUrl(data.info.prev)
        }} /> : null}
        
        {(data.info.next) ? <StyledPaginationButton color="#08A8CC" title="Next" onPress={() => {
          setData('')
          setUrl(data.info.next)
        }} /> : null}
      </StyledPagination>}
    </>

  )
}
