import React, { useEffect, useState } from 'react'
import { Pressable } from 'react-native'

import Texts from '../../components/text'
import Avatar from '../../components/avatar'

import ExpandedCard from '../../components/expanded-card'

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
      <ExpandedCard testID='expanded-card'>
      <Avatar testID="avatar" url={data.image}/>
        <Texts testID="text-name">{data.name}</Texts>
      </ExpandedCard>
    </Pressable>
  )
}
