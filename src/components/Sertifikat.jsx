import { Box, SimpleGrid, Heading, Text, Image } from "@chakra-ui/react";

const Sertifikat = () => {
  const certificates = [
    {
      name: "Sertifikat 1",
      description: "Deskripsi sertifikat 1",
      image:
        "https://files.jotform.com/jotformapps/certificate-of-completion-7d55e770366ec0d9587a48a25bea349d.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/certificate-of-completion-7d55e770366ec0d9587a48a25bea349d.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/certificate-of-completion-7d55e770366ec0d9587a48a25bea349d.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/certificate-of-completion-7d55e770366ec0d9587a48a25bea349d.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    {
      name: "Sertifikat 2",
      description: "Deskripsi sertifikat 2",
      image:
        "https://files.jotform.com/jotformapps/employee-of-the-month-certificate-template-f457f340a8dd4b2abf46f97264584df7.png?v=1687162857", // Ubah dengan nama gambar sertifikat Anda
    },
    // Tambahkan sertifikat lainnya sesuai kebutuhan
  ];

  return (
    <Box py={8} bg="#F3F9FB">
      <Heading as="h2" mb={4} textAlign="center">
        Sertifikat
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={4} bg="#F3F9FB">
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
