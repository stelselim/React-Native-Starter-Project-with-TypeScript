import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View style={{ alignSelf: "center" }}>
                <Text>
                    Hello React Native
                </Text>
            </View>
            <Button style={{ width: 120 }} mode="contained">
                Press me
            </Button>
        </SafeAreaView>
    )
}
export default HomeScreen;