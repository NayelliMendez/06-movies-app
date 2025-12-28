import { movieApi } from "@/core/api/movieAPI";
import { MovieDBMoviesResponse } from "@/infrastructure/interface/moviedv-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const nowPlayingAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/now_playing')

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
  
        //console.log(JSON.stringify(data, null, 2))
        return movies;
    } catch (error) {
        console.log(error);
        throw 'Cannot load now playing movies'
    }
}

