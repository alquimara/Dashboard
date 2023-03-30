
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SideBarProvider } from '../context/SideBarDrawerContext';
import { makeServer } from '../service/mirage';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../service/queryClient';

if (process.env.NODE_ENV === 'development') {
  makeServer();

}

export default function App({ Component, pageProps }: AppProps) {

  return (
    <QueryClientProvider client={queryClient}>
      <SideBarProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SideBarProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
