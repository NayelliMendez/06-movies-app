import { Movie } from '@/infrastructure/interface/movie.interface';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import {
  Extrapolate,
  interpolate
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import MoviePoster from './MoviePoster';

const { width } = Dimensions.get('window');


interface Props {
  movies: Movie[];
}

 function AnimatedCarousel({movies}: Props) {
  const customAnimation = (value: number) => {
    'worklet';
    // Se usa 'worklet' para que la función se ejecute en el hilo de la UI
    return {
      // El valor de escala se ajusta en función de la posición del ítem
      // Se escala el ítem a 0.8 cuando está lejos y a 1 cuando está en el centro
      transform: [
        {
          scale: interpolate(
            value,
            [-1, 0, 1],
            [0.8, 1, 0.8],
            Extrapolate.CLAMP
          ),
        },
      ],
      // La opacidad también cambia, haciendo que los ítems lejanos se vean más tenues
      opacity: interpolate(
        value,
        [-1, 0, 1],
        [0.4, 1, 0.4],
        Extrapolate.CLAMP
      ),
    };
  };

 

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width} // Ancho del carrusel, generalmente el de la pantalla
        height={width / 2} // Altura del carrusel
        autoPlay={true}
        data={movies}
        scrollAnimationDuration={1500}
        customAnimation={customAnimation} // Se aplica la animación personalizada
        renderItem={({ item }) =>  <MoviePoster id={item.id} poster={item.poster}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 10,
  },
  cardText: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
});

export default AnimatedCarousel