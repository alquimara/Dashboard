import { Icon, Link as ChakraLinks,Text, LinkProps as ChakraLinkProps} from '@chakra-ui/react'
import Link from 'next/link'
import React, { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink'


interface navlinkProps extends ChakraLinkProps{
  icon:ElementType,
  children: string,
  href:string

}

export function NavLink({icon,children,href,...rest}:navlinkProps){
  return (
    <ActiveLink href={href} passHref legacyBehavior>
      <ChakraLinks display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20"/>
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLinks>
    </ActiveLink>
  )
}

