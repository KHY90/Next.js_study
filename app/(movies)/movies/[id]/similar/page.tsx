import { getMovie } from "../../../../components/movie-info";
import { Suspense } from "react";
import MovieSimilar from "../../../../components/MovieSimilar";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function ProviderPage({ params }: IParams) {
  const { id } = params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie Similar</h1>}>
        <MovieSimilar id={id} />
      </Suspense>
    </div>
  );
}