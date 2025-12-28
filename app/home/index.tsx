import MainSlideshow from '@/presentation/components/movies/MainSlideshow'
import MovieHorizontal from '@/presentation/components/movies/MovieHorizontal'
import { useMovies } from '@/presentation/hooks/useMovies'
import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const HomeScreen = () => {
  const safeArea = useSafeAreaInsets()
  const { nowPlayingQuery, popularQuery, topRatedQuery, upComingQuery } = useMovies()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='justify-center items-center flex-1'>
        <ActivityIndicator color="purple" size={40} />
      </View>
    )
  }

  return (
    <ScrollView>

      <View className='mt-2 pb-10'  style={{ paddingTop: safeArea.top }}>
        <Text className='text-3xl font-bold px-34 mb-2'>Movie App</Text>

        {nowPlayingQuery.data && <MainSlideshow movies={nowPlayingQuery.data} />}

        {popularQuery.data && <MovieHorizontal movies={popularQuery.data} title="Populares" className='mb-5' />}

        {topRatedQuery.data && <MovieHorizontal movies={topRatedQuery.data.pages.flat()} title="Mejor Calificadas" className='mb-5' loadNextPage={topRatedQuery.fetchNextPage}/>}

        {upComingQuery.data && <MovieHorizontal movies={upComingQuery.data} title="Proximamente" className='mb-5' />}
      </View>

    </ScrollView>

  )
}

export default HomeScreen;
