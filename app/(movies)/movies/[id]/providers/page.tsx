import { getMovie } from "../../../../components/movie-info";
import { Suspense } from "react";
import MovieProvider from "../../../../components/MovieProvider";

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
      <Suspense fallback={<h1>Loading movie 공급자</h1>}>
        <MovieProvider id={id} />
      </Suspense>
    </div>
  );
}