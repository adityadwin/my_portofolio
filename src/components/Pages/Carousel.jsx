import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { One } from "./Projek/One";
import { Two } from "./Projek/Two";
import { Three } from "./Projek/Three";
import { Four } from "./Projek/Four";
import { Five } from "./Projek/Five";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [<One />, <Two />, <Three />, <Four />, <Five />];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const buttonSize = useBreakpointValue({ base: "xs", md: "md" });
  const paginationSize = useBreakpointValue({ base: "3", md: "8" });

  return (
    <Box py={4} bg="#F3F9FB">
      <Heading
        ml={{ base: "50px", md: "110px", lg: "110px" }}
        mt="10px"
        mb="30px"
        color="#113F67"
      >
        Projects
      </Heading>
      <Center>
        <Flex alignItems="center">
          <Button size={buttonSize} onClick={handlePrev}>
            Previous
          </Button>
          {items.map((item, index) => (
            <Box
              key={index}
              mx={2}
              h={paginationSize}
              w={paginationSize}
              borderRadius="full"
              bg={activeIndex === index ? "blue.500" : "gray.200"}
              cursor="pointer"
              onClick={() => setActiveIndex(index)}
            />
          ))}
          <Button size={buttonSize} onClick={handleNext}>
            Next
          </Button>
        </Flex>
      </Center>
      <Center>
        <Text mt={4}>{items[activeIndex]}</Text>
      </Center>
    </Box>
  );
};

export default Carousel;
