import React,{forwardRef, ForwardRefRenderFunction} from 'react'
import { Input, InputProps as ChakraInputProps, FormLabel, FormControl, FormErrorMessage} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps{
  label?:string,
  name:string,
  error?: FieldError
}

export const InputBase:ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({label,name,error=null,...rest}:InputProps,ref)=> {
  return (
    <FormControl isInvalid={!!error}>
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
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>

    
  )
}
export const InputComponent = forwardRef(InputBase);


