import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { createContext,ReactNode, useContext, useEffect} from 'react'
interface SideBarDrawerContextProps{
  children:ReactNode;
}
type sideBarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({}as sideBarDrawerContextData)

export function SideBarProvider ({children}:SideBarDrawerContextProps) {
  const disclosure = useDisclosure()
  const router = useRouter();
  useEffect(()=>{
    disclosure.onClose()

  },[router.asPath])
  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}
export const useSideBarContext =()=>useContext(SideBarDrawerContext)
