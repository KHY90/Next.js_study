import { API_URL } from "../(home)/page";
import styles from "../styles/similar.module.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  overview: string;
}

async function getSimilar(id: string): Promise<Movie[]> {
  try {
    const response = await fetch(`${API_URL}/${id}/similar`);
    if (!response.ok) throw new Error("Failed to fetch similar movies");
    const data: Movie[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similarMovies = await getSimilar(id);

  if (similarMovies.length === 0) {
    return <h1 className={styles.loading}>No similar movies found.</h1>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Similar Movies</h2>
      <div className={styles.moviesGrid}>
        {similarMovies.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/placeholder.png"}
              alt={movie.title}
              className={styles.movieImage}
            />
            <h3 className={styles.movieTitle}>{movie.title}</h3>
            <p className={styles.movieInfo}>
              ⭐ {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)
            </p>
            <p className={styles.movieOverview}>{movie.overview || "No description available."}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
