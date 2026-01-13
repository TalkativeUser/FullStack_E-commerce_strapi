import { Box, Button, Collapse, Flex, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";


const DashboardLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minH="100vh" >
      {/* Desktop Sidebar */}
      <Box display={{ base: "none", md: "block" }} borderRight={'1px'} borderColor={'#ffffff4f'}  >
        <Sidebar />
      </Box>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isOpen} onClose={onClose} />

      <Flex flex="1" direction="column">
        {/* Top Navbar */}
        <TopNavbar onOpen={onOpen} />

        {/* Page Content */}
        <Box flex="1" mt={'10'} p={6}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;


import {
  VStack,
  Text,
} from "@chakra-ui/react";
import {
  AtSignIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);

  return (
    <Box w="200px" color="white" p={5}>
      <VStack align="stretch" spacing={4}>

        {/* ===== Dashboard Parent ===== */}
        <HStack
          justify="space-between"
          cursor="pointer"
          onClick={() => setIsDashboardOpen(!isDashboardOpen)}
       
          borderRadius="md"
          _hover={{ bg: "gray.700" }}
        >
          <HStack >
            <AtSignIcon />
            <Text>Dashboard</Text>
          </HStack>

          <IconButton
            aria-label="toggle"
            icon={isDashboardOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            size="sm"
            variant="ghost"
            color="white"
            _hover={{ bg: "transparent" }}
          />
        </HStack>

        {/* ===== Nested Links ===== */}
        <Collapse in={isDashboardOpen} animateOpacity>
          <VStack align="stretch" spacing={2} pl={8}>
            <NavLink to="/dashboard/products">
              <Text _hover={{ color: "blue.300" }}>Products</Text>
            </NavLink>

            <NavLink to="/dashboard/categories">
              <Text _hover={{ color: "blue.300" }}>Categories</Text>
            </NavLink>

            <NavLink to="/dashboard/brands">
              <Text _hover={{ color: "blue.300" }}>Brands</Text>
            </NavLink>
          </VStack>
        </Collapse>

        {/* ===== Other Links ===== */}
        <NavLink to="/users">
          <HStack spacing={3}>
            <AtSignIcon />
            <Text>Users</Text>
          </HStack>
        </NavLink>

        <NavLink to="/settings">
          <HStack spacing={3}>
            <SettingsIcon />
            <Text>Settings</Text>
          </HStack>
        </NavLink>

      </VStack>
    </Box>
  );
};





import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";


const MobileSidebar = ({ isOpen, onClose }: any) => {
  return (
    <Drawer  isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay   />
      <DrawerContent w={"230px!important"}  >
        <DrawerCloseButton />
        <DrawerBody   p={0}>
          <Sidebar />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};


import {

  IconButton,
  Avatar,
  HStack,

} from "@chakra-ui/react";
import { HamburgerIcon, BellIcon } from "@chakra-ui/icons";

const TopNavbar = ({ onOpen }: any) => {
  return (
    <Flex
      h="80px"
      px={6}
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="#ffffff4f"
    >
      {/* Menu Icon (Mobile only) */}
      <IconButton
        display={{ base: "flex", md: "none" }}
        icon={<HamburgerIcon  />}
        aria-label="Open Menu"
        onClick={onOpen}
        bg={'#1a202c'}
       _hover={{}}

      />

      <Box />

      {/* Right Icons */}
      <HStack spacing={4}>
        <BellIcon boxSize={5} />
        <Avatar size="sm" />
      </HStack>
    </Flex>
  );
};


import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

} from '@chakra-ui/react'
import { useState } from "react";

const DropDawon = () => {
  return (
 <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
  )
}
