import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";

export default async function MovieDetail({
    params: { id },
}: {
    params: { id: string };
}) {

    return (
        <div>
            <h3>영화 디테일 페이지</h3>
            <Suspense fallback={<h1>Loading 영화 정보</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <h4>비디오</h4>
            <Suspense fallback={<h1>Loading 비디오</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}