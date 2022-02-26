import React, { useState, useEffect } from 'react'
import { ImageBackground, Text } from 'react-native'
import { StyledCharAvatar } from '../Character/style'
import { StyledCharacterCard } from './style'
import { StyledEpisodeCard } from '../components/card/style'
import { StyledText } from '../components/card/style'
import Header from '../components/header'
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
        <StyledCharacterCard testID="scroll" contentContainerStyle={{ alignItems: 'center' }}>
            <>
                {(data.length == 0) ? <>
                    <ImageBackground testID='loading-image' style={{ flex: 1, width: 400, height: 400, paddingBottom: 10 }} source={{ uri: "https://www.looper.com/img/gallery/the-surprising-reason-rick-and-morty-fans-petitioned-the-show/l-intro-1623971871.jpg" }}></ImageBackground>
                    <StyledText testID="loading-text">What Do You Want???</StyledText>
                    <StyledText testID="loading-text">Seriouslly???</StyledText>
                </> :
                    (<>
                        <Header testID="header" title="Character" />

                        <StyledCharAvatar testID="avatar" style={{ width: 220, height: 220, borderRadius: 125 }} source={{ uri: data.image }} />
                        <StyledEpisodeCard testID="episode-card" style={{ marginBottom: 50 }}>
                            <StyledText testID="text-name">{data.name}</StyledText>
                            <Text testID="text">Specie</Text>
                            <StyledText testID="text">{data.species}</StyledText>
                            <Text testID="text">Status</Text>
                            <StyledText testID="text">{data.status}</StyledText>
                            <Text testID="text">Origin</Text>
                            <StyledText testID="text">{data.origin.name}</StyledText>
                            <Text testID="text">Last Seen</Text>
                            <StyledText testID="text">{data.location.name}</StyledText>
                        </StyledEpisodeCard>

                    </>)}
            </>
        </StyledCharacterCard>
    )
}
