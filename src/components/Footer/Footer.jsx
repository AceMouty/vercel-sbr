import {
    Box,
    Container,
    Heading,
    Text,
    Stack
}
from "@chakra-ui/react"

function Footer() {
    return (
        <Box as={"footer"}>
            <Stack as={"div"} backgroundColor={ "gray.100" } color={"blue.900"}>
                <Container maxW={{base: "3xl"}} py={8}>
                    <Stack direction={{base: "column", sm: "row"}} justify={{sm: "space-evenly"}} spacing={{base: 4}}>
                         <Box as={"div"}>
                           <Heading as="h4" fontSize="2xl">Sweetbriar Rose</Heading>
                           <address>
                             <p>Phone: <a href="tel:(830) 307-2646">(830) 307-2646</a></p>
                             <p>9973 US Highway 290<br/> Fredericksburg, TX 78624</p>
                           </address>
                         </Box>
                         <Box as={"div"}>
                             <Text><strong>Business Hours:</strong></Text>
                             <Text>Saturday: 9AM - 6PM</Text>
                             <Text>Sunday: 10AM - 5PM</Text>
                             <Text>Thursday &amp; Friday: 10AM - 5PM</Text>
                         </Box>
                    </Stack> 
                </Container>
                <Box pt={3} pb={2}>
                    <Container as="div"maxW={{base: "3xl"}} >
                        <Stack alignItems={{base: "center"}}>
                            <Text>&copy; Sweetbriar Rose, All Rights Reserved</Text>
                            <Text>Designed and Developed by: Kyle Guerrero</Text>
                        </Stack>
                   </Container>
                </Box>
           </Stack> 
        </Box>
    )
}

export default Footer