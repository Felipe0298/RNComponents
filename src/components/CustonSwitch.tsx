import React, { useState } from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';

interface Props{
    isOn:boolean,
    onChange: (value: boolean)=> void;
}

export const CustonSwitch = ({isOn, onChange}:Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn)
    const toggleSwitch = () => {
        setIsEnabled( !isEnabled);
        onChange(!isEnabled)
    }

    return (
        <Switch
            trackColor={{false: '#D9D9DB', true: '#5858D6'}}
            thumbColor={(Platform.OS === "android") ? "#5856d6" : ""}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
    );
}

const styles = StyleSheet.create({

});