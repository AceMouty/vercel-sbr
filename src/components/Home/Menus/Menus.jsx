import {
  Box,
  Text,
  Link,
} from "@chakra-ui/react"

// TODO: use menuItems config obj from config
export default function Menus() {
  return (
    <Box
      as="section"
      id="menus-section"
      class="cstm-container menus-section cstm-container"
      border="2px solid purple"
    >
      {/* Collection of card */}
      <Box class="menu-collection">

        <Box class="menu-card d-flex flex-column align-items-center mb-5">
          <Box class="card-img wine-img">
            <Text class="banner">Wine Tasting</Text>
          </Box>
          <Link href="#" class="btn btn-lg card-btn mt-4">BUTTON</Link>
        </Box>


        <Box class="menu-card d-flex flex-column align-items-center mb-5">
          <Box class="card-img beer-img">
            <Text class="banner">Beer Tasting</Text>
          </Box>
          <Link href="#" class="btn btn-lg card-btn mt-4">BUTTON</Link>
        </Box>

        <Box class="menu-card d-flex flex-column align-items-center">
          <Box class="card-img lunch-img">
            <Text class="banner">Fresh Food</Text>
          </Box>
          <Link href="#" class="btn btn-lg card-btn mt-4">BUTTON</Link>
        </Box>

        <Box class="menu-card d-flex flex-column align-items-center">
          <Box class="card-img coffee-img">
            <Text class="banner">Coffe & Pasteries</Text>
          </Box>
          <Link href="#" class="btn btn-lg card-btn mt-4">BUTTON</Link>
        </Box>
      </Box>
    </Box>
  )
}