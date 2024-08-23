import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./game-hub/components/GameGrid";
import GameHeading from "./game-hub/components/GameHeading";
import GenreList from "./game-hub/components/GenreList";
import NavBar from "./game-hub/components/NavBar";
import PlatformSelector from "./game-hub/components/PlatformSelector";
import SortSelector from "./game-hub/components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenreList></GenreList>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
