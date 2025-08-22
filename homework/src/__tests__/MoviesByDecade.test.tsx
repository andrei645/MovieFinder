import { render, screen } from "@testing-library/react";
import MoviesByDecade from "../components/MoviesByDecade";

const sampleMovies = [
  { Title: "Batman Begins", Type: "movie", Year: "2005", Poster: "", imdbID: "tt0372784" },
  { Title: "The Dark Knight", Type: "movie", Year: "2008", Poster: "", imdbID: "tt0468569" },
  { Title: "Drive", Type: "movie", Year: "2011", Poster: "", imdbID: "tt0780504" }];

describe("MoviesByDecade", () => {

  it("renders fallback message when no movies", () => {
    render(<MoviesByDecade movies={[]} />);
    expect(screen.getByText(/No movies found/i)).toBeInTheDocument();
  });

  it("renders movies grouped by decade", () => {
    render(<MoviesByDecade movies={sampleMovies} />);
    expect(
      screen.getByText(/Movies categorized by Decade/i)
    ).toBeInTheDocument();

    expect(screen.getByText("2000")).toBeInTheDocument();
    expect(screen.getByText("2010")).toBeInTheDocument();

    expect(screen.getByText("Batman Begins")).toBeInTheDocument();
    expect(screen.getByText("The Dark Knight")).toBeInTheDocument();
    expect(screen.getByText("Drive")).toBeInTheDocument();
  });
});
