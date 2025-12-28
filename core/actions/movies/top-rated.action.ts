import { movieApi } from "@/core/api/movieAPI";
import { MovieDBMoviesResponse } from "@/infrastructure/interface/moviedv-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
    page? : number;
    limit?: number;
}

//el page y limit es para que el scrool sea infinity
export const topRatedAction = async ({page = 1, limit = 10}: Options) => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('top_rated', {
            params: {
                page:page,
            },
        });

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)
  
        //console.log(JSON.stringify(data, null, 2))
        return movies;
    } catch (error) {
        console.log(error);
        throw 'Cannot load top_rated movies'
    }
}
