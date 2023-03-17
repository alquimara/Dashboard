
import { Header } from '@/src/components/Header'
import { Title } from '@/src/components/Heading'
import { InputComponent } from '@/src/components/Input'
import { SideBar } from '@/src/components/SideBar'
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export default function create(){
  return (
    <Box>
      <Header/>
      <Flex  w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <SideBar/>
        <Box flex="1" borderRadius="8" bg="gray.800" p={["6","8"]}>
          <Title title='Criar usuário'/>
          <Divider my="6" borderColor="gray.700"/>
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <InputComponent name='name' label='Nome Completo'/>
              <InputComponent name='email' type="email" label='E-mail'/>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <InputComponent name='password'type="password" label='Senha'/>
              <InputComponent name='password_confirm' type="password" label='Confirmaão da senha'/>
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref legacyBehavior>
              <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>

          </Flex>

        </Box>

      </Flex>
      
    </Box>
  )
}
