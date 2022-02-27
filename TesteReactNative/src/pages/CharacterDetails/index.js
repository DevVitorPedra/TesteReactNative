import React, { useState, useEffect } from 'react'
import { ImageBackground, Text } from 'react-native'
import Header from '../../Widgets/header'
import Avatar from '../../components/avatar'
import Texts from '../../components/text'
import ScrollBackground from '../../components/background'
import ExpandedCard from '../../components/expanded-card'
import StyledFooter from '../../Widgets/footer'
export default function CharacterDetails({ route }) {

    const [data, setData] = useState('')

  const awaiting = async () => {
        const res = await fetch(route.params.url)
        const char = await res.json()
        setData(char)
    }

    useEffect(() => {
        awaiting()
    }, []);

    return (
        <>
        <ScrollBackground testID="scroll" contentContainerStyle={{ alignItems: 'center' }}>
            <>
                {(data.length == 0) ? <>
                    <ImageBackground testID='loading-image' style={{ flex: 1, width: 400, height: 400, paddingBottom: 10 }} source={{ uri: "https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg" }}></ImageBackground>
                    <Texts testID="loading-text">What Do You Want???</Texts>
                    <Texts testID="loading-text">Seriouslly???</Texts>
                </> :
                    (<>
                        <Header testID="header" title="Character" />

                        <Avatar testID="avatar"  url={data.image} />
                        <ExpandedCard testID="episode-card" style={{ marginBottom: 50 }}>
                            <Texts testID="text-name">{data.name}</Texts>
                            <Text testID="text">Specie</Text>
                            <Texts testID="text">{data.species}</Texts>
                            <Text testID="text">Status</Text>
                            <Texts testID="text">{data.status}</Texts>
                            <Text testID="text">Origin</Text>
                            <Texts testID="text">{data.origin.name}</Texts>
                            <Text testID="text">Last Seen</Text>
                            <Texts testID="text">{data.location.name}</Texts>
                        </ExpandedCard>

                    </>)}
            </>
        </ScrollBackground>
        <StyledFooter><Texts>VSP®</Texts></StyledFooter>
        </>
    )
}
