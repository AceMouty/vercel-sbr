import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import FeatureR from "./FeatureR";
import FeatureL from "./FeatureL";

const features = [
  {
    heading: "Wine Tasting",
    desc: "Our wine flights include three wines. You can choose from a red, white, mixed, and local flights. We always have a local flight showcasing your favorite wineries from around Texas. We work with local wineries to bring you the best examples of Texas wine available.",
    img: "/wine-tasting.png"
  },
  {
    heading: "Beer Tasting",
    desc: "We love all kinds of beer, and we know everyone who visits has their own preferences. You can be sure you will find a good example of a German beer along with some fantastic local tastes. Whether you like light or dark, hoppy or mild, bitter or fruity, we have something to suit anyone who orders at our bar. If you can’t decide which beer you want, why not get a flight? Choose any three of our beers on tap",
    img:"/beer-tasting.png"
  },
  {
    heading: "Lunch & Apps",
    desc: "When it comes to food at Sweetbriar Rose, we take no shortcuts. All of our bread, as well as most of the ingredients that go in our sandwiches and salads, are made in house. We take pride in bringing you the best food made fresh weekly by our chef. We love bringing you weekly specials, but you can count on a few standards on our lunch menu. Customers love our Chicken Salad Sandwich, Ham and Swiss Sandwich, and Turkey and Avocado Sandwich. We also have delicious and flavorful salads like the Fruit and Nut Salad or the “Chicken Salad” Salad. Of course, we are happy to take special orders. We also offer cheese plates with gourmet cheeses from Murrays in New York City as well as chips and salsa and a hummus plate. We have something to satisfy any craving. Don’t forget to ask about our soup specials!",
    img:"/sandwhich-and-beer.png"
  },
  {
    heading: "Coffee & Pastries",
    desc: "If you have a sweet tooth, look no further! Our ever-changing pastry case is guaranteed to satisfy anyone who visits. Our chef works her magic to bring you a variety of cookies, scones, muffins, cinnamon rolls, brownies, and kolaches. The flavors change with the seasons and what is available locally. Our coffee bar is sure to become your go-to spot for a hot or cold Cup of Joe in the Fredericksburg area. We use coffee from Greater Goods and Texas Coffee Traders, you will taste the difference in the high-quality beans from local distributors. We can make you a latte, cappuccino, americano, or any other specialty coffee drink you can think of! We also have cold-brew and drip coffee on hand most weekends.",
    img: "/coffee.png"
  }
]
function Features() {
  return (
    <Box as={"section"} pt={{ base: 20, md: 28 }}>
      <Center>
        <Heading as={"h2"} >Services</Heading>
      </Center>
      <Container maxW={"5xl"}>
        {/* TODO: Create services config obj, mpa through and return a L or R Feature */}
        {/* <FeatureR />
        <FeatureL /> */}
        {features.map((feature, index) => {
          if(index%2 === 0)
          {
            return <FeatureR desc={feature.desc} img={feature.img} heading={feature.heading}/>
          } else {
            return <FeatureL desc={feature.desc} img={feature.img} heading={feature.heading}/>
          }
        })}
      </Container>
    </Box>
  );
}

export default Features;
