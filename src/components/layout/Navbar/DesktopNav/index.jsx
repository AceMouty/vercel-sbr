import { ChevronDownIcon } from "@chakra-ui/icons"
import {
    Flex,
    Link as ChakraLink,
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react"

import { paths } from '@components/config';

export default function DesktopNav() {
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