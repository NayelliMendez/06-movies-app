import { Cast } from '@/infrastructure/interface/movie.interface';
import React from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { ActorCard } from './ActorCard';


interface Props {
  cast: Cast[],
}

const { width: screenWidth } = Dimensions.get('window');

const MovieCast = ({ cast }: Props) => {
    
  return (
    <View className="mt-5 ">
      <Text className="font-bold text-2xl px-5">Actores</Text>
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) =>  <ActorCard actor={item} />}
        style={{ width: screenWidth, height: 250 }}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center'}}
        
        />
    </View>
  );
};
export default MovieCast
