import {
  Box
} from '@chakra-ui/react'

// Cusom components
import { Cta } from '@components/Home/Cta'
import { AboutSection } from "@components/Home/AboutSection"
import { Menus } from '@components/Home/Menus'

function Index() {

  return (
    <>
      <Cta />
      <Box
        margin="0 auto"
        sx={{ width: "min(1300px, 90vw)" }}
        padding="0px"
      >
        <AboutSection />
        <Menus />
      </Box>
    </>
  )
}

export default Index
