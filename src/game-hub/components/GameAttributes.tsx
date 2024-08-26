import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text marginBottom={0} key={platform.id}>
            {platform.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text marginBottom={0} key={genre.id}>
            {genre.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map((p) => (
          <Text marginBottom={0} key={p.id}>
            {p.name}
          </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
