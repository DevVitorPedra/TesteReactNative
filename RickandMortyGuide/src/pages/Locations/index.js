import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, ImageBackground } from 'react-native'
import Texts from '../../components/text'
import PaginationButton from '../../components/pagination-button'
import StyledFooter from '../../widgets/footer'
import ScreenDescription from '../../widgets/screendescription'
import Description from '../../components/description'
import LocationCard from '../../widgets/location'
import { getData } from '../../utils/functions'
export default function Episodes({ navigation }) {
  const [data, setData] = React.useState([])
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/location')

  useEffect(() => {
    getData(url.setData)
  }, [url]);


  return (
    <>

      <ScreenDescription title="Locations" />
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
              return <LocationCard key={item.name} name={item.name} type={item.type} dimension={item.dimension} />
            })}
          </>
        }
      </ScrollView>
      {(data.length == 0) ? null : <StyledFooter testID='pagination'>
        {(data.info.prev) ? <PaginationButton testID="prev-button" title="Prev" action={() => {
          setData('')
          setUrl(data.info.prev)
        }} /> : null}
        <Description>Page {(data.info.next.charAt(data.info.next.length - 1)) - 1} of {data.info.pages}</Description>
        {(data.info.next) ? <PaginationButton id="next button" testID="next-button" title="Next" action={() => {
          setData('')
          setUrl(data.info.next)
        }} /> : null}
      </StyledFooter>}
    </>

  )
}