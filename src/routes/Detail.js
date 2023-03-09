import { useState } from "react";
import { useParams } from "react-router-dom";
// import Movie from "../components/Movie";

// function Detail() {
//     const [loading, setLoading] = useState(true);
//     const [movies, setMovies] = useState([]);
//     const { id } = useParams();
//     const getMovie = async () => {
//         const json = await (
//             await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
//         ).json();
//         setMovies(json.data.movies);
//         setLoading(false);
//         console.log(json);
//     };
//     useEffect(() => {
//         getMovie();
//     }, []);

//     return (
//         <div>
//             {loading ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 <div>
//                     {movies.map((movie) => (
//                         <Movie
//                             key={movie.id}
//                             id={movie.id}
//                             coverImg={movie.medium_cover_image}
//                             title={movie.title}
//                             year={movie.year}
//                             summary={movie.summary}
//                             genres={movie.genres}
//                         />
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json);
  };
    getMovie();
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Detail;