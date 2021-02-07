import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Link as ChakraLink,
    Container,
    Flex,
    Heading,
    Box,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from '@chakra-ui/react'

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

function buildDropDown({ name, subMenus }) {
    return (<Menu>
        <MenuButton as='p' rightIcon={<ChevronDownIcon />}>
            {name}
        </MenuButton>
        <MenuList bg="gray.600">
            {subMenus.map(obj => {
                return (<MenuItem _hover={{ bg: 'whiteAlpha.500' }}>
                    <ChakraLink href={obj.path}>{obj.name}</ChakraLink>
                </MenuItem>)
            })}
        </MenuList>
    </Menu>)
}

export default function Navbar() {

    return (
        <Box bg="blackAlpha.700" color="white">
            <Container maxW='8xl'>
                <Flex justify="space-between" align="center">
                    <Heading as='h2' color="whiteAlpha.800">Sweetbriar Rose</Heading>
                    <Flex as='nav' w="400px" justify='space-between' fontSize='xl'>
                        {paths.map(obj => {
                            if (obj.path) {
                                return <ChakraLink href={obj.path}>{obj.name}</ChakraLink>
                            } else {
                                return buildDropDown(obj)
                            }
                        })}
                    </Flex>
                </Flex>
            </Container>
        </Box >
    )
}