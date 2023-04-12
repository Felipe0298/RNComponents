import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons"

interface menuItem {
    name: string;
    icon: string;
    components: string;
}

const menuItems = [
    {
        name: "Animation 101",
        icon: "cube-outline",
        components: "Animation101Screen"
    }
]
export const HomeScreen = () => {

    const renderMenuItem = (menuItem: menuItem) => {
        return (
            <View>
                <Text style={{color:"black"}}>{menuItem.name} - {menuItem.icon}</Text>
            </View>
        )
    }


    return (
        <View style={{ flex: 1, }}>

            <FlatList
                data={menuItems}
                renderItem={({item}) => renderMenuItem( item )}
                keyExtractor={(item)=> item.name} //TIene que ser algo unico y un string
            />

        </View>
    )
}
