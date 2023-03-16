import { Button } from '@chakra-ui/react'
import React from 'react'



interface paginationProps{
  iscurrent?: boolean,
  number:number


}
export function PaginationItem ({iscurrent=false,number}:paginationProps) {
  if(iscurrent){
    return(
      <Button size="sm" fontSize="xs" width="4" colorScheme="pink" disabled _disabled={{
        bg:'pink.500',
        cursor:'default'
      }}>
        {number}
      </Button>
  )
}
  return(
    <Button size="sm" fontSize="xs" width="4" colorScheme="gray.700"  _hover={{
      bg:'gray.500'
    }}>
      {number}
    </Button>
)
}
