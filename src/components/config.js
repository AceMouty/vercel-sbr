

const paths = [
  { name: "Home", path: "/" },
  {
    name: "Menus",
    subMenus: [
      { name: "Wine Club", path: "/menu/wineclub" },
      { name: "Wine Menu", path: "/menu/wine" },
      { name: "Beer Menu", path: "/menu/beer" },
      { name: "Lunch Menu", path: "menu/lunch" },
      { name: "Coffee & Pasteries", path: "menu/coffeeandpasteries" },
    ]
  },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" }
]

const menuItems = [
  "Wine Tasting",
  "Beer Tasting",
  "Fresh Food",
  "Coffee & Pasteries",
]

const mobileView = "(max-width: 920px)";

module.exports = {
  paths,
  mobileView,
  menuItems
}