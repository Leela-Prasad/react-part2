import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit={"cover"}></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
}

export default NavBar;
