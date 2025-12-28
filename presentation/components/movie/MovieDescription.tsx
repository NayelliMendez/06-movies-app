import { Formatter } from '@/config/helpers/formatter'
import { Cast, CompleteMovie } from '@/infrastructure/interface/movie.interface'
import React from 'react'
import { Text, View } from 'react-native'

interface Props {
    movie: CompleteMovie,
    actorCard?: Cast[]
}
const MovieDescription = ({movie}: Props) => {
  return (
    <View className='mx-5'>
        <View className='flex '>
        <Text>Calificación: {movie.rating}</Text>
        <Text> - {movie.genres.join(', ')}</Text>
        </View>

        <Text className='font-bold mt-5'>Historia</Text>
        <Text className='font-normal mt-2'>{movie.description}</Text>
        <Text className='font-bold mt-4'>{Formatter.currency(movie.budget)}</Text>
      
    </View>
  )
}

export default MovieDescription