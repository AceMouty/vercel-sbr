import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import FeatureR from "./FeatureR";
import FeatureL from "./FeatureL";

function Features() {
  return (
    <Box as={"section"} px={8} py={10}>
      <Center>
        <Heading as={"h2"}>Services</Heading>
      </Center>
      <Container maxW={"5xl"}>
        <FeatureR />
        <FeatureL />
      </Container>
    </Box>
  );
}

export default Features;
