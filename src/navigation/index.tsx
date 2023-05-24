import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OnBoarding from "../screens/Onboarding";
import SingIn from "../screens/SingIn";
import SignUp from "../screens/SingUp";
import HelpCenter from "../screens/HelpCenter";
import Invite from "../screens/Invite";

import type { StackNavigationProp } from '@react-navigation/stack';

type StackNavigatorParamList = {
    OnBoarding: undefined;
    SignIn: undefined;
    SignUp: undefined;
    HelpCenter: undefined;
    Invite: undefined
};

export type ScreenNavigationProp = StackNavigationProp< StackNavigatorParamList>;


const Stack = createStackNavigator<StackNavigatorParamList>()

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen component={OnBoarding} name="OnBoarding" />
                <Stack.Screen component={SingIn} name="SignIn" />
                <Stack.Screen component={SignUp} name="SignUp" />
                <Stack.Screen component={HelpCenter} name="HelpCenter" />
                <Stack.Screen component={Invite} name="Invite" />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation