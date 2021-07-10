import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

function FeatureR({desc, img, heading}) {
  return (
    <Stack
      align={"center"}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: "column", md: "row" }}
    >
      <Stack flex={1} spacing={{ base: 5, md: 10 }}>
        <Heading
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl"}}
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
            { heading }
          </Text>
        </Heading>
        <Text color={"gray.500"}>
         { desc }
        </Text>
      </Stack>
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
            src={img}
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export default FeatureR;
