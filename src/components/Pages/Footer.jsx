import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.200" py={4}>
      <Flex align="center" justify="center">
        <Text fontSize={{ base: "xs", lg: "lg" }}>
          Copyright © {new Date().getFullYear()} Aditya Dwi Nandra. All rights
          reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
