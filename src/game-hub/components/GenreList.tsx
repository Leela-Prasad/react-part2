import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/reducer";
import { setGenreId } from "../hooks/reduxStore";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useTypedSelector(s => s.gameQuery.genreId)
  
  const dispatch = useDispatch()

  if (error) return null;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading fontSize="2xl">Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} marginY="5px">
            <HStack marginY={3}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                width="32px"
                borderRadius={4}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                objectFit="cover"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize={"lg"}
                variant="link"
                onClick={() => dispatch(setGenreId({genreId: genre.id}))}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
