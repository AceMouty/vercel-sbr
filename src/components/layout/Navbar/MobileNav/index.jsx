
import { useRef } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
    Link as ChakraLink,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    IconButton,
    useDisclosure,
    Flex,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

import { paths } from "@components/layout/config";

export default function MobileNav() {
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
                            <Flex direction="column">

                                {paths.map(obj => {
                                    if (obj.path) {

                                        return <ChakraLink href={obj.path} marginBottom="1rem">{obj.name}</ChakraLink>
                                    } else {
                                        console.log("IN THE ACCORDIAN ELSE BLOCK")
                                        return buildAccordian(obj)
                                    }
                                })}
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>)
}

function buildAccordian({ name, subMenus }) {
    return (

        <Accordion allowToggle marginBottom="1rem">
            <AccordionItem>
                <h2>
                    <AccordionButton margin="0" paddingLeft="0">
                        <Box flex="1" textAlign="left">
                            {name}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Flex direction="column">
                        {subMenus.map(obj => {
                            return <ChakraLink href={obj.path} marginBottom="1rem">{obj.name}</ChakraLink>
                        })}
                    </Flex>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}