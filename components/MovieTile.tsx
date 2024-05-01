// "use client";

// import { IMovie } from "@/TYPES/movie.t";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";

// export default function MovieTile({ movie }: { movie: IMovie }) {
//   const router = useRouter();
//   const [isHover, setHover] = useState(false);

//   return (
//     <div
//       className="hover:scale-110 "
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//     >
//       <Image
//         fetchPriority="high"
//         src={
//           movie.Poster === "N/A"
//             ? "/default-poster-url"
//             : movie.Poster || "/default-poster-url"
//         }
//         priority
//         width={"226"}
//         height={"127"}
//         alt="Not found poster"
//         className="w-32 h-40"
//       />
//       {isHover && (
//         <div className="mt-1">
//           <div className="flex">
//             <button
//               onClick={() => router.push(`/select/movie/${movie.imdbID}`)}
//               type="button"
//               className=" ml-2 text-white border border-white hover:bg-white hover:border-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center
//           "
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-play-fill"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
//               </svg>
//             </button>
//             <button
//               type="button"
//               className=" ml-2 text-white border border-white hover:bg-white hover:border-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center
//           "
//             >
//               <svg
//                 className="w-4 h-4"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 18 18"
//               >
//                 <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
