import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman",]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama",]
    }
];

export const CustomSectionListScreen = () => {
    return (
        <View style={{...styles.globalMargin, flex:1}}>
            <SectionList
                sections={casas}
                keyExtractor={(index, item)=> index+item}
                ListHeaderComponent={() => <HeaderTitle title="Section List"/>}
                renderItem={({item})=><Text>{item}</Text>}
                renderSectionHeader={({section}) =>(
                    <View style={{backgroundColor:"white"}}>
                        <HeaderTitle title={section.casa}/>
                    </View>
                ) }
                stickySectionHeadersEnabled ={true}

                ListFooterComponent={ () => (
                    <View style={{marginBottom:100}}>
                        <HeaderTitle title={"Total de casas "+ casas.length}/>
                    </View>
                )}
                renderSectionFooter={ ({ section}) => <HeaderTitle title={"Total: "+ section.data.length}/>}
                SectionSeparatorComponent={ () => <ItemSeparator/>}
                /* ItemSeparatorComponent={() => <ItemSeparator/>} */

                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
