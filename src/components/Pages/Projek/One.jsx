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
import image1 from "../asset/images/WP/image1.png";
import image2 from "../asset/images/WP/image2.png";
import image3 from "../asset/images/WP/image3.png";
import image4 from "../asset/images/WP/image4.png";
import image5 from "../asset/images/WP/image5.png";
import image6 from "../asset/images/WP/image6.png";
import image7 from "../asset/images/WP/image7.png";
export const One = () => {
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
    {
      img: image7,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
    {
      img: image6,
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
                    Build an E-commerce Website with Wordpress
                  </Heading>
                  <Text fontSize={{ base: "xl", lg: "2xl" }}>
                    Final semester assignment
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "lg" }}>
                    May - Juli 2023
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
              Tugas akhir semester 6 Mata kuliah E-Bisnis kami adalah membuat
              sebuah website e-commerce menggunakan platform WordPress. Tim kami
              terdiri dari 3 orang yang bekerja sama untuk merancang dan
              mengembangkan situs ini. Melalui proyek ini, kami bertujuan untuk
              menciptakan sebuah platform yang memungkinkan pengguna untuk
              membeli dan menjual produk secara online dengan mudah dan aman.
            </Text>
            <Text fontSize={{ base: "sm", lg: "lg" }} mt="30px">
              Dalam pengembangan website e-commerce kami, kami fokus pada desain
              yang menarik dan responsif agar pengguna dapat mengakses situs
              dengan nyaman melalui berbagai perangkat. Kami juga memperhatikan
              integrasi yang baik dengan sistem pembayaran online dan
              pengelolaan inventaris. Fitur-fitur seperti keranjang belanja,
              pencarian produk, ulasan pengguna.
            </Text>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
