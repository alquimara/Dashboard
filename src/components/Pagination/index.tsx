import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { PaginationItem } from './PaginationItem'

interface paginationProps {
  totalCountRegister: number,
  registerPerPage?: number,
  currentPage?: number,
  onPageChange: (page: number) => void

}
const siblingsCount = 1;
function generationPageArry(from: number, to: number) {
  return [...new Array(to - from)].map((_, index) => {
    return from + index + 1

  }).filter(page => page > 0)

}

export function Pagination({ totalCountRegister, registerPerPage = 10, currentPage = 1, onPageChange }: paginationProps) {

  const lastPage = Math.ceil(totalCountRegister / registerPerPage)

  const previousPage = currentPage > 1
    ?
    generationPageArry(currentPage - 1 - siblingsCount, currentPage - 1)
    :
    []
  const nextPage = currentPage < lastPage
    ?
    generationPageArry(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    :
    []



  return (
    <Stack direction={["column", "row"]} mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > (1 + siblingsCount) &&
          <>
            <PaginationItem number={1} onChangePage={onPageChange} />
            {currentPage > (2 + siblingsCount) && <Text color='gray.300' width='8' textAlign='center'>...</Text>}
          </>
        }
        {previousPage.length > 0 && previousPage.map(page => {
          return <PaginationItem key={page} number={page} onChangePage={onPageChange} />
        })}
        <PaginationItem number={currentPage} iscurrent onChangePage={onPageChange} />

        {nextPage.length > 0 && nextPage.map(page => {
          return <PaginationItem key={page} number={page} onChangePage={onPageChange} />
        })}

        {(currentPage + siblingsCount) < lastPage &&
          <>
            {(currentPage + 1 + siblingsCount) < lastPage && <Text color='gray.300' width='8' textAlign='center'>...</Text>}
            <PaginationItem number={lastPage} onChangePage={onPageChange} />
          </>

        }
      </Stack>
    </Stack>
  )
}
