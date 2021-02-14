import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useMediaQuery
} from "@chakra-ui/react";

import { mobileView } from "@components/config"

export default function Cta() {
  const [isMobile] = useMediaQuery(mobileView);

  const gradient = {
    normal: "linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))",
    darker: "linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65))"
  }
  return (
    < Box
      as="section"
      background={`${isMobile ? gradient.normal : gradient.darker}, url('/img/ShowcaseImg.jpg')`}
      backgroundPosition="right"
      backgroundSize="cover"
      h="100vh"
    >
      <Box
        margin="0 auto"
        sx={{ width: "min(1300px, 90vw)" }}
        padding="0px"
        paddingTop={{ base: "8rem", md: "15rem" }}
      >

        <Heading
          size={isMobile ? "4xl" : "3xl"}
          color={isMobile ? "whiteAlpha.800" : "whiteAlpha.900"}
          lineHeight="1.2"
          textAlign={!isMobile && "center"}
        >
          Have A Glass<br />Share A Brew<br />Grab A Bite
      </Heading>
        <Box
          as="button"
          background="sbrPink"
          color="white"
          padding=".6rem 5rem"
          fontSize="2rem"
          marginTop="5rem"
          width={!isMobile && "100%"}
        >Browse</Box>
      </Box>
    </Box >
  )
}