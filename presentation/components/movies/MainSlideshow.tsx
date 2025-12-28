import { Movie } from '@/infrastructure/interface/movie.interface';
//import { useRef } from 'react';
import { Dimensions, FlatList, View } from 'react-native';
import MoviePoster from './MoviePoster';

//import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

interface Props {
  movies?: Movie[] 

}

const { width: screenWidth } = Dimensions.get('window');

const MainSlideshow = ({ movies }: Props) => {
 
//const ref = useRef<ICarouselInstance>(null)
  return (
    <View className='h-[250px] w-full mb-5'>
   <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>  <MoviePoster id={item.id} poster={item.poster}/>}
        style={{ width: screenWidth, height: 350 }}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center'}}
        
        />
    </View>
  )
}

export default MainSlideshow


{/**
   <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => <Text>{item.title}</Text> }
        width={200}
        height={300}
        style={{
          height: 350,
          justifyContent:'center',
          alignItems:'center',
        }}
        mode='parallax'
        modeConfig={{
          parallaxScrollingOffset: 50,
          parallaxScrollingScale:0.9
        }}
        defaultIndex={1}
          /> */}

          