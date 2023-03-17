import React from 'react'
import { Heading} from '@chakra-ui/react'

interface headingProps{
  title:string
}

export function Title({title}:headingProps){
  return (
    <Heading size="lg" fontWeight="normal">
    {title}
  </Heading>
  )
}
