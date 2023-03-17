
import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { SideBarProvider } from '../context/SideBarDrawerContext';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SideBarProvider>
    <ChakraProvider theme={theme}>
   <Component {...pageProps} />
   </ChakraProvider>
   </SideBarProvider>
  )
}
