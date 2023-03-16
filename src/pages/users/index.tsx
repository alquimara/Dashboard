import { Header } from '@/src/components/Header'
import { SideBar } from '@/src/components/SideBar'
import { Box, Button, Checkbox, Flex, Heading,Icon,Text, Table, Tbody, Td, Th, Thead,Tr } from '@chakra-ui/react'
import React from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function User(){
  return (
    <Box>
      <Header/>
      <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <SideBar/>
        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button  as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon fontSize="20" as={RiAddLine}/>}>
              Criar Novo
            </Button>

          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuários</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alquimara ALves</Text>
                    <Text fontSize="sm" color="gray.300">alquimara.a.braz@gmail.com</Text>
                  </Box>
                </Td>
                <Td>15 de março de 2023</Td>
                <Td>
                <Button  as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon fontSize="16" as={RiPencilLine}/>}>
                  Editar
                </Button>
                </Td>
              </Tr>

            </Tbody>

          </Table>

        </Box>
      </Flex>
      
    </Box>
  )
}
