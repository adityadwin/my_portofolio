import {
  CardBody,
  Text,
  CardHeader,
  Box,
  Heading,
  Card,
  Flex,
  Center,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export const Experience = () => {
  return (
    <Box py={4} bg="#87C0CD">
      <Heading
        ml={{ base: "20px", md: "110px", lg: "110px" }}
        mt="10px"
        mb="30px"
        color="#113F67"
        fontSize={{ base: "4xl", lg: "5xl" }}
      >
        Experience
      </Heading>
      <Center>
        <Card maxW="90%" boxShadow="none">
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Box>
                  <Heading fontSize={{ base: "2xl", lg: "3xl" }}>
                    PT Ruang Raya Indonesia | Studi Independen
                  </Heading>
                  <Text as="b" fontSize={{ base: "xl", lg: "2xl" }}>
                    Frontend Engineering
                  </Text>
                  <Text fontSize={{ base: "sm", lg: "lg" }}>
                    18 Agu 2022 - 28 Des 2022 | 4 bulan
                  </Text>
                  <Text fontSize={{ base: "xs", lg: "sm" }}>
                    Jl. Dr. Saharjo No.161, Manggarai Selatan, Tebet
                  </Text>
                  <Text fontSize={{ base: "xs", lg: "sm" }}>
                    Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12860
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <UnorderedList>
              <Text fontSize="xl" as="b">
                A.General Competencies
              </Text>
              <ListItem>
                Pembelajaran tambahan untuk mendukung kemampuan peserta dalam
                program digital marketing.
              </ListItem>
              <ListItem mb="20px">
                Materi meliputi keterampilan komunikasi dan presentasi serta
                berpikir analitis dan strategis.
              </ListItem>

              <Text fontSize="xl" as="b">
                B.Software Engineering
              </Text>
              <ListItem>
                Menerapkan proses pengembangan software dengan menggunakan
                Visual Studio Code, terminal, version control, dan basic
                networking.
              </ListItem>
              <ListItem mb="20px">
                Materi meliputi penggunaan terminal, Visual Studio Code, Git
                version control, dan hosting aplikasi.
              </ListItem>

              <Text fontSize="xl" as="b">
                C.Frontend Web Development with HTML & CSS
              </Text>
              <ListItem>
                Memahami penulisan HTML dan penggunaan CSS dalam web development
                dasar.
              </ListItem>
              <ListItem mb="20px">
                Materi meliputi struktur dokumen HTML, penggunaan form, dan
                penerapan styling dengan CSS.
              </ListItem>

              <Text fontSize="xl" as="b">
                D.Programming with JavaScript
              </Text>
              <ListItem>Memahami konsep dan fitur JavaScript.</ListItem>
              <ListItem mb="20px">
                Materi meliputi variabel, tipe data, array, object, looping,
                conditional, dan asynchronous.
              </ListItem>

              <Text fontSize="xl" as="b">
                E.Intro to Node.js
              </Text>
              <ListItem>
                Memanfaatkan ekosistem pengembangan NodeJS untuk mengembangkan
                aplikasi frontend.
              </ListItem>
              <ListItem mb="20px">
                Materi meliputi penggunaan NPM, modul eksternal, package.json,
                environment variable, dan perbedaan antara commonJS dan ES6.
              </ListItem>

              <Text fontSize="xl" as="b">
                F.Frontend Web Development with React
              </Text>
              <ListItem>Memahami fundamental library ReactJS.</ListItem>
              <ListItem mb="20px">
                Menerapkan ReactJS untuk membuat Single Page Application.
              </ListItem>

              <Text fontSize="xl" as="b">
                G.Interacting with Web APIs
              </Text>
              <ListItem>
                Memahami bagaimana aplikasi website berjalan dan berkomunikasi
                dengan browser dari sisi klien.
              </ListItem>
              <ListItem mb="20px">
                Materi meliputi Document Object Model, Web Storage API, dan
                browser event.
              </ListItem>

              <Text fontSize="xl" as="b">
                H.Consuming RESTful API
              </Text>
              <ListItem>Memahami fundamental arsitektur RESTful API.</ListItem>
              <ListItem mb="20px">
                Menerapkan arsitektur RESTful API dalam pengembangan website di
                sisi frontend.
              </ListItem>

              <Text fontSize="xl" as="b">
                I.Frontend Deployment To Production
              </Text>
              <ListItem>
                Memahami cara melakukan deployment aplikasi ReactJS.
              </ListItem>
              <ListItem mb="20px">
                Menggunakan layanan Netlify, Vercel, atau Github Pages untuk
                membuat aplikasi dapat diakses secara online.
              </ListItem>
            </UnorderedList>
            <Text noOfLines={(1, 100)}></Text>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
};
