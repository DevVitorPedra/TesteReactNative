import React, {useState, useEffect} from 'react'
import ScrollBackground from '../../components/background'
import { ImageBackground } from 'react-native'
import ScreenDescription from '../../widgets/screendescription'
import Character from '../../widgets/character'
import PaginationButton from '../../components/pagination-button'
import StyledFooter from '../../widgets/footer'
import Description from '../../components/description'
import Texts from '../../components/text'
import { getData } from '../../utils/functions'

export default function Characters({navigation}) {
  const [data, setData] = React.useState([])
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')



  useEffect(() => {
    console.log('Characters')
    getData(url,setData)
  }, [url]);
  return (
    <>
    <ScreenDescription title="Characters"/>
    <ScrollBackground>
      {(data.length == 0)?
      <>
      <ImageBackground testID='loading-image' style={{ flex: 1, width: 400, height: 400, paddingBottom: 10 }} source={{ uri: "https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg" }}></ImageBackground>
      <Texts >Hold on!!!</Texts>
      <Texts >We're loading!!!</Texts>
      </>  
      : 
      <>
      {data.results.map((item)=>{
        return <Character testID='characters' key={item.url} navigation={navigation} url={item.url} />
      })}
      </>
    }
    </ScrollBackground>
    {(data.length == 0)?null : <StyledFooter>
      {(data.info.prev)? <PaginationButton title="prev" action={()=>{
        setData('')
        setUrl(data.info.prev)
      }}/>:null}
           <Description>Page {(data.info.next.charAt(data.info.next.length-1))-1} of {data.info.pages}</Description>
        {(data.info.next) ? <PaginationButton id="next button" testID="next-button" title="Next" action={() => {
          setData('')
          setUrl(data.info.next)
        }} /> : null}
    </StyledFooter> }
    </>
  )
}
