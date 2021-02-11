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

    const [isMobile] = useMediaQuery(mobileView)

    return (
        <Container maxW="6xl" paddingTop={isMobile ? "15rem" : "8rem"}>
            <Box>
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
        </Container>
    )
}