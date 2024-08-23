import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../hooks/store";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

function GameHeading() {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);

  const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
