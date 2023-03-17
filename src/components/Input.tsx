import React,{forwardRef, ForwardRefRenderFunction} from 'react'
import { Input, InputProps as ChakraInputProps, FormLabel, FormControl} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps{
  label?:string,
  name:string
}

export const InputBase:ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({label,name,...rest}:InputProps,ref)=> {
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
        ref={ref}
        {...rest}
        />
    </FormControl>

    
  )
}
export const InputComponent = forwardRef(InputBase);


