interface MovieCardProps {
    title: string;
    type: string;
    year: string;
    poster: string;
    imdbID: string;
}

export default function MovieCard({title, type, year, poster, imdbID} : MovieCardProps) {
        return (
            <div className="bg-sky-950 text-white rounded-lg shadow-md p-4 flex flex-col items-center w-64 min-h-80">
                <img src={poster} alt={title} className="w-40 h-56 object-cover rounded mb-2" />
                <h3 className="text-lg font-bold mb-1 text-center">{title}</h3>
                <p className="text-sm italic mb-1">{type}</p>
                <p className="text-sm mb-1">{year}</p>
                <p className="text-xs text-gray-300">ID: {imdbID}</p>
                <button
                    className="mt-2 bg-blue-500 text-white rounded px-4 py-2"
                    onClick={() => window.open(`https://www.imdb.com/title/${imdbID}`, "_blank")}
                >
                    Visit on IMDB
                </button>
            </div>
        );
}