import { Heading } from "@chakra-ui/react";
import { useTypedSelector } from "../hooks/reducer";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

function GameHeading() {
  const genreId = useTypedSelector(s => s.gameQuery.genreId)
  const platformId = useTypedSelector(s => s.gameQuery.platformId)

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
