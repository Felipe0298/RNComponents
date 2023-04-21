import React, { useState } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';
import { Modal } from 'react-native';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='ModalScreen'/>

            <Button title='Abrir modal' onPress={()=> setIsVisible(true)}/>

            <Modal
                animationType='slide'
                visible={isVisible}
                transparent={true}
            >
                                {/* Background negro */}
                <View style={{flex:1 /* width:100, height:100 */, backgroundColor:"rgba(0,0,0,0.3)"}}/>

                                {/* Contenido del modal */}
                <View
                style={{backgroundColor:"white"}}>
                    <HeaderTitle title='Modal'/>
                    <Text>Cuerpo del modal</Text>
                    <Button title='Cerrar'
                    onPress={()=> setIsVisible(false)}/>
                </View>

            </Modal>
        </View>
    );
}
