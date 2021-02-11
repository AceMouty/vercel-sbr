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

const paths = [
    { name: "Home", path: "/" },
    {
        name: "Menus",
        subMenus: [
            { name: "Wine Club", path: "/menu/wineclub" },
            { name: "Wine Menu", path: "/menu/wine" },
            { name: "Beer Menu", path: "/menu/beer" },
            { name: "Lunch Menu", path: "menu/lunch" },
            { name: "Coffee & Pasteries", path: "menu/coffeeandpasteries" },
        ]
    },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" }
]
export default function Navbar() {
    const [isGreaterThan920] = useMediaQuery("(min-width: 920px)");

    return (
        <Box bg="blackAlpha.700" color="white" position="fixed" top="0" width="100%" p="4">
            <Container maxW='8xl'>
                <Flex justify="space-between" align="center">
                    <Heading as='h2' color="whiteAlpha.800">Sweetbriar Rose</Heading>
                    <Menu>
                        {isGreaterThan920 ?
                            <DesktopNav /> :
                            <MobileNav />
                        }
                    </Menu>
                </Flex>
            </Container>
        </Box >
    )
}

