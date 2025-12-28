import { Movie } from '@/infrastructure/interface/movie.interface'
import React, { useEffect, useRef } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import MoviePoster from './MoviePoster'

interface Props {
  movies: Movie[]
  title?: string
  className?: string
  loadNextPage? : () => void
}
const MovieHorizontal = ({ movies, title, className, loadNextPage }: Props) => {

  useEffect(() => {
  setTimeout(() => {
    isLoading.current = false;
  }, 200);
  }, [movies])
  

  const isLoading = useRef(false);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const {contentOffset, layoutMeasurement,contentSize} = event.nativeEvent;

    //Para determinar si esta cerca del final del scrool
    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width
    if(!isEndReached) return;

    isLoading.current = true;

  
    loadNextPage && loadNextPage()

  
  }

  return (
    <View className={`${className}`} >
      {title && <Text className='text-2xl font-bold px-4'>{title}</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item, i) => `${item.id}-${i}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (<MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  )
}

export default MovieHorizontal