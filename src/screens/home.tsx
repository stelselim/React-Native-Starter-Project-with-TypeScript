import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../redux/store';
import { setUrl, clearStore } from '../redux/actions/actions';
import { HomeStackParamList } from '../routes/Stacks';
import WebView from 'react-native-webview';
import { HOME_HTML } from '../htmls/home';

/*-----------------------------TYPES---------------------------------*/
type HomeScreenProps = StackScreenProps<HomeStackParamList, 'Home'>;
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
    navigation: HomeScreenProps;
};


/*-----------------------------REDUX---------------------------------*/
const mapStateToProps = (state: AppState) => {
    console.log(state);
    return {
        appstate: state
    }
};
const mapDispatchToProps = {
    setUrl,
    clearStore,
};
const connector = connect(mapStateToProps, mapDispatchToProps);


/*-----------------------------COMPONENT---------------------------------*/

function HomeScreen(props: Props) {

    return (
        <SafeAreaView style={{flex:1}}>
             <WebView 
                style={{flex:1}}
                source={{html: HOME_HTML(props.appstate.url)}}
            />
        </SafeAreaView>
    )
}

export default connector(HomeScreen);