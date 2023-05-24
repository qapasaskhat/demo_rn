import React from "react";
import {
    View, Text, TouchableOpacity, SafeAreaView, useWindowDimensions
} from 'react-native'

import { styled, StyledComponent } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

const invite_img = require('../assets/icons/invite.svg')
const invite_star = require('../assets/icons/invite_star.svg')

const goBack = require('../assets/icons/goBack.svg')
import VectorImage from "react-native-vector-image";

interface THeader {
    title?: string
}

const Header: React.FC<THeader> = ({ title }) => {
    return(
        <StyledView className="flex flex-row items-center px-6 justify-between h-12">
            <StyledView className="flex flex-row items-center">
                <StyledComponent 
                    component={VectorImage}
                    source={goBack}
                    style={{ width: 28, height: 18, resizeMode: 'contain' }}
                />
                <StyledText className="flex text-gray-scale-900 text-heading-4 ml-4 dark:text-white">
                    {title}
                </StyledText>
            </StyledView>
            <StyledView />
        </StyledView>
    )
}

function Invite(): JSX.Element {
    const { height } = useWindowDimensions()

    return(
        <StyledComponent component={SafeAreaView} className="flex flex-1 bg-white dark:bg-dark-1">
            <Header />
            <StyledView className="flex mb-6">
                <StyledComponent 
                    component={VectorImage}
                    source={invite_img}
                    style={{ resizeMode: 'contain', height: height*0.22, alignSelf: 'center' }}
                />
                <StyledText className="flex text-center text-heading-3 text-gray-scale-900 dark:text-white mt-5 leading-10 font-u-bold">
                    Invite Friends.{'\n'}
                    Earn Free Crypto!
                </StyledText>
            </StyledView>

            <StyledView 
                className="flex pt-6 pb-3 border-t border-b border-gray-scale-200 dark:border-dark-3 flex-grow justify-center"
            >
                <StyledView className="flex flex-row mx-6">
                    <StyledView className="flex w-8 h-8 mr-4">
                        <StyledComponent
                            component={VectorImage}
                            source={invite_star}
                            style={{ resizeMode: 'contain' }}
                            className="flex w-8 h-8"
                        />
                    </StyledView>
                    <StyledView className="w-[90%]">
                        <StyledText className="flex text-heading-5 text-gray-scale-900 dark:text-white mb-2 font-u-bold">
                            Invite your friends</StyledText>
                        <StyledText className="flex dark:text-white text-body-large font-u-medium">
                            Refer your friends & earn up to 25% commission every time your friends make a trade on Cronex.
                        </StyledText>
                    </StyledView>
                </StyledView>
                <StyledView className="flex flex-row mx-6 mt-4">
                    <StyledView className="flex w-8 h-8 mr-4">
                        <StyledComponent
                            component={VectorImage}
                            source={invite_star}
                            style={{ resizeMode: 'contain' }}
                            className="flex w-8 h-8"
                        />
                    </StyledView>
                    <StyledView className="w-[90%]">
                        <StyledText className="flex text-heading-5 text-gray-scale-900 dark:text-white mb-2 font-u-bold">
                            Your friends get free crypto</StyledText>
                        <StyledText className="flex dark:text-white text-body-large font-u-medium">
                            Your friend gets 2 USDT free. Terms apply.
                        </StyledText>
                    </StyledView>
                </StyledView>
            </StyledView>
            <StyledView className="mb-5 mt-3">
                <StyledComponent component={TouchableOpacity} className="flex mx-6 bg-primary py-4 rounded-full my-3 ">
                    <StyledText className="flex text-center text-white text-body-large font-u-bold">
                        Share My Invite Link
                    </StyledText>
                </StyledComponent>
                <StyledComponent component={TouchableOpacity} className="flex mx-6 bg-primary-100 dark:bg-d-light py-4 rounded-full">
                    <StyledText className="flex text-center text-primary dark:text-white text-body-large font-u-bold">
                        My Rewards
                    </StyledText>
                </StyledComponent>
            </StyledView>
        </StyledComponent>
    )
}

export default Invite