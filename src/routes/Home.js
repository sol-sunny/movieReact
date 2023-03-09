import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;


    // <div>
    //   {loading ? (<h1>Loading...</h1>) : (    //loading이 true이면 h1태그 보여주고 true가 아니면 div태그 보여준다. >>? 이면 이라는 뜻, : 아니면 이라는 뜻
    //     <div>
    //       {movies.map((movie) => (  //map은 어레이에 있는 movies의 각 아이템을 하나씩 빼준다. / 단 map을 쓸때 유일한 key가 필요하다. 이름 지정해주면 된다.
    //         <div key={movie.id}>
    //           <img src={movie.medium_cover_image} />
    //           <h2>{movie.title}</h2>
    //           <p>{movie.summary}</p>
    //           <ul>
    //             {movie.genres.map((g) => (     //장르가 어레이에 담겨 있기에 map을 쓰고 고유한 key값이 필요하다.
    //               <li key={g}>{g}</li>)
    //             )}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>