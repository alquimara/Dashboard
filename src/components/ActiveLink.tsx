
import React,{cloneElement, ReactElement} from 'react'
import Link,{ LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface activeLinkProps extends LinkProps{
  children:ReactElement,
  iniciaHref?:boolean,

}

export function ActiveLink ({children,iniciaHref,...rest}:activeLinkProps) {

  let isActive = false
  const router = useRouter()
  if(iniciaHref && (router.asPath === rest.href || router.asPath === rest.as)){
    isActive= true
  }
  if(!iniciaHref && (router.asPath.startsWith(String(rest.href)))||router.asPath.startsWith(String( rest.as))){
    isActive= true

  }
  return (
    <Link {...rest} legacyBehavior>
      {cloneElement(children,{
        color:isActive ? 'pink.400' : 'gray.50'
      })}
    
    </Link>
  )
}
