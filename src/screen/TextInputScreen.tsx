import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Text Inputs'/>

            <TextInput style={stylesScreen.textInputStyle}/>
        </View>
    );
}


export const stylesScreen = StyleSheet.create({
    textInputStyle:{
        borderWidth:1,
        opacity:0.3,
        height:50,
        paddingHorizontal:10,
        borderRadius:10
    }
});