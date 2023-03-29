import { ButtonActon } from '@/src/components/ButtonAction'
import { Header } from '@/src/components/Header'
import { Title } from '@/src/components/Heading'
import { Pagination } from '@/src/components/Pagination'
import { SideBar } from '@/src/components/SideBar'
import { useUsers } from '@/src/service/hooks/useUsers'
import { Box, Checkbox, Flex, Text, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue, Spinner } from '@chakra-ui/react';
import Link from 'next/link'
import React, { useState } from 'react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'


interface User {
  id: string,
  name: string,
  email: string,
  createAt: string
}

export default function User() {
  const [page, setPage] = useState(1)
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  const { data, isLoading, isFetching, error } = useUsers(page);



  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius="8" bg="gray.800" p={["6", "8"]}>
          <Flex mb="8" justify="space-between" align="center">
            <Title> Usuários
              {!isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4' />}
            </Title>
            <Link href="/users/create" passHref legacyBehavior>
              <ButtonActon icon={RiAddLine} fontsize="20" colorScheme="pink" title='Criar novo' />
            </Link>
          </Flex>
          {isLoading ?
            <Flex justify='center'>
              <Spinner />
            </Flex>
            : error ?
              <Flex justify='center'>Falha ao obter os dados do usuários</Flex>
              :
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["4", "4", "6"]} color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuários</Th>
                      {isWideVersion && <Th>Data de cadastro</Th>}
                      <Th width="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.users.map((user) => (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createAt}</Td>}
                        <Td>
                          <ButtonActon icon={RiPencilLine} fontsize="16" colorScheme="purple" title='Editar' />
                        </Td>
                      </Tr>
                    ))}

                  </Tbody>
                </Table>
                <Pagination totalCountRegister={data?.totalCount} currentPage={page} onPageChange={setPage} />
              </>
          }
        </Box>
      </Flex>

    </Box>
  )
}
