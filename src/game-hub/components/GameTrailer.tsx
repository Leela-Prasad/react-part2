import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId);

  if (error) throw error;

  const trailer = data?.results[0];

  return <video src={trailer?.data[480]} poster={trailer?.preview} controls />;
};

export default GameTrailer;
