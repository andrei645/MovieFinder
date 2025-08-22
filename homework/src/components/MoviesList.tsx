import { useState } from "react";
import MovieCard from "./MovieCard";
import { toast } from "react-toastify";

type Movie = {
    Title: string;
    Type: string;
    Year: string;
    Poster: string;
    imdbID: string;
}
interface MoviesListProps {
    movies: Movie[];
    decade: number;
}

export default function MoviesList({ movies, decade }: MoviesListProps){
    const [loadMore, setLoadMore] = useState(3);

    const handleLoadMore = () => {
        movies.length > loadMore ? setLoadMore(prev => prev + 3) : toast.success("No more movies to show")
    }

    return (
        <>
        <div className="flex flex-row gap-6 align-center mb-6 mt-10">
            <h2 className="text-xl font-bold ">{decade}</h2>
        <button className="bg-blue-500 text-white rounded px-4 py-2 max-h-xs"
        onClick={() => handleLoadMore()}
        >
            Load More
        </button>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {movies.slice(0, loadMore).map(movie => (
                <MovieCard
                    key={movie.imdbID}
                    title={movie.Title}
                    type={movie.Type}
                    year={movie.Year}
                    poster={movie.Poster}
                    imdbID={movie.imdbID}
                />
            ))}
        </section>
        </>
    );

}