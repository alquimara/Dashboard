import { Box, Link, Stack,Text,Icon } from '@chakra-ui/react'
import{RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine} from 'react-icons/ri'
import React from 'react'
import { NavSection } from './NavSection'
import { NavLink } from './NavLink'


export function SideBar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
      <NavSection title='GERAL'>
        <NavLink icon={RiDashboardLine}>Dasboard</NavLink>
        <NavLink icon={RiContactsLine}>Usuário</NavLink>
      </NavSection>
      <NavSection title='AUTOMAÇÃO'>
        <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
      </Stack>
    </Box>
  )
}
