import {
  Box,
  Container,
  Heading,
  useMediaQuery
} from '@chakra-ui/react'

// Cusom components
import Cta from '@components/Cta'

import { mobileView } from "@components/config"

function Index() {
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
      <Cta />
    </Box >
  )
}

export default Index
