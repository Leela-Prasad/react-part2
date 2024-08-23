import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../hooks/store";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
  const { data, error } = usePlatforms();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const selectedPlatform = usePlatform(platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.slug || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
