import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const data = [
  {
    heading: "Belajar Dasar Pemrograman JavaScript",
    title: "Dicoding Indonesia",
    date: "11 June 2023",
    description:
      "Kelas ini ditujukan untuk individu yang ingin melangkah menjadi seorang Web Developer/Back-end developer menggunakan teknologi Node.js menggunakan standar kompetensi industri yang divalidasi oleh AWS. Di akhir kelas, siswa dapat menguasai dasar JavaScript untuk pengembangan aplikasi web menggunakan Node.Js.",
    buttonLink: "https://www.dicoding.com/certificates/MRZMQNWR0PYQ",
  },
  {
    heading: "Belajar Dasar Pemrograman Web",
    title: "Dicoding Indonesia",
    date: "11 June 2023",
    description:
      "Kelas ini membahas tuntas dasar HTML dan CSS sebagai tiga fondasi pembuatan website. Fondasi tersebut diperlukan untuk Anda yang ingin mengembangkan kemampuan pengembangan website ke tahap yang lebih lanjut. Disusun dan diverifikasi oleh tim expert Dicoding, materi yang disajikan terstruktur dan komprehensif.",
    buttonLink: "https://www.dicoding.com/certificates/QLZ9Q3N67Z5D",
  },
  {
    heading: "Meniti Karier sebagai Software Developer",
    title: "Dicoding Indonesia",
    date: "11 June 2023",
    description:
      "Kelas ditujukan bagi pemula yang ingin memulai kariernya di bidang Software Developer dengan mengacu pada standar kompetensi industri. Di akhir kelas, siswa dapat menyimpulkan dan memilih jalur karier yang sesuai dengan diri mereka beserta mengerti hal-hal yang harus mereka persiapkan untuk mencapai dan menjalani karier tersebut.",
    buttonLink: "https://www.dicoding.com/certificates/JLX1D9KV6Z72",
  },
  {
    heading: "Belajar Dasar Visualisasi Data",
    title: "Dicoding Indonesia",
    date: "14 June 2023",
    description:
      "Kelas ditujukan bagi pemula yang ingin memulai karirnya di bidang pengolahan data dengan mengacu pada standar kompetensi industri. Di akhir kelas, siswa dapat membuat sebuah visualisasi data yang efektif menggunakan Google Sheets sesuai teknik praktik terbaik industri, sehingga meningkatkan nilainya dalam berkarier sebagai Software Developer.",
    buttonLink: "https://www.dicoding.com/certificates/2VX3JK94JPYQ",
  },
  {
    heading: "Memulai Pemrograman Dengan Python",
    title: "Dicoding Indonesia",
    date: "16 June 2023",
    description:
      "Kelas ditujukan bagi pemula yang ingin belajar dasar bahasa pemrograman Python dengan mengacu pada standar industri. Di akhir kelas, siswa dapat membuat program Python dengan menggunakan IDE Jupyter Notebook, Google Colab, atau IBM Watson Studio.",
    buttonLink: "https://www.dicoding.com/certificates/EYX46GDM5PDL",
  },

  {
    heading: "Belajar Prinsip Pemrograman SOLID",
    title: "Dicoding Indonesia",
    date: "20 June 2023",
    description:
      "Kelas ini ditujukan bagi pemula yang ingin memahami bagaimana menuliskan kode yang baik dengan paradigma OOP (object-priented programming) dengan mengacu pada standar industri. Di akhir kelas, siswa dapat memahami kelima prinsip SOLID dan siap menerapkannya dalam mengembangkan aplikasi. ",
    buttonLink: "https://www.dicoding.com/certificates/ERZRG2K4WPYV",
  },
];

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDescription, setModalDescription] = useState("");

  const handleOpenModal = (description) => {
    setModalDescription(description);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box py={4} bg="#87C0CD">
      <Heading
        ml={{ base: "20px", md: "110px", lg: "110px" }}
        mt="10px"
        mb="30px"
        color="#113F67"
        fontSize={{ base: "4xl", lg: "5xl" }}
      >
        Courses
      </Heading>
      <Box
        maxW="90%"
        marginX="auto"
        display="grid"
        gridTemplateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
        gridTemplateRows={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
        gap={4}
      >
        {data.map((item, index) => (
          <Box key={index} bg="white" borderRadius="md" p={4} boxShadow="sm">
            <Heading as="h3" size="md" mb={2}>
              {item.heading}
            </Heading>
            <Text fontSize="lg" mb={2}>
              {item.title}
            </Text>
            <Text fontSize="sm" color="gray.500" mb={2}>
              {item.date}
            </Text>
            <Flex justify="center" mb="10px">
              <Button
                width={{ base: "80%", md: "80%", lg: "50%" }}
                mt={4}
                onClick={() => handleOpenModal(item.description)}
              >
                Baca deskripsi
              </Button>
            </Flex>

            <Flex justify="center">
              <Button
                colorScheme="blue"
                as="a"
                href={item.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                fontSize={{ base: "xs", md: "md", lg: "xl" }}
                width={{ base: "55%", md: "55%", lg: "35%" }}
              >
                Visit Course
              </Button>
            </Flex>
          </Box>
        ))}
      </Box>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Course Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg">{modalDescription}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Courses;
