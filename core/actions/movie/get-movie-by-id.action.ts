import { movieApi } from "@/core/api/movieAPI";
import { CompleteMovie } from "@/infrastructure/interface/movie.interface";
import { MovieDBMovieResponse } from "@/infrastructure/interface/moviedv-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async(id:number | string): Promise<CompleteMovie> => {
    try {
        const {data} = await movieApi.get<MovieDBMovieResponse>(`/${id}`)
 
        return  MovieMapper.fromTheMovieDBToCompleteMovie(data)

    } catch (error) {
        console.log(error)
        throw 'Cannot load now playing movies';
    }
}