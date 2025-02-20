import { getMovie } from "../../../../components/movie-info";
import { Suspense } from "react";
import MovieCredits from "../../../../components/MovieCredits";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function CreditsPage({ params }: IParams) {
  const { id } = params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie 크래딧</h1>}>
        <MovieCredits id={id} />
      </Suspense>
    </div>
  );
}