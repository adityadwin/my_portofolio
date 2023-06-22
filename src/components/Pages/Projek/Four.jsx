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
import image1 from "../asset/images/DC/image1.png";

export const Four = () => {
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
                    Belajar Membuat Front-End Web untuk Pemula | Bookshelf Apps
                  </Heading>
                  <Text fontSize={{ base: "xl", lg: "2xl" }}>
                    Dicoding Indonesia
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "lg" }}>Juli 2023</Text>
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
              Program aplikasi Bookshelf yang memungkinkan pengguna untuk
              menambahkan buku baru ke dalam rak buku, mencari buku berdasarkan
              judul, mengubah status buku (selesai dibaca/belum selesai dibaca),
              dan menghapus buku. Aplikasi ini memiliki tampilan antarmuka
              pengguna yang terdiri dari beberapa bagian, termasuk bagian untuk
              memasukkan buku baru, mencari buku, dan menampilkan daftar buku
              yang belum selesai dibaca dan buku yang sudah selesai dibaca.
              Pengguna dapat mengisi formulir dengan judul, penulis, tahun, dan
              status buku, kemudian menambahkannya ke rak buku. Selain itu,
              pengguna juga dapat mencari buku berdasarkan judul, mengubah
              status buku, dan menghapus buku dari rak. Aplikasi ini menggunakan
              JavaScript untuk mengelola logika program dan menyimpan data buku
              ke dalam penyimpanan lokal (localStorage). Tampilan antarmuka
              aplikasi ini menggunakan HTML dan CSS untuk mengatur tata letak
              dan gaya penampilan.
            </Text>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
