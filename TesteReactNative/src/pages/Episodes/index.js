import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, ImageBackground } from 'react-native'
import Card from '../../Widgets/card'

import Texts from '../../components/text'
import PaginationButton from '../../components/pagination-button'
import StyledFooter from '../../Widgets/footer'
import ScreenDescription from '../../Widgets/screendescription'
import Description from '../../components/description'
export default function Episodes({ navigation }) {
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
      <StatusBar role="status" data-testid="status-bar" barStyle='light-content' backgroundColor={'black'} />
     <ScreenDescription  title="Episodes" />
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
        {(data.info.prev) ? <PaginationButton testID="prev-button"  title="Prev" action={() => {
          setData('')
          setUrl(data.info.prev)
        }} /> : null}
 <Description>Page {(data.info.next.charAt(data.info.next.length-1))-1} of {data.info.pages}</Description>
        {(data.info.next) ? <PaginationButton id="next button" testID="next-button" title="Next" action={() => {
          setData('')
          setUrl(data.info.next)
        }} /> : null}
      </StyledFooter>}
    </>

  )
}
