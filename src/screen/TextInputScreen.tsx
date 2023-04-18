import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';
import { CustonSwitch } from '../components/CustonSwitch';

export const TextInputScreen = () => {

   
    const { form ,onChange, isSubscribed } = useForm({
        name: "",
        email: "",
        phone: "",
        isSubscribed: false,
    })

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title='Text Inputs' />

                        <TextInput style={stylesScreen.textInputStyle}
                            placeholder='Ingrese su nombre'
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value) => onChange(value, "name")}
                        />
                        <TextInput style={stylesScreen.textInputStyle}
                            placeholder='Ingrese su email'
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(value) => onChange(value, "email")}
                            keyboardType='email-address'
                        />

                        <View style={stylesScreen.swichtRow}>
                            <Text style={stylesScreen.switchText}>Suscribirse</Text>
                            <CustonSwitch isOn={isSubscribed} onChange={(value) => onChange(value, "isSubscribed")} />
                        </View>

                        <HeaderTitle title={JSON.stringify(form, null, 3)} />
                        <HeaderTitle title={JSON.stringify(form, null, 3)} />


                        <TextInput style={stylesScreen.textInputStyle}
                            placeholder='Ingrese su telefono'
                            onChangeText={(value) => onChange(value, "phone")}
                            keyboardType='phone-pad'

                        />
                    </View>
                </TouchableWithoutFeedback>

            </ScrollView>

            <View style={{ height: 100 }} />

        </KeyboardAvoidingView>

    );
}


export const stylesScreen = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        opacity: 0.3,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    switchText:{
        fontSize:25
    },
    swichtRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:10
    }
});