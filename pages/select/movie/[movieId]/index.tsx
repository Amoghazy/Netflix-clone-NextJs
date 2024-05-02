import { GetServerSidePropsContext } from "next";
import { IMovie } from "@/TYPES/movie.t";
import Image from "next/image";
import "@/app/globals.css";
import LayOut from "@/components/LayOut";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import UnAuthorized from "@/components/UnAuthorized";
export default function Page({ movieData }: { movieData: IMovie }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status !== "authenticated") {
    return (
      <LayOut showSearch={false}>
        <UnAuthorized />
      </LayOut>
    );
  }
  return (
    <LayOut
      showSearch={false}
      goToLogo={() => {
        router.push("/dashboard");
      }}
    >
      <div className="relative bg-cover bg-center h-96 md:h-screen">
        <Image
          src={movieData.Poster || "default-poster-url"}
          width={"226"}
          height={"127"}
          alt="show"
          className="w-72 h-96 mx-auto pt-4"
          priority
          fetchPriority="high" // Correct casing
        />

        <div className="container mx-auto px-4 md:px-0 relative  flex flex-col ">
          <div className="text-center text-white">
            <span className="text-xs font-semibold tracking-wider uppercase text-yellow-500">
              {movieData.Genre}
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mt-2">
              {movieData.Title}
            </h1>
            <p className="text-lg mt-4">{movieData.Plot}</p>
            <div className="flex items-center justify-center mt-6">
              <span className="inline-block py-2 px-4 mr-2 bg-yellow-500 text-black font-bold uppercase">
                {movieData.Runtime}
              </span>

              <div className="star-rating">
                {[...Array(Math.floor(movieData.imdbRating / 2))].map(
                  (_, index) => (
                    <i key={index} className="inline-block text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </i>
                  )
                )}{" "}
                <span className="text-white font-semibold ">
                  {movieData.imdbRating}/10
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { movieId }: any = context.params;

  const movieData: IMovie = await fetch(
    `https://www.omdbapi.com/?apikey=b7a64d7c&i=${movieId}`
  ).then((res) => res.json());

  return { props: { movieData } };
}
