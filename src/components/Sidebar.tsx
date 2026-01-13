import { Box, VStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      w="200px"
      color="white"
      p={5}
    >
      <Text fontSize="xl" fontWeight="bold" mb={6}>
        Admin Panel
      </Text>

      <VStack align="stretch" spacing={4}>
        <NavLink to="/">
          Dashboard
        </NavLink>

        <NavLink to="/users">
          Users
        </NavLink>

        <NavLink to="/settings">
          Settings
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
