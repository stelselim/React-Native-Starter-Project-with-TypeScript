import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen, RemoteStackScreen, MapStackScreen } from './Stacks';
import WelcomeScreen from '../screens/welcome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppState } from '../redux/store';
import { Text } from 'react-native';
import { ReduxActionType } from '../redux/actions/actions';
import { Store } from 'redux';
import { useEffect, useState } from 'react';

const Tab = createBottomTabNavigator();

type AppNavProps = {
    store: Store<AppState, ReduxActionType>,
}

const AppNav = ({ store }: AppNavProps) => {
    const [isUrlSet, setSocketUrl] = useState(false);

    // Listen Socket URL changes
    useEffect(() => {
        const storeSubscribe = store.subscribe(() => {
            const appstates = store.getState();
            if (appstates.url !== "") {
                setSocketUrl(true);
            }
        })
        return storeSubscribe;
    }, [isUrlSet])


    // No URL, Show Welcome Screen
    if (!isUrlSet) {
        return (
            <WelcomeScreen />
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen}
                    options={{
                        tabBarIcon: () => <Icon name="home" size={24} />
                    }}
                />
                <Tab.Screen name="Remote" component={RemoteStackScreen}
                    options={{
                        tabBarIcon: () => <Icon name="car" size={24} />
                    }}
                />
                <Tab.Screen name="Map" component={MapStackScreen}
                    options={{
                        tabBarIcon: () => <Icon name="map" size={24} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
}
export default AppNav;