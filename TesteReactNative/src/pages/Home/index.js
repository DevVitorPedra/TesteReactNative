import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, ImageBackground } from 'react-native'
import Card from '../../Widgets/card'
import Header from '../../Widgets/header'
import { StyledPagination, StyledPaginationButton } from './style'
import Texts from '../../components/text'
import PaginationButton from '../../components/pagination-button'
import StyledFooter from '../../Widgets/footer'

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
      <ScrollView testID='scrollview' contentContainerStyle={{ alignItems: 'center' }} style={{ backgroundColor: '#67E756' }}>
        {(data.length == 0) ?
          <>
            <ImageBackground testID='loading-image' style={{ flex: 1, width: 400, height: 400, paddingBottom: 10 }} source={{ uri: "https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg" }}></ImageBackground>
            <Texts >Hold on!!!</Texts>
            <Texts >We're loading!!!</Texts>
          </>
          :
          <>
            {data.results.map((item) => {
              return <Card testID='card' key={item.name} name={item.name} episode={item.episode} date={item.air_date} navigation={navigation} id={item.id} />
            })}
          </>
        }
      </ScrollView>
      {(data.length == 0) ? null : <StyledFooter testID='pagination'>
        {(data.info.prev) ? <PaginationButton  title="Prev" action={() => {
          setData('')
          setUrl(data.info.prev)
        }} /> : null}
        
        {(data.info.next) ? <PaginationButton title="Next" action={() => {
          setData('')
          setUrl(data.info.next)
        }} /> : null}
      </StyledFooter>}
    </>

  )
}