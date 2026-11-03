import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import PageTemplate from '../components/templateMovieListPage';
import { getNowPlayingMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";


const NowPlayingPage = () => {
    const { data, error, isPending, isError } = useQuery({
        queryKey: ["nowPlaying"],
        queryFn: getNowPlayingMovies,
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
            title='Now Playing Movies'
            movies={movies}
            action={(movie) => {
                return <AddToPlaylistIcon movie={movie} />;
            }}
        />
    );
};
export default NowPlayingPage;