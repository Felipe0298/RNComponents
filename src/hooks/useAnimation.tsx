import React, { useRef } from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;


    const fadeIn = () =>{
        Animated.timing(
            opacity,
            {
                toValue:1,
                duration:300,
                useNativeDriver:true //Ayuda a que la animation sea acelerada por hardware
            }
        ).start( () => console.log("Animacion terminó"))

    }

    const fadeOut= ()=>{
        Animated.timing(
            opacity,
            {
                toValue:0,
                duration:300,
                useNativeDriver:true
            }
        ).start()
    }

    const startMovingPosition = ( initPosition:number, duration: number = 300)=>{

        position.setValue(initPosition);
        Animated.timing(
            position,
            {
                toValue:0,
                duration,
                useNativeDriver:true,
                //easing: Easing.bounce //Esto es para que rebote
            }
        ).start()
    }

    return {
        fadeIn,
        fadeOut,
        opacity,
        position,
        startMovingPosition
    }

}
