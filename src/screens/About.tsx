import React from "react";
import {
    View, Text, TouchableOpacity, SafeAreaView, FlatList
} from 'react-native'

import { styled, StyledComponent} from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

const arrow_right = require('../assets/icons/arrowRight.svg')
const logo = require('../assets/icons/logo_n.svg')
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
                    style={{ width: 19, height: 16, resizeMode: 'contain' }}
                />
                <StyledText className="flex text-gray-scale-900 text-heading-4 ml-4 dark:text-white font-u-bold">
                    {title}
                </StyledText>
            </StyledView>
            <StyledView />
        </StyledView>
    )
}

function About(): JSX.Element{
    return(
        <StyledComponent component={SafeAreaView} className="flex-1 bg-white dark:bg-dark-1">
            <Header title="About Cronex" />
            <FlatList 
                data={DATA}
                keyExtractor={(_, index)=>index.toString()}
                showsVerticalScrollIndicator={false}
                bounces={false}
                renderItem={({item, index})=> {
                    return(
                        <StyledComponent 
                            key={index.toString()} 
                            component={TouchableOpacity} 
                            className="flex-row justify-between items-center px-6 my-4"
                        >
                            <StyledText className="text-body-xlarge font-u-semibold text-gray-scale-900 dark:text-white">
                                {item.title}
                            </StyledText>
                            <StyledView className="w-4 h-4">
                                <StyledComponent 
                                    component={VectorImage}
                                    source={arrow_right}
                                    style={{ width: 16, height: 16 }}
                                />
                            </StyledView>
                        </StyledComponent>
                    )
                }}
                ListHeaderComponent={
                    <StyledView className="border-b border-b-gray-scale-200 mx-6 py-5 mb-1 ">
                        <StyledComponent 
                            component={VectorImage}
                            source={logo}
                            style={{ width: 112, height: 112, resizeMode: 'contain', alignSelf: 'center' }}
                        />
                        <StyledText className="text-center text-heading-4 font-u-bold leading-10 text-gray-scale-900 dark:text-white mt-5">
                            Cronex v9.4.7
                        </StyledText>
                    </StyledView>
                }
            />
        </StyledComponent>
    )
}

export default About

const DATA = [
    {
        id: 1,
        title: 'Job Vacancy'
    },{
        id: 2,
        title: 'Fees'
    },{
        id: 3,
        title: 'Developer'
    },{
        id: 4,
        title: 'Partner'
    },{
        id: 5,
        title: 'Privacy Policy'
    },{
        id: 6,
        title: 'Accessibility'
    },{
        id: 7,
        title: 'Feedback'
    },{
        id: 8,
        title: 'Rate us'
    },{
        id: 9,
        title: 'Visit Our Website'
    },{
        id: 10,
        title: 'Follow us on Social Media'
    }
]