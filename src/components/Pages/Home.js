import {
  Grid,
  Center,
  Text,
  GridItem,
  Container,
  Box,
  Heading,
  Image,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Carousel from "./Carousel";
import { Homes } from "../Homes";
import { Experience } from "./Experience";
import Courses from "./Courses/Coruses";

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
          h={{ base: "101vh", md: "100vh", lg: "110vh" }}
          bg="#F3F9FB"
        >
          <Center>
            <Box maxW="40rem" mt={{ base: "30px", md: "50px", lg: "50px" }}>
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
                          "Graphic Designer",
                          "UI Designer",
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
                Perkenalkan, Saya Aditya Dwi Nandra seorang mahasiswa berusia 20
                tahun yang sedang menempuh pendidikan S1 Teknik Informatika di
                Universitas AKI Semarang, Saat ini saya berada di semester 6.
                Saya memiliki minat yang kuat dalam bidang frontend web
                development, dengan pemahaman dalam HTML, CSS, JavaScript serta
                Framework dan library seperti React, Bootstrap, Tailwind dan
                Chakra. Saya senang merancang tampilan antarmuka yang menarik
                dan responsif, desain yang estetis dengan fungsionalitas yang
                baik dalam setiap proyek yang saya kerjakan.
              </Text>
              <Homes />
            </Box>
          </Center>
        </GridItem>

        <GridItem
          w="100%"
          h={{ base: "60vh", md: "40vh", lg: "110vh" }}
          bg="#F3F9FB"
          position="relative"
        >
          <Center>
            <Image
              src="https://i.postimg.cc/ZK3Lbsmj/me.png"
              // src="https://i.postimg.cc/ZK3Lbsmj/me.png"
              alt="Profile"
              position="absolute"
              top={{ base: "35%", md: "10%", lg: "49%" }}
              left="50%"
              boxSize={{ base: "350px", md: "500px", lg: "500px" }}
              transform="translate(-50%, -50%)"
            />
          </Center>
        </GridItem>
      </Grid>
      <Experience />
      <Carousel />
      <Courses />
    </Container>
  );
};
