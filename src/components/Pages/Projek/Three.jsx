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
import image1 from "../asset/images/AI/image1.png";
import image2 from "../asset/images/AI/image2.png";

export const Three = () => {
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
        <Card maxW={{ base: "90%", md: "70%", lg: "70%" }} boxShadow="none">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading fontSize={{ base: "2xl", lg: "3xl" }}>
                    Deteksi Rempah-rempah dengan Deep Learning: Klasifikasi
                    Gambar Menggunakan TensorFlow dan Flask
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
              Program di atas menggunakan bahasa pemrograman Python dan
              memanfaatkan library TensorFlow dan Keras untuk membangun model
              jaringan saraf konvolusi (CNN) yang dapat melakukan klasifikasi
              gambar rempah-rempah menjadi 3 kelas: Jahe, Kunyit, dan Lengkuas.
              Program ini menggunakan Google Colab sebagai lingkungan
              pengembangan dan melibatkan proses pengolahan data, pelatihan
              model, serta prediksi menggunakan data gambar. Hasil prediksi
              gambar ditampilkan dengan akurasi dan kelas yang terdeteksi.
              Selain itu, program ini juga memiliki antarmuka web menggunakan
              Flask, di mana pengguna dapat mengunggah gambar dan melihat hasil
              prediksinya melalui halaman web yang telah ditentukan.
            </Text>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
