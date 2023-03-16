import { Icon, Link ,Text, LinkProps as ChakraLinkProps} from '@chakra-ui/react'
import React, { ElementType } from 'react'


interface navlinkProps extends ChakraLinkProps{
  icon:ElementType,
  children: string

}

export function NavLink({icon,children,...rest}:navlinkProps){
  return (
    <Link display="flex" alignItems="center" {...rest}>
    <Icon as={icon} fontSize="20"/>
    <Text ml="4" fontWeight="medium">{children}</Text>
</Link>
  )
}

