import {
  Box,
  Center,
  Container,
  Heading,
  Text
} from "@chakra-ui/react";

function Features() {
  return (
    <Box as={"section"} pt={{ base: 20, md: 28 }}>
      <Center>
        <Heading as={"h2"} pb={{base: 20}}>Come Visit Us</Heading>
      </Center>
      <Container maxW={"5xl"} >
          <Box maxw={"4xl"} backgroundColor={"tomato"} minHeight={"50vh"}/>
      </Container>
    </Box>
  );
}

export default Features;