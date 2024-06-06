import { Box, Heading, Text } from "@chakra-ui/react";

function LandingPage() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Welcome to the Future of Innovation
      </Heading>
      <Text fontSize="lg">Discover the next cutting edge, unicorns, and moonshot products built by people in the community.</Text>
    </Box>
  );
}

export default LandingPage;
