import {
  CardBody,
  Text,
  HStack,
  CardHeader,
  Heading,
  Card,
  Flex,
  Center,
  Image,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import image1 from "../asset/images/YGO/image1.png";
import image2 from "../asset/images/YGO/image2.png";

export const Two = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const slides = [
    {
      img: image1,
    },
    {
      img: image2,
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Box py={4} bg="#F3F9FB">
      <Center>
        <Card maxW={{ base: "90%", md: "70%", lg: "70%" }} boxShadow="lg">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading fontSize={{ base: "2xl", lg: "3xl" }}>
                    Website Yu-Gi-Oh Card Deck
                  </Heading>
                  <Text fontSize={{ base: "xl", lg: "2xl" }}>
                    Final Project MSIB Ruang Guru
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "lg" }}>
                    September 2022
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody boxShadow="lg">
            <Flex w="full" alignItems="center" justifyContent="center">
              <Flex w="full" overflow="hidden" pos="relative">
                <Flex h="unset" w="full" {...carouselStyle}>
                  {slides.map((slide, sid) => (
                    <Box
                      key={`slide-${sid}`}
                      boxSize="full"
                      shadow="md"
                      flex="none"
                    >
                      <Text
                        color="white"
                        fontSize="xs"
                        p="8px 12px"
                        pos="absolute"
                        top="0"
                        bg="blackAlpha.800"
                      >
                        {sid + 1} / {slidesCount}
                      </Text>
                      <Image
                        src={slide.img}
                        alt="carousel image"
                        boxSize="full"
                        backgroundSize="cover"
                      />
                    </Box>
                  ))}
                </Flex>
                <Text
                  {...arrowStyles}
                  left="0"
                  onClick={prevSlide}
                  bg="blackAlpha.400"
                >
                  &#10094;
                </Text>
                <Text
                  {...arrowStyles}
                  right="0"
                  onClick={nextSlide}
                  bg="blackAlpha.400"
                >
                  &#10095;
                </Text>
                <HStack justify="center" pos="absolute" bottom="8px" w="full">
                  {Array.from({
                    length: slidesCount,
                  }).map((_, slide) => (
                    <Box
                      key={`dots-${slide}`}
                      cursor="pointer"
                      boxSize={["7px", null, "15px"]}
                      m="0 2px"
                      bg={
                        currentSlide === slide
                          ? "blackAlpha.800"
                          : "blackAlpha.500"
                      }
                      rounded="50%"
                      display="inline-block"
                      transition="background-color 0.6s ease"
                      _hover={{
                        bg: "blackAlpha.800",
                      }}
                      onClick={() => setSlide(slide)}
                    ></Box>
                  ))}
                </HStack>
              </Flex>
            </Flex>

            <Text fontSize={{ base: "sm", lg: "lg" }} mt="30px">
              Salah satu Final project dalam kegiatan MSIB Studi Independen
              Ruang Guru adalah membuat sebuah website YU-Gi-Oh menggunakan
              RestAPI dan mengimplementasikan asynchronous dengan ReactJS.
              Website ini memiliki fitur filter untuk memudahkan pengguna dalam
              mencari kartu-kartu YU-Gi-Oh yang diinginkan, serta menampilkan
              detail kartu secara lengkap saat diklik. Melalui penggunaan
              teknologi ReactJS dan RestAPI, proyek ini memberikan pengalaman
              interaktif yang menyenangkan bagi penggemar YU-Gi-Oh untuk
              menjelajahi dunia kartu tersebut.
            </Text>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
