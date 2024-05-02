import React from "react";
import MovieTile from "@/components/MovieTile";
import { IMovie } from "@/TYPES/movie.t";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MoviesCategory.css";
export default function MoviesCategory({
  category,
  movies,
}: {
  category: string;
  movies: IMovie[];
}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <h1 className="3xl font-bold pl-2 mb-2">{category}</h1>

      <div className="flex px-4 flex-row gap-2">
        <Carousel
          className="w-full h-80"
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          customTransition="all .5"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass=""
        >
          {movies.map((movie, i) => {
            return <MovieTile key={i} movie={movie} />;
          })}
        </Carousel>
      </div>
    </>
  );
}
