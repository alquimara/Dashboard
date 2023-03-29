import React,{ReactNode} from 'react'
import { Heading} from '@chakra-ui/react'

interface headingProps{
  children:ReactNode
}

export function Title({children}:headingProps){
  return (
    <Heading size="lg" fontWeight="normal">
    {children}
  </Heading>
  )
}
