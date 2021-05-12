import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import MapScreen from '../screens/map';
import RemoteScreen from '../screens/remote';

/*----------------------------------------------------------------------*/

export type HomeStackParamList = {
    Home: { name: string };
    Sensors: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();


/*----------------------------------------------------------------------*/

export type MapStackParamList = {
    Map: undefined;
};

const MapStack = createStackNavigator<MapStackParamList>();


/*----------------------------------------------------------------------*/

export type RemoteStackParamList = {
    Remote: undefined;
};

const RemoteStack = createStackNavigator<RemoteStackParamList>();


/*----------------------------------------------------------------------*/


export function MapStackScreen() {
    return (
        <MapStack.Navigator>
            <MapStack.Screen name="Map" component={MapScreen} />
        </MapStack.Navigator>
    );
}

export function RemoteStackScreen() {
    return (
        <RemoteStack.Navigator>
            <RemoteStack.Screen name="Remote" component={RemoteScreen} />
        </RemoteStack.Navigator>
    );
}

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Sensors" component={RemoteScreen} />
        </HomeStack.Navigator>
    );
}
