import { Avatar, Box, Flex,Text } from '@chakra-ui/react'
import React from 'react'

interface profileProps{
  showProfileData?: boolean
}
export function Profile({showProfileData=true}:profileProps){
  return (
    <Flex align="center">
        {showProfileData && 
        <Box mr="4" textAlign="right">
          <Text>Alquimara Alves</Text>
          <Text color="gray.300" fontSize="small">alquimara.a.braz@gmail.com</Text>
        </Box>}
        <Avatar size="md" name="Alquimara Alves" src="https://github.com/alquimara.png"/>
      </Flex>
  )
}

