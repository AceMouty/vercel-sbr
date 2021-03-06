import {
  Box,
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
      background={`${isMobile ? gradient.darker : gradient.normal}, url('/img/ShowcaseImg.jpg')`}
      backgroundPosition="right"
      backgroundSize="cover"
      h="100vh"
    >
      <Box
        mx="auto"
        sx={{ width: "min(1300px, 90vw)" }}
        padding="0px"
        paddingTop="8rem"
      >

        <Heading
          fontSize={{ base: "2.8rem", sm: "7xl", md: "8xl" }}
          color={{ base: "whiteAlpha.900", md: "whiteAlpha.800" }}
          lineHeight="1.2"
          textAlign={{ base: "center", md: "left" }}
        >
          Have A Glass<br />Share A Brew<br />Grab A Bite
      </Heading>
        <Box
          as="button"
          background="sbrPink"
          display="block"
          color="white"
          padding=".6rem 5rem"
          fontSize="2.5rem"
          fontWeight="medium"
          marginTop={{ base: "4rem", xs: "8rem" }}
          mx={{ base: "auto", md: "0" }}
        >Browse</Box>
      </Box>
    </Box >
  )
}