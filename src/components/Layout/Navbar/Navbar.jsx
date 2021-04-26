import { Box, Flex, HStack, Link, Stack } from "@chakra-ui/layout";
import { IconButton, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

function NavLink({ children }) {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Link>
  );
}

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const links = ["Link 1", "Link 2", "Link 3"];
  return (
    <Box as="nav" px={8}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>
          <h1>Sweebriar Rose</h1>
        </Box>
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {links.map((link, i) => (
            <NavLink key={i}>{link}</NavLink>
          ))}
        </HStack>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: !isOpen ? "none" : "inherit" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen ? (
        <Box pb={4}>
          <Stack as={"nav"} spacing={4}>
            {links.map((link, i) => (
              <NavLink key={i}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default Navbar;
