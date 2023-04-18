import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustonSwitch } from '../components/CustonSwitch';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    const onChange = (value: boolean, field: keyof typeof state) =>{
        setState({
            ...state,
            [field]:value
        })
    }

    const {isActive, isHappy, isHungry} =state;

    return (
        <View style={styles.container}>

            <HeaderTitle title='Swtiches' />

            <View style={styles.swichtRow}>
            <Text style={styles.switchText}>isActive</Text>
            <CustonSwitch isOn={isActive} onChange={(value)=> onChange(value, "isActive")}/>
            </View>

            <View style={styles.swichtRow}>
            <Text style={styles.switchText}>isHungry</Text>
            <CustonSwitch isOn={isHungry} onChange={(value)=> onChange(value, "isHungry")}/>
            </View>

            <View style={styles.swichtRow}>
            <Text style={styles.switchText}>isHappy</Text>
            <CustonSwitch isOn={isHappy} onChange={(value)=> onChange(value, "isHappy")}/>
            </View>

            <Text style={styles.switchText}>
                {
                    JSON.stringify(state, null,5)
                }
            </Text>

        </View>
    );
};


const styles = StyleSheet.create({
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