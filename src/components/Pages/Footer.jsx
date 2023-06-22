import { Container, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => (
  <Container as="footer" role="contentinfo" py="8" bg="#113F67" maxWidth="100%">
    {" "}
    <Flex justify="flex-end" align="center">
      <Flex>
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/adityadwinandra/"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          colorScheme="blackAlpha"
          size="lg"
          mx="1"
        />
        <IconButton
          as="a"
          href="https://github.com/adityadwin"
          aria-label="GitHub"
          icon={<FaGithub />}
          colorScheme="blackAlpha"
          size="lg"
          mx="1"
        />
        <IconButton
          as="a"
          href="https://www.instagram.com/adityadwn99_/"
          aria-label="Instagram"
          icon={<FaInstagram />}
          colorScheme="blackAlpha"
          size="lg"
          mx="1"
        />
      </Flex>
    </Flex>
    <Text fontSize="sm" color="#F3F9FB" textAlign="center">
      &copy; {new Date().getFullYear()} Aditya Dwi Nandra, All rights reserved.
    </Text>
  </Container>
);

export default Footer;
