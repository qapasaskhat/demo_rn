import React from "react";
import { 
    View, Text, SafeAreaView, TouchableOpacity, 
    useWindowDimensions, ScrollView, TextInput,
    Animated
} from 'react-native'

import { styled, StyledComponent, useColorScheme } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledInput = styled(TextInput)

const filter = require('../assets/icons/filter.svg')
const search_icon = require('../assets/icons/search.svg')
const arrow_down = require('../assets/icons/bold-arrow-down.svg')

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

interface TAnimatedHeader {
    item: {
        id: number
        title: string
    }
}

const AnimatedCard: React.FC<TAnimatedHeader> = ({ item }) => {
    
    const [ visible, setVisible ] = React.useState(false);

    return(
        <StyledComponent 
            component={TouchableOpacity} 
            onPress={()=>{ setVisible(!visible) }}
            className="mx-6 rounded-xl dark:bg-dark-2 mb-4"
        >
            <StyledView className="px-6 pt-6 border rounded-xl border-gray-scale-200 dark:border-dark-3">
                <StyledView className="flex border-b border-b-gray-scale-200 pb-6 flex-row items-center justify-between -mb-px dark:border-dark-3">
                    <StyledText className="text-heading-6 font-u-bold dark:text-white max-w-[90%]">
                        {item.title}
                    </StyledText>
                    {/* <StyledView className="w-3 h-3 bg-primary" /> */}
                    <StyledComponent 
                        component={VectorImage}
                        source={arrow_down}
                        style={{ width: 12, height: 10, resizeMode: 'contain' }}
                    />
                </StyledView>
                {
                    visible && (
                        <StyledView className="mt-6 mb-6">
                            <StyledText className="text-body-medium font-u-medium text-gray-scale-800 dark:text-gray-scale-300 leading-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </StyledText>
                        </StyledView>
                    )
                }
            </StyledView>
        </StyledComponent>
    )
}


function HelpCenter(): JSX.Element {

    const { colorScheme, toggleColorScheme } = useColorScheme();
    const [ search, setSearch ] = React.useState('')

    return(
        <StyledComponent component={SafeAreaView} >
            <Header title="Help Center" />
            
            <StyledView className="flex flex-row mx-6 mt-6">
                <StyledView className="w-1/2 border-b-4 pb-3 border-primary">
                    <StyledText className="flex text-center text-primary text-body-xlarge font-u-semibold">
                        FAQ
                    </StyledText>
                </StyledView>
                <StyledView className="w-1/2 pb-3">
                    <StyledText className="flex text-center text-body-xlarge font-u-semibold text-gray-scale-600 dark:text-gray-scale-700">
                        Contact us
                    </StyledText>
                </StyledView>
            </StyledView>
            {/* {
                new Array(5).fill({ title: '' }).map((item, index)=>(
                    <StyledComponent key={index.toString()} component={TouchableOpacity} className="flex mx-6 mt-6 rounded-xl dark:bg-dark-2 ">
                        <StyledView className="flex flex-grow p-6 border rounded-xl border-gray-scale-300 dark:border-dark-3 flex-row">
                            <StyledView className="flex mr-4 w-6 h-6 bg-primary" />
                            <StyledText className="flex text-body-xlarge font-u-bold text-gray-scale-900 dark:text-white">
                                Customer Service
                            </StyledText>
                        </StyledView>
                    </StyledComponent>
                ))
            } */}

            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <StyledComponent 
                    showsHorizontalScrollIndicator={false}
                    component={ScrollView} className="flex mt-4 px-6" horizontal>
                    {
                        categories.map((item, index)=>(
                            <StyledView key={index.toString()} className="flex border-2 border-primary rounded-3xl mr-4">
                                <StyledText className="flex text-primary mx-5 my-2 text-body-large font-u-semibold">
                                    {item.title}
                                </StyledText>
                            </StyledView>
                        ))
                    }
                </StyledComponent>

                <StyledView className='bg-gray-scale-100 mx-6 my-6 p-4 rounded-xl dark:bg-dark-2 flex-row items-center justify-between focus:border focus:border-primary focus:bg-green-t-8'>
                    <StyledComponent 
                        component={VectorImage}
                        source={search_icon}
                        style={{ width: 16, height: 16 }}
                    />
                    <StyledInput 
                        value={search}
                        onChangeText={value=>setSearch(value)}
                        placeholder="Search..."
                        placeholderTextColor={colorScheme === 'dark' ? '#757575' : '#BDBDBD'}
                        className="text-body-large font-u-semibold text-gray-scale-900 dark:text-white flex-grow mx-3 max-w-[80%]" 
                    />
                    <StyledComponent 
                        component={VectorImage}
                        source={filter}
                        style={{ width: 16, height: 16 }}
                    />
                </StyledView>
                <StyledView>
                    {
                        DATA.map((item, index)=>{
                            return(
                                <AnimatedCard key={index.toString()} item={item} />
                            )
                        })
                    }
                </StyledView>
            </ScrollView>

        </StyledComponent>
    )
}

export default HelpCenter

const DATA = [
    {
        id: 1,
        title: 'What is Cronex?',
    },{
        id: 2,
        title: 'How to buy crypto on Cronex?',
    },{
        id: 3,
        title: 'How to sell crypto on Cronex?',
    },{
        id: 4,
        title: 'How to exchange crypto on Cronex?',
    },{
        id: 5,
        title: 'How to close an Cronex account?',
    },{
        id: 6,
        title: "Why can't I buy crypto stocks?"
    },{
        id: 7,
        title: "Why can't I sell crypto stocks?"
    },{
        id: 8,
        title: "Why can't I exchange crypto stocks?"
    },{
        id: 9,
        title: "Why can't I add a payment method?"
    }
]

const categories = [
    {
        id: 1,
        title: 'General'
    },{
        id: 2,
        title: 'Account'
    },{
        id: 3,
        title: 'Service'
    },{
        id: 4,
        title: 'Crypto'
    },{
        id: 5,
        title: 'Other'
    },
]