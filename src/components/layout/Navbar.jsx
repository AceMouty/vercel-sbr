import { useRef } from 'react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Link as ChakraLink,
    Container,
    Flex,
    Heading,
    Box,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    IconButton,
    useMediaQuery,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button
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

function DesktopNav() {
    return (
        <Flex as='nav' w="32rem" justify='space-between' fontSize='xl' fontSize="2xl">

            {paths.map(obj => {
                if (obj.path) {
                    return <ChakraLink href={obj.path}>{obj.name}</ChakraLink>
                } else {
                    return buildDropDown(obj)
                }
            })}
        </Flex>
    )
}

function buildDropDown({ name, subMenus }) {

    return (
        <>
            <MenuButton
                as="p"
                isLazy
            >
                {name}
                <ChevronDownIcon marginLeft=".5rem" />
            </MenuButton>
            <MenuList bg="blackAlpha.800" border="none" marginTop=".70rem">
                {subMenus.map(obj => {
                    return (
                        <MenuItem
                            _hover={{ bg: 'whiteAlpha.500' }}
                            _active={{ bg: 'whiteAlpha.500' }}
                            _focus={{ bg: 'transparent' }}
                        >
                            <ChakraLink href={obj.path}>{obj.name}</ChakraLink>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </>)
}

function MobileNav() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    return (
        <>
            <IconButton
                ref={btnRef}
                onClick={onOpen}
                aria-label="Menu"
                icon={<HamburgerIcon />}
                size="lg"
                variant="outline"
                _active={{ bg: "none" }}
                _focus={{ bg: "transparent" }}
            />

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                autoFocus={false}
                size="xs"
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>

                        <DrawerBody>
                            BODY OF DRAWER
                        </DrawerBody>

                        <DrawerFooter>
                            FOOTER
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>)
}