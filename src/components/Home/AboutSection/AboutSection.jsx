import {
  Box,
  Heading,
  Text,
  Link
} from '@chakra-ui/react'

export default function AboutSection() {
  return (
    <>
      <Box
        as="div"
        position="absolute"
        width="30rem"
        height="60rem"
        backgroundColor="sbrPink"
        right="0rem"
        zIndex="hide"
        height="100vh"
      ></Box>
      <Box
        as="section"
        height="100vh"
        position="relative"
        marginTop="4rem"
        zIndex="hide"
      >
        <Box as="div">
          <Heading as="h1">Sweetbriar<br />Rose</Heading>
          <Text as="p" class="about-text mt-5">
            We feed your family like we feed our family: with the<br />
              best ingredients made fresh with love.
			    </Text>
          <Text as="p" class="about-text mt-5">
            Come in and let us share our love of great food,<br />
                coffee, winde and beer near Fredericksburg with you.<br />
                  We are family and pet friendly!
			    </Text>
          <Link href="#">Our Story</Link>
        </Box>
      </Box>
    </>
  )
}