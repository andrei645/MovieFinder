import { useMemo } from "react";
import MoviesList from "./MoviesList";

type Movie = {
    Title: string;
    Type: string;
    Year: string;
    Poster: string;
    imdbID: string;
}

interface MoviesByDecadeProps {
    movies:Movie[]
}

export default function MoviesByDecade({movies}:MoviesByDecadeProps) {

    const cachedMovies = useMemo(()=> {
        return movies.reduce<Record<number, Movie[]>>((acc, mov) => {
            const year = Number(mov.Year.slice(0, 4));
            if (Number.isNaN(year)) return acc;

            const decade = Math.floor(year / 10) * 10;

            if (!acc[decade]) {
                acc[decade] = [];
            }

            acc[decade].push(mov);

            return acc;
            }, {});
    },[movies]);

  return (
    <> {movies.length > 0 ? 
        <section>
      <h2 className="text-xl font-bold mb-4">Movies categorized by Decade</h2>
         {Object.entries(cachedMovies)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([decade, movies]) => (
        <MoviesList key={decade} decade={Number(decade)} movies={movies} />
      ))}
    </section> : <h1 className="text-xl font-bold mb-4">No movies found</h1>
    }

    </>
  );
}