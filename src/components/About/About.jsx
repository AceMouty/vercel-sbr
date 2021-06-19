const {
  Box,
  Center,
  Heading,
  Container,
  Text,
  Flex,
  Spacer,
  Stack,
} = require("@chakra-ui/layout");

function About() {
  return (
    <Box as={"section"} pb={{ base: 20, md: 28 }} pt={{base: 20}}>
      <Center pb={{ base: 20, md: 28 }}>
        <Heading>About Us</Heading>
      </Center>
      <Container maxW={"5xl"}>
        {/* <Stack
          // align={"center"}
          spacing={{ base: 8, md: 10 }}
          // py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        > */}
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "pink.300",
                  zIndex: -1,
                }}
              >
                Our Story
              </Text>
            </Heading>
            <Text color={"gray.500"} >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              autem tenetur, odio distinctio, corporis aperiam aliquam sunt,
              explicabo sequi veritatis non vel iste hic nesciunt optio laborum
              voluptatem beatae voluptate in! Accusantium ipsam quaerat nisi,
              omnis consequuntur laboriosam excepturi. Vel ratione illum
              voluptatum, vero ad illo voluptatibus temporibus perspiciatis
              tempora totam inventore amet ex veniam obcaecati a nam adipisci
              recusandae eius? Deserunt laudantium veniam ducimus. Earum eos
              placeat repellat enim, fugiat totam ipsam nihil, eum eligendi esse
              ex voluptatum inventore officia tempora aut impedit quae
              asperiores dolores quia id accusantium, perspiciatis quas natus
              commodi! Non modi nisi sint nemo cupiditate perferendis, quos
              nihil natus enim a molestiae doloremque fugit excepturi doloribus,
              tempore, numquam dolores veniam nesciunt? Repellendus sunt totam
              tenetur aspernatur asperiores veritatis voluptas voluptatum optio
              sint. Expedita placeat, maxime provident sapiente, minima
              architecto eius alias nesciunt repudiandae numquam exercitationem
              illo optio aperiam ratione sit laudantium natus quia assumenda!
              Accusamus illo maxime deleniti totam quis necessitatibus vitae
              provident quas ea molestiae beatae libero at rem tempore dolorum
              qui dolor distinctio, aspernatur amet molestias reiciendis
              suscipit eum nemo! Sed error excepturi expedita repudiandae aut
              beatae nesciunt molestias, culpa illum! Soluta nobis debitis
              tenetur fugiat voluptas iusto officia omnis eos expedita optio?
            </Text>
          </Stack>
          {/* <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
            >
              <Box w={"100%"} h={"100%"} bg="tomato" />
            </Box>
          </Flex> */}
        {/* </Stack> */}
      </Container>
    </Box>
  );
}

export default About;
