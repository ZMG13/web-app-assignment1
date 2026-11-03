import { useQuery } from "@tanstack/react-query";
import { getMovieRecommendations } from "../../api/tmdb-api";
import MovieList from "../movieList";
import Spinner from "../spinner";
import Grid from "@mui/material/Grid";

const MovieRecommendations = ({ movie }) => {
const { data, error, isPending, isError } = useQuery({
  queryKey: ["recommendations", { id: movie.id }],
  queryFn: getMovieRecommendations,
});

if (isPending) {
  return <Spinner />;
}

if (isError) {
  return <h1>{error.message}</h1>;
}
const recommendations = data.results;
return (
  <Grid container>
    <MovieList
      movies={recommendations}
      action={() => null}
    />
  </Grid>
);
};
export default MovieRecommendations;