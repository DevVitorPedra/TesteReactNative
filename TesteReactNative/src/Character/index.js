import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native'
import { StyledEpisodeCard } from '../Details/style'
import { StyledText } from '../components/card/style'
import { StyledCharAvatar } from './style'
import Avatar from '../components/avatar'

export default function Character({ navigation, url }) {
  
  const [data, setData] = useState('')

  const awaiting = async () => {
    const res = await fetch(url)
    const char = await res.json()
    setData(char)
  }

  useEffect(() => {
    awaiting()
  }, []);

  return (
    <Pressable testID='pressable' onPress={() => navigation.navigate('CharacterDetails', { url: url })}>
      <StyledEpisodeCard testID='episode-card'>
        <Avatar testID="avatar" url={data.image}/>
        <StyledText testID="text-name">{data.name}</StyledText>
      </StyledEpisodeCard>
    </Pressable>
  )
}
