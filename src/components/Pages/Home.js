import {
  Grid,
  Center,
  Text,
  GridItem,
  Container,
  Box,
  Heading,
} from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Carousel from "./Carousel";
import { Homes } from "../Homes";

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
                Perkenalkan, Saya Aditya Dwi Nandra seorang mahasiswa berusia 20
                tahun yang sedang menempuh pendidikan di Universitas AKI
                Semarang, mengambil jurusan Teknik Informatika. Saat ini berada
                di semester 6 dan memiliki IPK sebesar 3.35. Saya memiliki minat
                yang kuat dalam bidang frontend web development, dengan keahlian
                dalam HTML, CSS, dan JavaScript. Saya senang merancang tampilan
                antarmuka yang menarik dan responsif, desain yang estetis dengan
                fungsionalitas yang baik dalam setiap proyek yang saya kerjakan.
              </Text>

              <Homes />
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
