import {
  Grid,
  Image,
  Center,
  Text,
  GridItem,
  Container,
  Box,
  Heading,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

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
          h={{ base: "50vh", md: "100vh", lg: "100vh" }}
          bg="#F3F9FB"
        >
          <Center>
            <Box maxW="40rem" mt={{ base: "100px", md: "300px", lg: "150px" }}>
              <Heading
                noOfLines={1}
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                color="#113F67"
                as="b"
              >
                My Name is,
              </Heading>
              <Text
                fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
                color="#113F67"
                as="b"
              >
                Aditya Dwi Nandra
              </Text>
              <Text
                fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
                color="#113F67"
                display="flex"
                alignItems="center"
                gap={3}
              >
                I&apos;m
                <Text
                  fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
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
            </Box>
          </Center>
        </GridItem>

        <GridItem
          w="100%"
          h={{ base: "50vh", md: "100vh", lg: "100vh" }}
          bg="#F3F9FB"
          position="relative"
        >
          <Center>
            <Image
              src="https://i.postimg.cc/Kj6nVm9t/me.png"
              alt="MYSQL"
              position="absolute"
              top={{ base: "37%", md: "55%", lg: "49%" }}
              left="50%"
              boxSize={{ base: "300px", md: "500px", lg: "500px" }}
              transform="translate(-50%, -50%)"
            />
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

      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(1, 1fr)",
          lg: "repeat(1, 1fr)",
        }}
      >
        <Center>
          <GridItem
            w="100%"
            h={{ base: "75vh", md: "75vh", lg: "75vh" }}
            bg="#87C0CD"
          >
            <Heading
              textAlign="start"
              ml={{ base: "50px", md: "70px", lg: "100px" }}
              mt="25px"
              fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
              color="#113F67"
              mb="50px"
            >
              Skils
            </Heading>
            <Grid
              templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }}
              gap={50}
              justifyItems="center"
              alignItems="center"
            >
              {/* Icon 1 */}
              <Image
                src="https://cdn-icons-png.flaticon.com/128/174/174854.png"
                alt="Icon 1"
                boxSize={{ base: "70px", md: "100px", lg: "100px" }}
              />

              {/* Icon 2 */}
              <Image
                src="https://cdn-icons-png.flaticon.com/128/732/732190.png"
                alt="Icon 2"
                boxSize={{ base: "70px", md: "100px", lg: "100px" }}
              />

              {/* Icon 3 */}
              <Image
                src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                alt="Icon 3"
                boxSize={{ base: "70px", md: "100px", lg: "100px" }}
              />

              {/* Icon 4 */}
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"
                alt="Icon 4"
                boxSize={{ base: "70px", md: "100px", lg: "100px" }}
              />

              {/* Icon 5 */}
              <Image
                src="https://camo.githubusercontent.com/3b6aa33b897ecdf82b578f52a5a30ded5ab3f9b3b5d86886e61db49e141424c6/68747470733a2f2f63646e2e67756473656e2e636f6d2f323032312f30392f33302f61663930626163383061393434376631383135366532353165636263316466662e706e67"
                alt="Icon 5"
                boxSize={{ base: "70px", md: "100px", lg: "100px" }}
              />

              {/* Icon 5 */}
              <Image
                src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
                alt="Icon 5"
                boxSize={{ base: "70px", md: "100px", lg: "100px" }}
              />
            </Grid>
          </GridItem>
        </Center>
      </Grid>
    </Container>
  );
};
