import { ButtonActon } from '@/src/components/ButtonAction'
import { Header } from '@/src/components/Header'
import { Title } from '@/src/components/Heading'
import { Pagination } from '@/src/components/Pagination'
import { SideBar } from '@/src/components/SideBar'
import { Box, Checkbox, Flex, Text, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link'
import React from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function User(){
  const isWideVersion= useBreakpointValue({
    base:false,
    lg: true
  })
  return (
    <Box>
      <Header/>
      <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <SideBar/>
        <Box flex="1" borderRadius="8" bg="gray.800" p={["6","8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Title title='Usuários'/>
            <Link href="/users/create" passHref>
            <ButtonActon icon={RiAddLine} fontsize="20" colorScheme="pink">Criar novo</ButtonActon>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink"/>
                </Th>
                <Th>Usuários</Th>
                { isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4","4","6"]}>
                <Checkbox colorScheme="pink"/>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Alquimara ALves</Text>
                    <Text fontSize="sm" color="gray.300">alquimara.a.braz@gmail.com</Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>15 de março de 2023</Td>}
                <Td>
                  <ButtonActon icon={RiPencilLine} fontsize="16" colorScheme="purple">Editar</ButtonActon>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination/>
        </Box>
      </Flex>
      
    </Box>
  )
}
