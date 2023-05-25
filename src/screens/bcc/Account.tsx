import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { styled } from 'nativewind'
import { Header } from "./Main";
import { useNavigation } from "@react-navigation/native";

import { ScreenNavigationProp } from "../../navigation/route";

const NSafeAreaView = styled(SafeAreaView)
const NView = styled(View)
const NText = styled(Text)
const NScrollView = styled(ScrollView)
const NPressable = styled(TouchableOpacity)

export function Account(): JSX.Element {
    const navigation = useNavigation<ScreenNavigationProp>()
    return(
        <NSafeAreaView className='flex-1 bg-dark-mode-gray'>
            <Header type={'back'} />
            <NView className="flex-1 bg-dark-33">
                <NText className='text-white text-base mx-5 my-4'>
                    Брокерский счет в $
                </NText>
                <NView className=" mx-5 flex-row justify-between">
                    <NView>
                        <NText className='text-white text-2xl mb-1'>40,72 $</NText>
                        <NText className=" text-green-1">+0,12 $  4,07% </NText>
                    </NView>
                    <NView>
                        <NView className=' w-5 h-5 bg-slate-200 rounded-full self-center mb-1'/>
                        <NText className='text-center text-white'>Избранное</NText>
                    </NView>
                </NView>
                <NView className='bg-dark-mode-gray mx-5 mt-4 rounded-2xl py-4'>
                    <NView className='flex-row items-center justify-around'>
                        <NPressable onPress={()=> navigation.navigate('Operations') }>
                            <NView className=" w-8 h-8 bg-white rounded-full self-center"></NView>
                            <NText className='text-white mt-3'>Операции</NText>
                        </NPressable>
                        <NPressable onPress={()=> navigation.navigate('Replenish') }>
                            <NView className=" w-8 h-8 bg-white rounded-full self-center"></NView>
                            <NText className='text-white mt-3'>Поплнение</NText>
                        </NPressable>
                        <NPressable onPress={()=> navigation.navigate('Analytics') }>
                            <NView className=" w-8 h-8 bg-white rounded-full self-center"></NView>
                            <NText className='text-white mt-3'>Аналитика</NText>
                        </NPressable>
                    </NView>
                </NView>
                <NView className='mt-7'>
                    <NText className='text-white ml-5 text-lg mb-4'>Фонды</NText>
                    <NPressable className="flex flex-row mx-5 items-center">
                        <NView className=" w-8 h-8 rounded-full bg-slate-200 mr-3" />
                        <NView>
                            <NText className='text-white text-base'>SPDR S&P Regional Banking</NText>
                            <NText className="text-white text-base">KRE</NText>
                        </NView>
                        <NView className='absolute right-0 items-end'>
                            <NText className='text-white'>
                                40,72 $
                            </NText>
                            <NText className='text-green-1 mt-1'>
                                +0,12 $  4,07% 
                            </NText>
                        </NView>
                    </NPressable>
                </NView>
                <NView className='mt-7'>
                    <NText className='text-white ml-5 text-lg mb-4'>Валюта и металлы</NText>
                    <NPressable className="flex flex-row mx-5 items-center">
                        <NView className=" w-8 h-8 rounded-full bg-slate-200 mr-3" />
                        <NView>
                            <NText className='text-white text-base'>Тенге</NText>
                            <NText className="text-white text-base">kztusd</NText>
                        </NView>
                        <NView className='absolute right-0 items-end'>
                            <NText className='text-white'>
                                40,72 $
                            </NText>
                            <NText className='text-green-1 mt-1'>
                                +0,12 $  4,07% 
                            </NText>
                        </NView>
                    </NPressable>
                </NView>
            </NView>
        </NSafeAreaView>
    )
}