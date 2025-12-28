import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable } from 'react-native';


interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean
}
const MoviePoster = ({id, poster, smallPoster}: Props) => {

  return (
   <Pressable className='active:opacity-90'
   onPress={ () => router.push(`/movie/${id}`)}>
    <Image 
    source={{uri: poster}}
    className="shadow-lg  rounded-2xl w-full h-full"
    style={{
      padding: 10,
      width: smallPoster ? 85 : 150,
      height: smallPoster ? 130: 250,
    }}
    resizeMode='cover'
      />
   </Pressable>
  )
}

export default MoviePoster