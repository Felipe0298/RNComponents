import React, { useState } from 'react';
import {ScrollView, StyleSheet, Text, View, RefreshControl} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh =() =>{
        setRefreshing(true);

        setTimeout(() => {
            console.log("Terminamos")
            setRefreshing(false)
        }, 1500);
    }

    return (
        <ScrollView
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>
        <View style={styles.globalMargin}>
            <HeaderTitle title='Pull To Refresh'/>
        </View>
        </ScrollView>
            
    );
}
