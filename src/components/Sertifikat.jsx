import { Box, SimpleGrid, Heading, Image } from "@chakra-ui/react";
import image1 from "./sertifikat/image1.jpg";
import image2 from "./sertifikat/image2.jpg";
import image3 from "./sertifikat/image3.jpg";
import image4 from "./sertifikat/image4.jpg";
import image5 from "./sertifikat/image5.jpg";
import image6 from "./sertifikat/image6.jpg";
import image7 from "./sertifikat/image7.jpg";
import image8 from "./sertifikat/image8.jpg";
import image9 from "./sertifikat/image9.jpg";
import image10 from "./sertifikat/image10.jpg";
import image11 from "./sertifikat/image11.jpg";
import image12 from "./sertifikat/image12.jpg";
import image13 from "./sertifikat/image13.png";
import image14 from "./sertifikat/image14.png";
import image15 from "./sertifikat/image15.png";
import image16 from "./sertifikat/image16.png";
import image17 from "./sertifikat/image17.png";

const Sertifikat = () => {
  const certificates = [
    {
      name: "Sertifikat Kelulusan MSIB Ruangguru | MSIB",
      image: image1,
    },
    {
      name: "Sertifikat General Competence | MSIB",

      image: image2,
    },
    {
      name: "Sertifikat Software Engineering[FE] | MSIB",

      image: image3,
    },
    {
      name: "Sertifikat Front End Web Development with HTML & CSS[FE] | MSIB",

      image: image4,
    },
    {
      name: "Sertifikat Programming with Javascript | MSIB",

      image: image5,
    },
    {
      name: "Sertifikat Intro to Node.js | MSIB",

      image: image6,
    },
    {
      name: "Sertifikat Interacting with Web APIs | MSIB",

      image: image7,
    },
    {
      name: "Sertifikat Front End Web Development with React | MSIB",

      image: image8,
    },
    {
      name: "Sertifikat Consumming RESTful API | MSIB",

      image: image9,
    },
    {
      name: "Sertifikat Front End Deployment To Production | MSIB",

      image: image10,
    },
    {
      name: "Sertifikat Belajar Dasar Pemrograman JavaScript | DICODING",
      link: "https://www.dicoding.com/certificates/MRZMQNWR0PYQ",
      image: image16,
    },
    {
      name: "Sertifikat Belajar Dasar Pemrograman Web | DICODING",
      link: "https://www.dicoding.com/certificates/QLZ9Q3N67Z5D",
      image: image14,
    },
    {
      name: "Sertifikat Memulai Pemrograman Dengan Python | DICODING",
      link: "https://www.dicoding.com/certificates/EYX46GDM5PDL",
      image: image13,
    },
    {
      name: "Sertifikat Belajar Dasar Visualisasi Data | DICODING",
      link: "https://www.dicoding.com/certificates/2VX3JK94JPYQ",
      image: image15,
    },
    {
      name: "Sertifikat Meniti Karier sebagai Software Developer | DICODING",
      link: "https://www.dicoding.com/certificates/JLX1D9KV6Z72",
      image: image17,
    },
    {
      name: "Sertifikat JavaScript Projects",
      link: "https://www.mygreatlearning.com/academy/courses/8879373/47896#?utm_source=share_with_friends&gl_source=share_with_friends",
      image: image11,
    },
    {
      name: "Sertifikat Front End Development - HTML",
      link: "https://www.mygreatlearning.com/academy/courses/8879373/12761#?utm_source=share_with_friends&gl_source=share_with_friends",
      image: image12,
    },
  ];

  return (
    <Box py={8} bg="#F3F9FB">
      <Heading as="h2" mb={4} textAlign="center" color="#113F67">
        Sertifikat
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} bg="#F3F9FB">
        {certificates.map((certificate, index) => (
          <Box
            key={index}
            p={4}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            boxShadow="md"
            bg="#fff"
          >
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={certificate.image}
                alt={certificate.name}
                mb={4}
                borderRadius="md"
                objectFit="cover"
              />
            </a>
            <Heading as="h3" fontSize="xl" mb={2}>
              {certificate.name}
            </Heading>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Sertifikat;
