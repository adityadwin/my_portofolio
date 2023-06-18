import {
  Grid,
  Image,
  Center,
  Text,
  GridItem,
  Container,
  Box,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Carousel from "./Carousel";

export const Home = () => {
  return (
    <Container maxW="unset" p="0">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={0}
      >
        <GridItem
          w="100%"
          h={{ base: "100vh", md: "100vh", lg: "100vh" }}
          bg="#F3F9FB"
        >
          <Center>
            <Box maxW="40rem" mt={{ base: "100px", md: "300px", lg: "100px" }}>
              <Heading
                noOfLines={1}
                fontSize={{ base: "5xl", md: "5xl", lg: "6xl" }}
                color="#113F67"
                as="b"
                ml={{ base: "20px", md: "20px", lg: "50px" }}
              >
                Hello,
                <Text
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  color="#113F67"
                  display="flex"
                  alignItems="center"
                  gap={3}
                >
                  I&apos;m
                  <Text
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    color="#226597"
                    as="b"
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "Student",
                          "Frontend Developer",
                          "UI Designer",
                          "Graphic Designer",
                          "Beatboxer",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 45,
                        delay: 90,
                        pauseFor: 500,
                      }}
                    />
                  </Text>
                </Text>
              </Heading>

              <Text
                pt="40px"
                fontSize={{ base: "xs", md: "xl", lg: "xl" }}
                ml={{ base: "20px", md: "20px", lg: "50px" }}
                mr={{ base: "20px", md: "20px", lg: "50px" }}
                noOfLines={(1, 10)}
              >
                Introducing, I am Aditya Dwi Nandra, a 20 years old student who
                is currently studying at AKI University Semarang. I am majoring
                in S1 Informatics Engineering and have a strong interest in the
                frontend field. I am interested and passionate about developing
                attractive and responsive user interfaces, as well as ensuring
                an optimal user experience through the use of HTML, CSS and
                programming language technologies such as JavaScript. I hope to
                continue learning and growing in this industry, and bring
                positive contributions in building great products and services.
              </Text>

              <GridItem
                mt="30px"
                w="95% "
                ml={{ base: "20px", md: "20px", lg: "45px" }}
              >
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

                    lg: "repeat(10, 1fr)",
                  }}
                  gap={5}
                >
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                        alt="Icon 1"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        transition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                        alt="Icon 2"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                        alt="Icon 3"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
                        alt="Icon 4"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
                        alt="Icon 5"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://camo.githubusercontent.com/3b6aa33b897ecdf82b578f52a5a30ded5ab3f9b3b5d86886e61db49e141424c6/68747470733a2f2f63646e2e67756473656e2e636f6d2f323032312f30392f33302f61663930626163383061393434376631383135366532353165636263316466662e706e67"
                        alt="Icon 6"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/919/919836.png"
                        alt="Icon 7"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
                        alt="Icon 8"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968853.png"
                        alt="Icon 9"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
                        alt="Icon 10"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png?20211001194333"
                        alt="Icon 11"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968520.png"
                        alt="Icon 12"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/5611/5611037.png"
                        alt="Icon 13"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png"
                        alt="Icon 14"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://seeklogo.com/images/C/corel-draw-2020-logo-270FEE465B-seeklogo.com.png"
                        alt="Icon 15"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                  <Box>
                    <Center>
                      <Image
                        src="https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/canva-icon.svg"
                        alt="Icon 16"
                        boxSize={{ base: "30px", md: "40px", lg: "40px" }}
                        ransition="transform 0.3s ease-in-out"
                        _hover={{ transform: "scale(1.2)" }}
                      />
                    </Center>
                  </Box>
                </SimpleGrid>
              </GridItem>
            </Box>
          </Center>
        </GridItem>

        <GridItem
          w="100%"
          h={{ base: "70vh", md: "100vh", lg: "100vh" }}
          bg="#F3F9FB"
          position="relative"
        >
          <Center>
            {/* <Image
              src="https://i.postimg.cc/Kj6nVm9t/me.png"
              alt="MYSQL"
              position="absolute"
              top={{ base: "37%", md: "55%", lg: "49%" }}
              left="50%"
              boxSize={{ base: "300px", md: "500px", lg: "500px" }}
              transform="translate(-50%, -50%)"
            /> */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#87C0CD"
                d="M36.7,-39.6C47.8,-25.5,57.3,-12.8,57.7,0.4C58.1,13.6,49.4,27.1,38.2,37.9C27.1,48.7,13.6,56.7,-3.6,60.3C-20.8,63.9,-41.6,63.2,-53,52.4C-64.5,41.6,-66.6,20.8,-65.6,1C-64.6,-18.8,-60.5,-37.6,-49,-51.6C-37.6,-65.7,-18.8,-75,-3,-72C12.8,-69,25.5,-53.7,36.7,-39.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </Center>
        </GridItem>
      </Grid>
      <Carousel />
    </Container>
  );
};
