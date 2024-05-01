"use client";
import { IMovie } from "@/TYPES/movie.t";
import { IMovieSearch } from "@/TYPES/moviesSearch.t";
import LayOut from "@/components/LayOut";
import MovieTile from "@/components/MovieTile";
import fetchMoviesHook from "@/hook/FetchMoviesHook";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [movies, setMovies] = useState<IMovieSearch | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const query = searchParams?.get("q");
      const movies: IMovieSearch = await fetchMoviesHook("s", query!);
      return movies;
    };

    const fetchData = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };

    fetchData();
  }, [searchParams]);
  return (
    <LayOut goToLogo={() => router.push("/dashboard")}>
      <div className="grid grid-cols-3 gap-2 p-6 ">
        {movies?.Search?.map((movie: IMovie, i: number) => {
          return (
            <div key={i} className="mb-6">
              <MovieTile movie={movie} />
            </div>
          );
        })}
      </div>
    </LayOut>
  );
}
