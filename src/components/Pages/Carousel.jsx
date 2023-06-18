import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Contact } from "./Contact";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    <Contact />,
    <Contact />,
    <Contact />,
    <Contact />,
    <Contact />,
    <Contact />,
    <Contact />,
    <Contact />,
    <Contact />,
    <Contact />,
  ];

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
    <Box py={4} bg="#87C0CD">
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
