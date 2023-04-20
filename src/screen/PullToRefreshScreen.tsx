import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);

    const [data, setData] = useState<string>();

    const {top} = useSafeAreaInsets();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log("Terminamos")
            setRefreshing(false);
            setData("Hola mundo")
        }, 1500);
    }

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top: 0
            }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={100} //Para desplazar mas para abajo el simbolo de cargando
                    progressBackgroundColor="#5856D6"
                    colors={["white", "blue" , "green" , "red"]} //Solo en android, sirve para que cambie de color la rueda de carga
                                //Solo para iOS, se soluciona con lo del usesafeareainsents, ya esta solucionado a dia de hoy, 20/04/2023
                    style={{backgroundColor:"#5856D6"}} 
                    tintColor="white"
                />
            }>
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull To Refresh' />
                {
                    data && <HeaderTitle title={data} />
                }

            </View>
        </ScrollView>

    );
}
