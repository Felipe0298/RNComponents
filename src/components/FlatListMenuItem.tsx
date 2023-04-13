import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { menuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

interface Props {
    menuItem: menuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {


    return (
        <TouchableOpacity>

            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color="gray"
                    size={23}
                />

                <Text style={{ color: "black", ...styles.itemText }}>{menuItem.name}</Text>

                <View style={{ flex: 1 }} /> 

                <Icon
                    name="chevron-forward-outline"
                    color="gray"
                    size={23}
                />
            </View>
        </TouchableOpacity>

    )
}


export const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    itemText: {
        marginLeft: 5,
        fontSize: 18
    }
});