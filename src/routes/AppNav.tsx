import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen, RemoteStackScreen, MapStackScreen } from './Stacks';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const AppNav = () => {
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