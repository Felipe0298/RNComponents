import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';


export const HomeScreen = () => {


    const itemSeparator = () => {
        return (
            <View style={{
                borderBottomWidth: 5,
                opacity: 0.4,
                marginVertical: 8
            }} />
        )
    }


    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>


            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item}/>}
                keyExtractor={(item) => item.name} //TIene que ser algo unico y un string
                ListHeaderComponent={() => <HeaderTitle title='Opciones de menú'/>}
                ItemSeparatorComponent={() => itemSeparator()}
            />

        </View>
    )
}
