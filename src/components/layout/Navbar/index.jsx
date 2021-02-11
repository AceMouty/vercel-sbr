import {
    Container,
    Flex,
    Heading,
    Box,
    Menu,
    useMediaQuery
} from '@chakra-ui/react'

import DesktopNav from '@components/layout/Navbar/DesktopNav';
import MobileNav from '@components/layout/Navbar/MobileNav';
import { mobileView } from '@components/config'
export default function Navbar() {
    const [isMobile] = useMediaQuery(mobileView);

    return (
        <Box bg="blackAlpha.700" color="white" position="fixed" top="0" width="100%" p="4">
            <Container maxW='6xl'>
                <Flex justify="space-between" align="center">
                    <Heading as='h2' color="whiteAlpha.800">Sweetbriar Rose</Heading>
                    <Menu>
                        {isMobile ?
                            <DesktopNav /> :
                            <MobileNav />
                        }
                    </Menu>
                </Flex>
            </Container>
        </Box >
    )
}

