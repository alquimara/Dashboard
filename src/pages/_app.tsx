
import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SideBarProvider } from '../context/SideBarDrawerContext';
import { makeServer } from '../service/mirage';
import { QueryClient,QueryClientProvider } from 'react-query';

if(process.env.NODE_ENV === 'development') {
  makeServer();

}

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return(
    <QueryClientProvider client={queryClient}>
    <SideBarProvider>
    <ChakraProvider theme={theme}>
   <Component {...pageProps} />
   </ChakraProvider>
   </SideBarProvider>
   </QueryClientProvider>
  )
}
