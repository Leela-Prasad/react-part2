import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/reducer";
import { setSortOrder } from "../hooks/gameQueryStore";

function SortSelector() {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const sortOrder = useTypedSelector((s) => s.gameQuery.sortOrder);
  const dispatch = useDispatch();

  const sortLabel = sortOrders.find(
    (order) => order.value === sortOrder
  )?.label;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortLabel || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            value={sortOrder.value}
            onClick={() =>
              dispatch(setSortOrder({ sortOrder: sortOrder.value }))
            }
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
