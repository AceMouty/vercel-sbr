import {
  Box,
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";

function Main() {
  return (
    <Box
      as={"section"}
      w={"full"}
      h={"100vh"}
      backgroundImage={"linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/showcase.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center right"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {/* <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={"linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/showcase.jpg)"}
        backgroundSize={"cover"}
        backgroundPosition={"center right"}
      > */}
        {/* <VStack
          w={"full"}
          justify={"center"}
          align={"flex-start"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          // bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
        > */}
          <Box maxW={{base: "15rem", md: "30rem"}}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
            >
              Have A Glass, Share A Brew And Grab A Bite
            </Text>
            
            <Button
              bg={"pink.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "pink.500" }}
            >
              Learn More
            </Button>
          </Box>
        {/* </VStack> */}
      {/* </Flex> */}
    </Box>
  );
}

export default Main;
