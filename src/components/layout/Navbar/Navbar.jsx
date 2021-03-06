import {
  Heading,
  Box,
  Menu,
  useMediaQuery
} from '@chakra-ui/react'

import { DesktopNav } from '@components/layout/Navbar/DesktopNav';
import { MobileNav } from '@components/layout/Navbar/MobileNav';
import { mobileView } from '@components/config'

export default function Navbar() {
  const [isMobile] = useMediaQuery(mobileView);

  return (
    <Box
      color="white"
      position="fixed"
      padding="1rem 0"
      width="100%"
      bg="blackAlpha.700"
      sx={{
        backdropFilter: "blur(.25rem)",
        backgroundColor: "rgba(0,0,0,0.7)"
      }
      }
    >
      <Box
        margin="0 auto"
        sx={{ width: "min(1300px, 90vw)" }}
        padding="0px"
        display="flex"
        justifyContent="space-between"
      >
        <Heading as='h2' color="whiteAlpha.800">Sweetbriar Rose</Heading>
        <Menu>
          {isMobile ?
            <MobileNav /> :
            <DesktopNav />
          }
        </Menu>
      </Box>
    </ Box >
  )
}

