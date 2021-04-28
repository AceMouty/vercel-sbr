const { Box, Heading, Container, Center } = require("@chakra-ui/layout");
import SimpleSlider from "./SimpleSlider";

function Testimonials() {
  return (
    <Box as={"section"}>
      <Center>
        <Heading>Testimonials</Heading>
      </Center>
      <Container maxWidth={"6xl"}>
        <SimpleSlider />
      </Container>
    </Box>
  );
}

export default Testimonials;
