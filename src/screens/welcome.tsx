import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { Alert, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../redux/store';
import { setUrl, clearStore } from '../redux/actions/actions';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5'

/*-----------------------------TYPES---------------------------------*/
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
};


/*-----------------------------REDUX---------------------------------*/
const mapStateToProps = (state: AppState) => {
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

function WelcomeScreen(props: Props) {


    const [socketUrl, setText] = React.useState('');


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text style={styles.header}>
                    Welcome Ros Mobile
               </Text>

                <Icon style={styles.iconStyle
                }
                    name="robot"
                    size={120}
                    color="#170" />
            </View>
            <View style={styles.body}>


                <TextInput
                    label="IP Address (192.168.1.42)"
                    mode="outlined"
                    style={styles.textInput}
                    value={socketUrl}
                    onChangeText={text => setText(text)}
                />


                <Button
                    style={styles.buttonStyle}
                    mode="contained"
                    onPress={() => {
                        try {
                            const url = "ws://" + socketUrl + ":9090/";
                            props.setUrl(url);

                        } catch (error) {
                            Alert.alert(error)
                        }
                    }}
                >
                    <Text style={{ color: "white" }}>
                        Submit
                    </Text>

                </Button>

                <Text>
                    {props.appstate.url}
                </Text>

            </View>
        </SafeAreaView >
    )
}

export default connector(WelcomeScreen);


const styles = StyleSheet.create({
    header: {
        marginTop: 35,
        alignSelf: "center",
        width: Dimensions.get("screen").width * 0.8,
        textAlign: "center",
        fontSize: 32,
        color: "#170",
        fontWeight: "600",
        alignItems: "center"
    },
    textInput: {
        width: Dimensions.get("screen").width * 0.6,
        backgroundColor: "white",
        bottom: 30,

    },
    buttonStyle: {
        width: 120,
    },
    body: {
        flex: 1,
        top: -50,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    iconStyle: {
        top: 55,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center"
    }
})