"use client";
import React, { useState, useEffect } from "react";
import { IMovieSearch } from "@/TYPES/moviesSearch.t";
import LayOut from "@/components/LayOut";
import MoviesCategory from "@/components/MoviesCategory";
import UnAuthorized from "@/components/UnAuthorized";
import fetchMoviesHook from "@/hook/FetchMoviesHook";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();
  const [moviesHome, setMoviesHome] = useState<IMovieSearch | null>(null);
  const [moviesHarry, setMoviesHarry] = useState<IMovieSearch | null>(null);
  const [moviesMatrix, setMoviesMatrix] = useState<IMovieSearch | null>(null);
  const [moviesMarvel, setMoviesMarvel] = useState<IMovieSearch | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesHomeData = await fetchMoviesHook("s", "home");
      const moviesHarryData = await fetchMoviesHook("s", "Harry Potter");
      const moviesMatrixData = await fetchMoviesHook("s", "Matrix");
      const moviesMarvelData = await fetchMoviesHook("s", "Marvel");
      setMoviesHome(moviesHomeData);
      setMoviesHarry(moviesHarryData);
      setMoviesMatrix(moviesMatrixData);
      setMoviesMarvel(moviesMarvelData);
    };

    fetchMovies();
  }, []);

  if (status !== "authenticated") {
    return (
      <LayOut showSearch={false}>
        <UnAuthorized />
      </LayOut>
    );
  }

  return (
    <LayOut clsx="">
      <div className="mb-10">
        <MoviesCategory category="Home" movies={moviesHome?.Search || []} />
      </div>
      <div className="mb-10">
        <MoviesCategory
          category="Harry Potter"
          movies={moviesHarry?.Search || []}
        />
      </div>
      <div className="mb-10">
        <MoviesCategory category="Matrix" movies={moviesMatrix?.Search || []} />
      </div>
      <div className="mb-10">
        <MoviesCategory category="Marvel" movies={moviesMarvel?.Search || []} />
      </div>
    </LayOut>
  );
}
