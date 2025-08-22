import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import MoviesByDecade from "./MoviesByDecade";
import Spinner from "../utils/Spinner";

type Movie = {
    Title: string;
    Type: string;
    Year: string;
    Poster: string;
    imdbID: string;
}

interface MoviesPanelPageProps {
    input: string;
}

export default function MoviesPanelPage({input}:MoviesPanelPageProps){

    const [movies, setMovies] = useState<Movie[]>([]);
    const [isTyped, setIsTyped] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const debouncedInput = useDebounce(input);
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const baseUrl = import.meta.env.VITE_OMDB_BASE_URL;

    useEffect(()=> {

        setIsTyped(!!debouncedInput);
        if(!debouncedInput) return;

        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`${baseUrl}?s=${debouncedInput}&apikey=${apiKey}`);

                if(!response.ok) {
                    throw new Error("Failing movies fetch");
                }

                const data = await response.json();
                const moviesArray:Movie[] = Array.isArray(data.Search) ? data.Search : [];

                const uniqueMovies:Movie[] = Array.from(
                new Map(moviesArray.map((movie:Movie) => [movie.imdbID, movie])).values()
                );

               setMovies(uniqueMovies);
               setIsLoading(false);
               console.log(uniqueMovies, "uniqueMovies");
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        }

        fetchMovies();
    },[debouncedInput]);

  return (
    <> 
    {input ? <h1 className="mb-4 mt-4">Searching : {input}</h1> : "Type to search your favorites movies ..."}
    {isLoading ? <Spinner /> : isTyped ? <MoviesByDecade movies={movies} /> : null }
    </>
  );
}
