import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import Link from "next/link";
import styles from "../../../styles/movie-detail.module.css";

interface IParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: IParams) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params }: IParams) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      
      <div className={styles.linkContainer}>
        <Link href={`/movies/${id}/credits`} className={styles.linkBox}>
          View Movie Credits
        </Link>
        <Link href={`/movies/${id}/providers`} className={styles.linkBox}>
          View Movie Providers
        </Link>
        <Link href={`/movies/${id}/similar`} className={styles.linkBox}>
          View Movie Similar
        </Link>
      </div>

      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
