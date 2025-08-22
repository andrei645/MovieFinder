import { render, screen } from "@testing-library/react";
import MovieCard from "../components/MovieCard";

describe("MovieCard", () => {
  const props = {
    title: "Batman Begins",
    type: "movie",
    year: "2005",
    poster: "https://example.com/batman.jpg",
    imdbID: "tt0372784",
  };

  it("renders all movie details", () => {
    render(<MovieCard {...props} />);

    expect(screen.getByText("Batman Begins")).toBeInTheDocument();
    expect(screen.getByText("movie")).toBeInTheDocument();
    expect(screen.getByText("2005")).toBeInTheDocument();
    expect(screen.getByText("ID: tt0372784")).toBeInTheDocument();

    const img = screen.getByAltText("Batman Begins");
    expect(img).toHaveAttribute("src", props.poster);
  });
});
