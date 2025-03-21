import { useEffect, useState } from "react";
import Movie from "../component/Movie";

function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoding(false);
  };
  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loding ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
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
