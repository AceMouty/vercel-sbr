import {
    Link as ChakraLink,
    Container,
    Flex,
    Heading,
    Box
} from '@chakra-ui/react'

export default function Navbar() {
    return (
        <Box bg="blackAlpha.600" color="white">
            <Container maxW='8xl'>
                <Flex justify="space-between">
                    <Heading as='h2' color="whiteAlpha.800">Sweetbriar Rose</Heading>
                    <nav>
                        <ChakraLink href="/about">About</ChakraLink>
                    </nav>
                </Flex>
            </Container>
        </Box >
    )
}