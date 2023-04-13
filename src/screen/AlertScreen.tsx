import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { Button } from 'react-native';

export const AlertScreen = () => {

    const showAlert = () =>{
        Alert.alert('Titulo', 'Este es el msj de la alerta', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'destructive',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')}
        ]
        ,
        {
           cancelable:true      //Para que al tocar afuera de la alerta, se salga solo en android
        }
        )
    }

    const showPrompt = () => {
       
        Alert.prompt(
            "Esta seguro?",
            "Esta accion no se puede revertir",
            (valor: string) => console.log("info: ", valor),
            "secure-text",
            "Hola mundo",
            "number-pad"
        )
    }
    
    
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alerts'/>

            <Button 
            title='Mostrar alerta'
            onPress={showAlert}/>
            
            <Button 
            title='Mostrar prompt'
            onPress={showPrompt}/>
        </View>
    );
}
