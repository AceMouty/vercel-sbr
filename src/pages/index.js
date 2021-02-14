import {
  Box,
  Container,
  Heading,
  useMediaQuery
} from '@chakra-ui/react'
import { Cta } from '@components/Home/Cta'
import { AboutSection } from "@components/Home/AboutSection"
import { Menus } from '@components/Home/Menus'
// Cusom components


function Index() {

  return (
    <>
      <Cta />
      <Box
        margin="0 auto"
        sx={{ width: "min(1300px, 90vw)" }}
        padding="0px"
      // border="2px solid red"
      >
        <AboutSection />
        <Menus />
      </Box>
    </>
  )
}

export default Index
