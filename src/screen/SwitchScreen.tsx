import React, { useState } from 'react';
import {StyleSheet, Text, View, Switch, Platform} from 'react-native';

export const SwitchScreen = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled( !isEnabled);

    return (
        <View style={styles.container}>
          <Switch
            trackColor={{false: '#D9D9DB', true: '#5858D6'}}
            thumbColor={(Platform.OS === "android") ? "#5856d6" : ""}
            //ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      );
    };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});