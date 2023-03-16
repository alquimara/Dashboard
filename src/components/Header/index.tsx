import { Flex,Input,Text,Icon,HStack, Box, Avatar } from "@chakra-ui/react";
import{RiSearchLine, RiNotificationLine,RiUserAddLine} from 'react-icons/ri'
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header(){
  return(
    <Flex as ="header" w="100%" maxWidth="1440px" h="20" mx="auto" mt="4" align="center" px="6">
      <Logo/>
      <SearchBox/>
      <Flex 
      align="center"
      ml="auto"
      >
      <NotificationNav/>
      <Profile/>
      </Flex>
    </Flex>
  )
}