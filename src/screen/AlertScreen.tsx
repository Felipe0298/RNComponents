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
           cancelable:true     
        }
        )
    }
    
    
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alerts'/>

            <Button 
            title='Mostrar alerta'
            onPress={showAlert}/>
        </View>
    );
}
