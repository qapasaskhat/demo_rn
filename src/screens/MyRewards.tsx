import React, { useDeferredValue } from "react";
import {
    View, Text, TouchableOpacity, SafeAreaView, FlatList
} from 'react-native'

import { styled, StyledComponent } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

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
                <StyledText className="flex text-gray-scale-900 text-heading-4 ml-4 dark:text-white font-u-bold">
                    {title}
                </StyledText>
            </StyledView>
            <StyledView />
        </StyledView>
    )
}

function MyRewards(): JSX.Element {
    return(
        <StyledComponent component={SafeAreaView} className="flex flex-1 bg-white dark:bg-dark-1">
            <Header title="My Rewards" />
            <FlatList 
                data={new Array(13)}
                keyExtractor={(_, index)=>index.toString()}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <StyledView className="flex mt-6">
                        <StyledText className="flex text-heading-3 text-gray-scale-900 dark:text-white mx-6 leading-10 font-u-bold">
                            You’ve invited 45 friends {'\n'}& earned 90 USDT 🎁
                        </StyledText>
                        <StyledText className="flex text-gray-scale-900 dark:text-white mx-6 mt-3 font-u-regular text-body-xlarge">
                            Keep inviting friends to unlock more!
                        </StyledText>
                    </StyledView>
                }
                renderItem={({ item, index })=>{
                    return (
                        <StyledView className="flex flex-row mx-6 mt-4 justify-between items-center border-b pb-3 border-gray-scale-200 dark:border-dark-3">
                            <StyledView className="flex-row items-center">
                                <StyledView className="flex w-60 h-60 bg-slate-200 mr-3 rounded-full" />
                                <StyledText className="flex text-gray-scale-900 dark:text-white text-heading-6 font-u-bold">
                                    Name
                                </StyledText>
                            </StyledView>
                            <StyledView className="flex flex-row items-center">
                                <StyledText className="flex text-gray-scale-900 dark:text-white mr-3 text-body-xlarge font-u-semibold">
                                    2 USDT
                                </StyledText>
                                <StyledView className="flex w-3 h-3 bg-primary" />
                            </StyledView>
                        </StyledView>
                    )
                }}
            />
            <StyledView className="flex border-t border-gray-scale-200 dark:border-dark-3">
                <StyledComponent component={TouchableOpacity} className="flex mx-6 bg-primary py-4 rounded-full my-3 ">
                    <StyledText className="flex text-center text-white text-body-large font-u-bold">
                        Share My Invite Link
                    </StyledText>
                </StyledComponent>
            </StyledView>
        </StyledComponent>
    )
}

export default MyRewards