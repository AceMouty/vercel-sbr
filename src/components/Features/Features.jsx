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
    <Box as={"section"} pt={{ base: 20, md: 28 }}>
      <Center>
        <Heading as={"h2"}>Services</Heading>
      </Center>
      <Container maxW={"5xl"}>
        {/* TODO: Create services config obj, mpa through and return a L or R Feature */}
        <FeatureR />
        <FeatureL />
      </Container>
    </Box>
  );
}

export default Features;
