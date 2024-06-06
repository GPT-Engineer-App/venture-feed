import { Box, Flex, Text, Link } from "@chakra-ui/react";

function Navbar() {
  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" color="white">
          Twitter Clone
        </Text>
        <Flex alignItems="center">
          <Link px={2} color="white" href="/">
            Home
          </Link>
          <Link px={2} color="white" href="/explore">
            Explore
          </Link>
          <Link px={2} color="white" href="/notifications">
            Notifications
          </Link>
          <Link px={2} color="white" href="/messages">
            Messages
          </Link>
          <Link px={2} color="white" href="/landing">
            Landing
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
