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
      className="cstm-container menus-section cstm-container"
      border="2px solid purple"
    >
      {/* Collection of card */}
      <Box className="menu-collection">

        <Box className="menu-card d-flex flex-column align-items-center mb-5">
          <Box className="card-img wine-img">
            <Text className="banner">Wine Tasting</Text>
          </Box>
          <Link href="#" className="btn btn-lg card-btn mt-4">BUTTON</Link>
        </Box>


        <Box className="menu-card d-flex flex-column align-items-center mb-5">
          <Box className="card-img beer-img">
            <Text className="banner">Beer Tasting</Text>
          </Box>
          <Link href="#" className="btn btn-lg card-btn mt-4">BUTTON</Link>
        </Box>

        <Box className="menu-card d-flex flex-column align-items-center">
          <Box className="card-img lunch-img">
            <Text className="banner">Fresh Food</Text>
          </Box>
          <Link href="#" className="btn btn-lg card-btn mt-4">BUTTON</Link>
        </Box>

        <Box className="menu-card d-flex flex-column align-items-center">
          <Box className="card-img coffee-img">
            <Text className="banner">Coffe & Pasteries</Text>
          </Box>
          <Link href="#" className="btn btn-lg card-btn mt-4">BUTTON</Link>
        </Box>
      </Box>
    </Box>
  )
}