import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

function FeatureL() {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column", md: "row" }}
    >
      <Flex
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
          <Image
            alt={"Hero Image"}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={"100%"}
            src={
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            }
          />
        </Box>
      </Flex>
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          <Text as={"span"} position={"relative"}>
            Write once,
          </Text>
          <br />
          <Text as={"span"} color={"red.400"}>
            use everywhere!
          </Text>
        </Heading>
        <Text color={"gray.500"}>
          Snippy is a rich coding snippets app that lets you create your own
          code snippets, categorize them, and even sync them in the cloud so you
          can use them anywhere. All that is free!
        </Text>
      </Stack>
    </Stack>
  );
}

export default FeatureL;
