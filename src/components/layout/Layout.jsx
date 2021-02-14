
import { Navbar } from '@components/layout/Navbar'
import { Box } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <Box w='100%'>
      <Navbar />
      {children}
    </Box>
  )
}