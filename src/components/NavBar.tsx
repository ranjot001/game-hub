import { HStack, Image } from "@chakra-ui/react";
import game from "../assets/game.webp";
import { px } from "framer-motion";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={game} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
