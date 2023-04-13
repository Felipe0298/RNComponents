import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';




export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader = () => {
        return (
            <View style={{ marginTop: top + 20, marginBottom: 20 }}>
                <Text style={styles.title}>Opciones de Menu</Text>
            </View>
        )
    }

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
                ListHeaderComponent={() => renderListHeader()}
                ItemSeparatorComponent={() => itemSeparator()}
            />

        </View>
    )
}
