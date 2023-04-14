import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';

import prompt from 'react-native-prompt-android';

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
       
        /* Alert.prompt(
            "Esta seguro?",
            "Esta accion no se puede revertir",
            (valor: string) => console.log("info: ", valor),
            "secure-text",
            "Hola mundo",
            "number-pad"
        ) */

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }
    
    
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alerts'/>

            <Button 
            title='Mostrar alerta'
            onPress={showAlert}/>

            <View style={{height:10}}/>
            
            <Button 
            title='Mostrar prompt'
            onPress={showPrompt}/>
        </View>
    );
}
