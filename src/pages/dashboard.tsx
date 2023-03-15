import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Header} from '../components/Header'
import { SideBar } from '../components/SideBar'

export default function dashboard() {
  return (
    <>
    <Head>
      <title>Dashboard</title>
    </Head>
    <Flex direction="column" h="100vh">
      <Header/>
      <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <SideBar/>
      </Flex>
    
    </Flex>
    
    </>
  )
}





