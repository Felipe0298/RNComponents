import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { menuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: menuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={()=>navigation.dispatch(CommonActions.navigate({name: menuItem.component}))}>

            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color="gray"
                    size={23}
                />

                <Text style={{ color: "black", ...styles.itemText }}>{menuItem.name}</Text>

                <View style={{ flex: 1 }} /> 
                {/* Para que la flecha se vaya al fondo, el flex:1 hace que 
                                                se ocupe todo el espacio */}

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