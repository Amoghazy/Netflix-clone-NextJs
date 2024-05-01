import { IMovie } from "@/TYPES/movie.t";
import { IMovieSearch } from "@/TYPES/moviesSearch.t";
import LayOut from "@/components/LayOut";
import MovieTile from "@/components/MovieTile";
import MoviesCategory from "@/components/MoviesCategory";
import UnAuthorized from "@/components/UnAuthorized";
import fetchMoviesHook from "@/hook/FetchMoviesHook";
import { useSession } from "next-auth/react";
import React from "react";

export default async function Page() {
  const { data: session, status } = useSession();
  try {
    if (status !== "authenticated") {
      return <UnAuthorized />;
    }
    const moviesHome: IMovieSearch = await fetchMoviesHook("s", "home");
    const moviesHarry: IMovieSearch = await fetchMoviesHook(
      "s",
      "Harry Potter"
    );
    return (
      <LayOut clsx="">
        <div className="mb-8">
          <MoviesCategory category="Home" movies={moviesHome.Search} />
        </div>
        <div className="mb-8">
          <MoviesCategory category="Harry Potter" movies={moviesHarry.Search} />
        </div>{" "}
      </LayOut>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return <div>Error fetching movie data</div>;
  }
}
// NODE_OPTIONS=--max-old-space-size=2048 npm run dev
