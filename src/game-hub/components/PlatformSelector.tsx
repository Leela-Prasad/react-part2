import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import { useTypedSelector } from "../hooks/reducer";
import { useDispatch } from "react-redux";
import { setPlatformId } from "../hooks/reduxStore";

function PlatformSelector() {
  const { data, error } = usePlatforms();
  const platformId = useTypedSelector(s => s.gameQuery.platformId)
  const dispatch = useDispatch()

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
            onClick={() => dispatch(setPlatformId({platformId: platform.id}))}
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
