import { movieApi } from "@/core/api/movieAPI";
import { MovieDBCreditsResponse } from "@/infrastructure/interface/moviedv-CreditsResponse";
import { CastMapper } from "@/infrastructure/mappers/castMapper";


export const getMovieCastAction = async (movieId: number) => {
    try {
      const { data } = await movieApi.get<MovieDBCreditsResponse>(
        `/${movieId}/credits`
      );
      return data.cast.map(CastMapper.fromMovieDBCastToEntity);
    } catch (error) {
      console.log(error);
      throw 'Cant load cast by id';
    }
  };