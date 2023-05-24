import React from "react";
import {
    View, Text, TouchableOpacity, SafeAreaView, FlatList
} from 'react-native'
import { styled, StyledComponent } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)

const goBack = require('../assets/icons/goBack.svg')
const empty_img = require('../assets/icons/empty_n.svg')

const Empty: React.FC = () => {
    return(
        <StyledView className="flex flex-1 items-center justify-center">
            <StyledComponent 
                component={VectorImage}
                source={empty_img}
                style={{ resizeMode: 'contain' }}
                className="felx w-2/3"
            />
            <StyledText className="flex text-heading-4 text-gray-scale-900 dark:text-white mt-14 font-u-bold">
                Empty
            </StyledText>
            <StyledText className="flex text-body-xlarge font-u-regular mx-6 text-center mt-3 text-gray-scale-900 dark:text-white">
                You don't have any notification at this time
            </StyledText>
        </StyledView>
    )
}

import VectorImage from "react-native-vector-image";

interface THeader {
    title: string
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
            <StyledComponent 
                component={VectorImage}
                source={goBack}
                style={{ width: 20, height: 20, resizeMode: 'cover' }}
            />
        </StyledView>
    )
}

function Notification(): JSX.Element {
    const [ data, setData ] = React.useState([])
    return(
        <StyledComponent component={SafeAreaView} className="flex flex-1 bg-white dark:bg-dark-1">
            <Header title="Notification" />
            { data.length === 0 && <Empty /> }
            {
                data.length > 0 && (
                    <FlatList 
                        data={data}
                        keyExtractor={(_, index)=>index.toString()}
                        renderItem={({item, index})=>{
                            return(
                                <StyledView className="flex mx-6 mt-6"> 
                                    <StyledView className="flex flex-row items-center justify-between mb-1">
                                        <StyledView className="flex flex-row items-center">
                                            <StyledView className="flex w-16 h-16 rounded-full bg-orange opacity-50" />
                                            <StyledView className="flex ml-4">
                                                <StyledText className="flex text-gray-scale-900 text-heading-6 dark:text-white font-u-bold">
                                                    Security Updates!
                                                </StyledText>
                                                <StyledText className="flex text-gray-scale-900 text-body-medium dark:text-white font-u-medium">
                                                    Today | 09:24 AM
                                                </StyledText>
                                            </StyledView>
                                        </StyledView>
                                        <StyledView>
                                            <StyledView className="flex bg-primary rounded-lg px-3 py-2">
                                                <StyledText className="flex text-white text-body-xsmal font-u-semibold">
                                                    New
                                                </StyledText>
                                            </StyledView>
                                        </StyledView>
                                    </StyledView>
                                    <StyledText className="flex text-gray-scale-900 text-body-medium font-u-regular dark:text-white">
                                        Now Cronex has a Two-Factor Authentication. 
                                        Try it now to make your account more secure.
                                    </StyledText>
                                </StyledView>
                            )
                        }}
                    />
                )
            }
        </StyledComponent>
    )
}

export default Notification