import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import PageTemplate from '../components/templateMovieListPage';
import { getTrendingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";


const TrendingPage = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrendingMovies,
});

if (isPending) {
    return <Spinner />;
}

if (isError) {
    return <h1>{error.message}</h1>;
}

const movies = data;
  
  return (
    <PageTemplate
      title='Trending Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />;
      }}
    />
  );
};
export default TrendingPage;