import { Button, Icon, ButtonProps as chakraButtonProps } from '@chakra-ui/react'
import React, { ElementType ,ReactNode} from 'react'

interface buttonProps extends chakraButtonProps{
  icon:ElementType,
  fontsize:string,
  children:ReactNode

}

export function ButtonActon({icon, fontsize, children,...rest}:buttonProps) {
  return (
    <Button  as="a" size="sm" fontSize="sm"  leftIcon={<Icon fontSize={fontsize} as={icon}/>} {...rest}>
   {children}
  </Button>
  )
}
