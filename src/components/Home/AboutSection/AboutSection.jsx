import {
  Box,
  Heading,
  Text,
  Link,
  useMediaQuery
} from '@chakra-ui/react'

import { mobileView } from '../../config'

export default function AboutSection() {

  const [isMobile] = useMediaQuery(mobileView)

  return (
    <>
      <Box
        as="div"
        position="absolute"
        width={{ base: "0", lg: "10rem" }}
        height="80vh"
        backgroundColor="sbrPink"
        right="0rem"
        zIndex="hide"
        display={{ base: "none", md: "20rem" }}

      ></Box>
      <Box
        as="section"
      >
        <Box as="div">
          {
            isMobile ?
              <MobileSection /> :
              <Section />
          }
        </Box>
      </Box>
    </>
  )
}

function MobileSection() {
  return (
    <>
      <Heading
        as="h1"
        fontSize={{ base: "4xl" }}
        textAlign="center"
        marginTop="4rem"
      >
        Sweetbriar Rose
          </Heading>

      <Text
        as="p"
        pt="2rem"
        fontSize={{ base: "2xl" }}
        textAlign={{ base: "center" }}
      >
        We feed your family like we feed our family: with the
        best ingredients made fresh with love.
			    </Text>
      <Text
        as="p"
        pt="2rem"
        fontSize={{ base: "2xl" }}
        textAlign={{ base: "center" }}
      >
        Come in and let us share our love of great food,
        coffee, winde and beer near Fredericksburg with you.
        We are family and pet friendly!
			    </Text>
      <Link
        href="#"
        as="button"
        display="block"
        padding=".6rem 5rem"
        marginTop="1.5rem"
        mx={{ base: "auto" }}
        backgroundColor="sbrPink"
        color="white"
        fontWeight="medium"
        fontSize={{ base: "2xl" }}
        textAlign={{ base: "center" }}
      >Our Story</Link>
    </>
  )
}

function Section() {
  return (
    <>
      <Heading
        as="h1"
        fontSize="6xl"
        marginTop="4rem"
      >
        Sweetbriar<br />Rose
      </Heading>

      <Text
        as="p"
        pt="2rem"
        fontSize={{ base: "3xl" }}
      >
        We feed your family like we feed our family: with the<br />
        best ingredients made fresh with love.
			    </Text>
      <Text
        as="p"
        pt="2rem"
        fontSize={{ base: "3xl" }}
      >
        Come in and let us share our love of great food,<br />
        coffee, winde and beer near Fredericksburg with you.<br />
        We are family and pet friendly!
			    </Text>
      <Link
        href="#"
        backgroundColor="sbrPink"
        color="white"
        fontWeight="medium"
        fontSize={{ base: "2xl" }}
        padding=".6rem 5rem"
        display="inline-block"
        marginTop="1.5rem"
        textAlign={{ base: "center" }}
      >Our Story</Link>
    </>
  )
}