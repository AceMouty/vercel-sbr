import { Avatar } from "@chakra-ui/avatar";
import { Box, Stack, Text } from "@chakra-ui/layout";

function SliderContent() {
  return (
    <Stack
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla illum,
        maiores sunt repellat, voluptatem est aspernatur impedit eos ab aliquid
        pariatur totam animi sed saepe id. Cum est in vel doloremque incidunt
        velit natus eaque sunt ipsa aperiam consequuntur, quae ratione laborum
        magnam iste labore rerum aut culpa recusandae ut?
      </Text>
      <Box textAlign={"center"}>
        <Avatar
          src={
            "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
          }
          alt={"Jenny Wilson"}
          mb={2}
        />

        <Text fontWeight={600}>Jenny Wilson</Text>
        <Text fontSize={"sm"} color={"gray.400"}>
          Vice President
        </Text>
      </Box>
    </Stack>
  );
}

export default SliderContent;
