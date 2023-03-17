import { Flex,Input,Text,Icon,HStack, Box, Avatar, useBreakpointValue, IconButton } from "@chakra-ui/react";
import{RiSearchLine, RiNotificationLine,RiUserAddLine, RiMenLine, RiMenuLine} from 'react-icons/ri'
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { useSideBarContext } from '../../context/SideBarDrawerContext';

export function Header(){
  const isWideVersion=useBreakpointValue({
    base:false,
    lg:true
  })
  const {onOpen} = useSideBarContext()
  return(
    <Flex as ="header" w="100%" maxWidth="1440px" h="20" mx="auto" mt="4" align="center" px="6">
      {!isWideVersion && (
        <IconButton aria-label="open navigation"
        icon={<Icon as={RiMenuLine}/>}
        fontSize="24"
        variant="unstyled"
        mr="2"
        onClick={onOpen}>
          
        </IconButton>
      )}
      <Logo/>
      {isWideVersion && <SearchBox/> }
    
      <Flex 
      align="center"
      ml="auto"
      >
      <NotificationNav/>
      <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}