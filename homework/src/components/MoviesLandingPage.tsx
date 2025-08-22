import Search from "./Search";
import MoviesPanelPage from "./MoviesPannelPage";
import { useState } from "react";

export default function MoviesLandingPage(){

    const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Movies Finder</h1>
      <Search onChange={setSearchQuery}/>
      <MoviesPanelPage input={searchQuery} />
    </div>
  );
}
