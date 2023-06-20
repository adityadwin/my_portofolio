import { Box, SimpleGrid, Heading, Text, Image } from "@chakra-ui/react";
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
      name: "Sertifikat 1",
      description: "Deskripsi sertifikat 1",
      image: image1, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image: image2, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 3",
      description: "Deskripsi sertifikat 3",
      image: image3, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 4",
      description: "Deskripsi sertifikat 4",
      image: image4, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 5",
      description: "Deskripsi sertifikat 5",
      image: image5, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 6",
      description: "Deskripsi sertifikat 6",
      image: image6, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 7",
      description: "Deskripsi sertifikat 7",
      image: image7, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 8",
      description: "Deskripsi sertifikat 8",
      image: image8, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 9",
      description: "Deskripsi sertifikat 9",
      image: image9, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 10",
      description: "Deskripsi sertifikat 10",
      image: image10, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 11",
      description: "Deskripsi sertifikat 11",
      image: image16, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 12",
      description: "Deskripsi sertifikat 12",
      image: image14, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 13",
      description: "Deskripsi sertifikat 13",
      image: image13, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 14",
      description: "Deskripsi sertifikat 15",
      image: image15, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 15",
      description: "Deskripsi sertifikat 16",
      image: image17, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 16",
      description: "Deskripsi sertifikat 16",
      image: image11, // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 17",
      description: "Deskripsi sertifikat 16",
      image: image12, // Ubah dengan nama gambar sertifikat Anda
    },
    // Tambahkan sertifikat lainnya sesuai kebutuhan
  ];

  return (
    <Box py={8} bg="#F3F9FB">
      <Heading as="h2" mb={4} textAlign="center">
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
            <Image
              src={certificate.image}
              alt={certificate.name}
              mb={4}
              borderRadius="md"
              objectFit="cover"
            />
            <Heading as="h3" fontSize="xl" mb={2}>
              {certificate.name}
            </Heading>
            <Text>{certificate.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Sertifikat;
