import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    TextInput,
    FlatList,
    Dimensions
} from 'react-native'

import { styled, StyledComponent } from 'nativewind'

const { width, height } = Dimensions.get('screen')

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledBtn = styled(TouchableOpacity)
const StyledInput = styled(TextInput)

function Home(): JSX.Element {
    return(
        <StyledComponent component={SafeAreaView} className="flex-1">
            <StyledView className="flex absolute bottom-[60] z-10 bg-black self-center px-5 py-4 rounded-full flex-row justify-around items-center">
                <StyledView className="w-6 h-6 rounded-full bg-white mr-5" />
                <StyledView className="w-6 h-6 rounded-full bg-white mr-5" />
                <StyledView className="w-6 h-6 rounded-full bg-white mr-5" />
                <StyledView className="w-6 h-6 rounded-full bg-white" />
            </StyledView>
            <StyledComponent component={View} className="flex flex-1 bg-white">
                <StyledView className=" w-full h-11 flex-row items-center justify-between px-6">
                    <StyledView className="w-8 h-8 rounded-full bg-slate-200" />
                    <StyledText className=" font-bold text-green-600 text-xl tracking-widest">
                        DROPS
                    </StyledText>
                    <StyledView className="w-8 h-8 rounded-full bg-slate-200" />
                </StyledView>
                <StyledComponent 
                    component={ScrollView} contentContainerStyle={{ paddingVertical: 12 }}
                    showsVerticalScrollIndicator={false}
                >
                    <StyledView className="flex bg-gray-100 flex-row mx-6 p-4 rounded-3xl">
                        <StyledView className="flex bg-slate-700 w-4 h-4 mr-2 rounded-full" />
                        <StyledInput 
                            placeholder="What are you looking for?" placeholderTextColor={'#808080'}
                            className=" mr-4"
                        />
                    </StyledView>
                    
                    <Spaces />

                    <StyledView className="flex flex-row justify-between items-center px-6">
                        <StyledView className="flex flex-row items-center">
                            <StyledView className="flex w-4 h-4 bg-slate-600 rounded-full mr-1" />
                            <StyledText className="flex font-light text-gray-500">
                                Ship to. <StyledText className="flex font-semibold text-black">
                                Jl. MalioBorro, Block Z. no 18
                                </StyledText>
                            </StyledText>
                        </StyledView>
                        <StyledText>
                            {'>'}
                        </StyledText>
                    </StyledView>
                    <Spaces />
                    <StyledView className="flex px-6 flex-row">
                        <StyledView className="flex w-14 h-14 rounded-full bg-gray-100 items-center justify-center mr-3">
                            <StyledText className="flex text-xs">
                                Nike
                            </StyledText>
                        </StyledView>
                        <StyledView className="flex w-14 h-14 rounded-full bg-gray-100 items-center justify-center mr-3">
                            <StyledText className="flex text-xs">
                                Adidas
                            </StyledText>
                        </StyledView>
                    </StyledView>
                    <Spaces />

                    <StyledView className="flex mx-6 bg-black rounded-xl p-5 flex-row justify-between">
                        <StyledView />
                        <StyledView className="flex w-1/2 items-center">
                            <StyledText className=" text-white font-bold">
                                Year-End Sale
                            </StyledText>
                            <StyledText className=" text-slate-300 text-xs">
                                Up To 90%
                            </StyledText>
                            <StyledView className="flex mt-3 bg-green-700 px-5 py-2 rounded-full">
                                <StyledText className=" text-white text-xs font-bold">
                                    Shop Now
                                </StyledText>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                    <Spaces />

                    <StyledView className="flex px-6 flex-row justify-between items-center">
                        <StyledText className="flex font-semibold text-base">
                            New Arrival
                        </StyledText>
                        <StyledText className=" text-green-700 font-bold text-xs">
                            see all
                        </StyledText>
                    </StyledView>
                    <Spaces />
                    <StyledView className="flex flex-wrap flex-row px-6 justify-between">
                        {
                            [{},{},{},{},{},{},{},{},{},{},{}].map((_, index)=>{
                                return(
                                    <StyledView key={index.toString()} className={` w-44 h-44 mb-5`}>
                                        <StyledView className="w-44 h-36 bg-gray-200 rounded-2xl" />
                                        <StyledText className="flex mt-1 text-xs">
                                            Jordan 1 Retro Hight Dior
                                        </StyledText>
                                        <StyledText className="flex font-semibold">
                                            $9,000
                                        </StyledText>
                                    </StyledView>
                                )
                            })
                        }
                    </StyledView>
                </StyledComponent>
            </StyledComponent>
        </StyledComponent>
    )
}

const Spaces = () => (<StyledView className=" w-full h-4" />)

export default Home