import {
  Image,
  Center,
  Text,
  GridItem,
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
export const Homes = () => {
  return (
    <GridItem mt="30px" w="95% " ml={{ base: "15px", md: "46px", lg: "46px" }}>
      <Heading
        fontSize={{ base: "xs", md: "xl", lg: "xl" }}
        color="gray.700"
        mb="10px"
      >
        Skills
      </Heading>
      <SimpleGrid
        minChildWidth="5px"
        spacing="0px"
        templateColumns={{
          base: "repeat(5, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        gap={5}
      >
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
              alt="Icon 1"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>HTML</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
              alt="Icon 2"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>CSS</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
              alt="Icon 3"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>
              Javascript
            </Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
              alt="Icon 4"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>Python</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
              alt="Icon 5"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>React</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/919/919825.png"
              alt="Icon 6"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>Node</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://camo.githubusercontent.com/3b6aa33b897ecdf82b578f52a5a30ded5ab3f9b3b5d86886e61db49e141424c6/68747470733a2f2f63646e2e67756473656e2e636f6d2f323032312f30392f33302f61663930626163383061393434376631383135366532353165636263316466662e706e67"
              alt="Icon 7"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>Vite</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/919/919836.png"
              alt="Icon 8"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>MySQL</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <a href="https://github.com/adityadwin">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                alt="Icon 9"
                boxSize={{ base: "20px", md: "30px", lg: "30px" }}
                ransition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
              />
            </a>
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>GitHub</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <a href="https://gitlab.com/adityadwin1">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/5968/5968853.png"
                alt="Icon 10"
                boxSize={{ base: "20px", md: "30px", lg: "30px" }}
                ransition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.2)" }}
              />
            </a>
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>GitLab</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
              alt="Icon 11"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>Bootstrap</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png?20211001194333"
              alt="Icon 12"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>Tailwind</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/5968/5968520.png"
              alt="Icon 13"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>Photoshop</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/5611/5611037.png"
              alt="Icon 14"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>
              Illustrator
            </Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
              alt="Icon 15"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>Figma</Text>
          </Center>
        </Box>{" "}
        <Box>
          <Center>
            <Image
              src="https://seeklogo.com/images/C/corel-draw-2020-logo-270FEE465B-seeklogo.com.png"
              alt="Icon 16"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>CorelDraw</Text>
          </Center>
        </Box>
        <Box>
          <Center>
            <Image
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/canva-icon.svg"
              alt="Icon 17"
              boxSize={{ base: "20px", md: "30px", lg: "30px" }}
              ransition="transform 0.3s ease-in-out"
              _hover={{ transform: "scale(1.2)" }}
            />
          </Center>
          <Center>
            <Text fontSize={{ base: "xs", md: "xl", lg: "xl" }}>Canva</Text>
          </Center>
        </Box>
      </SimpleGrid>
    </GridItem>
  );
};
