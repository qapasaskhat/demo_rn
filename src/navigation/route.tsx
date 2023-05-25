import React from "react";
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import { Main, Favourites, Replenish, Operations, Analytics, Portfolio, Account } from '../screens/bcc'

import type { StackNavigationProp } from '@react-navigation/stack';

type StackNavigatorParamList = {
    Main: undefined;
    Favourites: undefined
    Replenish: undefined
    Operations: undefined
    Analytics: undefined
    Portfolio: undefined
    Account: undefined
};

export type ScreenNavigationProp = StackNavigationProp< StackNavigatorParamList>;

const Stack = createStackNavigator<StackNavigatorParamList>()

const Route = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen component={Main} name='Main'/>
                <Stack.Screen component={Favourites} name="Favourites" />
                <Stack.Screen component={Analytics} name="Analytics" />
                <Stack.Screen component={Operations} name="Operations" />
                <Stack.Screen component={Replenish} name="Replenish" />
                <Stack.Screen component={Portfolio} name="Portfolio" />
                <Stack.Screen component={Account} name="Account" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Route