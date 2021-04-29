import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

function FeatureL() {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column-reverse", md: "row" }}
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
            src={"/beer-tasting.png"}
          />
        </Box>
      </Flex>
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
            Beer Tasting
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
