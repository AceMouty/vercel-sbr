
import Navbar from '@components/layout/Navbar'
import { Container, Box } from '@chakra-ui/react'

export default function Layout({ children }) {
    return (

        <Box w='100%'>
            <Navbar />
            <Container centerContent>
                {children}
            </Container>
        </Box>

    )
}