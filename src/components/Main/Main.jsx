import {
  Box,
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

function Main() {
  return (
    <Box as={"section"}>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={"url(/showcase.jpg)"}
        backgroundSize={"cover"}
        backgroundPosition={"center right"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Have A Glass, Share A Brew And Grab A Bite
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"pink.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "pink.500" }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default Main;
