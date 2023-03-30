
import { Header } from '@/src/components/Header'
import { Title } from '@/src/components/Heading'
import { InputComponent } from '@/src/components/Input'
import { SideBar } from '@/src/components/SideBar'
import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { api } from '@/src/service/api'
import { queryClient } from '@/src/service/queryClient'
import { useRouter } from 'next/router'



type createProps = {
  name: string
  email: string,
  password: string,
  password_confirm: string

}
const createSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No minimo 6 caracteres'),
  password_confirm: yup.string().oneOf([
    null,
    yup.ref("password")

  ], "As senhas precisam ser iguais")

})


export default function create() {
  const [user, setUser] = useState<createProps>()
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createSchema)
  })
  const { errors } = formState
  const router = useRouter();
  const createUser = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        create_at: new Date()
      }

    })
    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users') //invalida a query depois que um usuario é criado

    }
  })



  const handleCreateUser: SubmitHandler<createProps> = async (values) => {
    await createUser.mutateAsync(values)
    router.push('/users')
  }
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth="1480px" mx="auto" px="6">
        <SideBar />
        <Box flex="1" borderRadius="8" bg="gray.800" p={["6", "8"]} as="form" onSubmit={handleSubmit(handleCreateUser)}>
          <Title title='Criar usuário' />
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <InputComponent label='Nome Completo'{...register('name')} error={errors.name} />
              <InputComponent type="email" label='E-mail' {...register('email')} error={errors.email} />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%" >
              <InputComponent type="password" label='Senha' {...register('password')} error={errors.password} />
              <InputComponent type="password" label='Confirmação da senha' {...register('password_confirm')} error={errors.password_confirm} />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref legacyBehavior>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink" type='submit' isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>

          </Flex>

        </Box>

      </Flex>

    </Box>
  )
}
