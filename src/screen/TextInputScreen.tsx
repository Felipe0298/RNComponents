import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ScrollView } from 'react-native-gesture-handler';

export const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const onChange = (value: string, field: string) => {
        setForm({
            ...form,
            [field]: value
        })
    }

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
    }
});