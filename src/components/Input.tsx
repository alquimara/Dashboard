import React from 'react'
import {Input,InputProps as ChakraInputProps,  FormLabel,FormControl } from '@chakra-ui/react'

interface InputProps extends ChakraInputProps{
  label?:string,
  name:string
}

export function InputComponent({label,name,...rest}:InputProps) {
  return (
    <FormControl>
      { label && <FormLabel htmlFor={name}>{label}</FormLabel>}
        <Input
        id={name} 
        name={name} 
        type={name}
        focusBorderColor='pink.500'
        bgColor="gray.900"
        variant="filled"
        {...rest}
        />
    </FormControl>

    
  )
}


