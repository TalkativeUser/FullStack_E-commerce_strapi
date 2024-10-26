'use client'

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  // useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import cookieService from '../services/cookieService'
import {  useDispatch, useSelector } from 'react-redux'
import { cartSelector } from '../app/store'
import { onOpenCartDrawerAction } from '../app/features/globalSlice'

interface Props {
  children: React.ReactNode
}

const Links = ['Home', 'About', 'Products']


const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as={RouterLink}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      to={  typeof children === 'string' ? children.toLowerCase()==="home"?"/" : children.toLowerCase() :"/"  }
      
      >
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()  //  السطر ده مهم جدا جدا جدا عشان من خلاله بنظبط الدارك مود  ✅
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const isAuth =cookieService.get('jwt')
  const cartProducts=useSelector(cartSelector)
  function logOutMethod(){

    cookieService.remove('jwt')
    window.location.reload()
  }

  const dispatch=useDispatch()
  const onOpenDrawer=()=>  dispatch( onOpenCartDrawerAction())



  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <HStack spacing={8} alignItems={'center'}>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <RouterLink  to={'/'} > My App </RouterLink>

              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

                 {/*  this part for dark and ligt mode */}
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button onClick={onOpenDrawer} >

                Cart ( {cartProducts.length} )
              </Button>



          { isAuth?<Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={logOutMethod} >Logout</MenuItem>
                </MenuList>
              </Menu> :              <Box as={RouterLink} m={"auto"} to={'/login'}> Login </Box>
 }
             



            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

