import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../redux/store';
import { setUrl, clearStore } from '../redux/actions/actions';
import { HomeStackParamList } from '../routes/Stacks';

/*-----------------------------TYPES---------------------------------*/
type HomeScreenProps = StackScreenProps<HomeStackParamList, 'Home'>;
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
    navigation: HomeScreenProps;
};


/*-----------------------------REDUX---------------------------------*/
const mapStateToProps = (state: AppState) => ({
    appstate: {
        url: state.url,
    }
});
const mapDispatchToProps = {
    setUrl,
    clearStore,
};
const connector = connect(mapStateToProps, mapDispatchToProps);


/*-----------------------------COMPONENT---------------------------------*/

function MapScreen(props: Props) {


    return (
        <SafeAreaView>
            <View style={{ alignSelf: "center" }}>
                <Text>
                    Hello React Native
                </Text>
            </View>
            <Button onPress={() => {
                props.setUrl("ASDSADA")
            }} style={{ width: 120 }} mode="contained">
                Press me
            </Button>
            <Text>
                {props.appstate.url}
            </Text>

        </SafeAreaView>
    )
}

export default connector(MapScreen);