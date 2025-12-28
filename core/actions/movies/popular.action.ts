import { movieApi } from "@/core/api/movieAPI";
import { MovieDBMoviesResponse } from "@/infrastructure/interface/moviedv-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const popularMoviesAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular')

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
  
        //console.log(JSON.stringify(data, null, 2))
        return movies;
    } catch (error) {
        console.log(error);
        throw 'Cannot load npopular movies'
    }
}

