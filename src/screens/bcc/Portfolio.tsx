import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { styled } from 'nativewind'
import { Button, Header } from "./Main";

const NSafeAreaView = styled(SafeAreaView)
const NView = styled(View)
const NText = styled(Text)
const NScrollView = styled(ScrollView)
const NPressable = styled(TouchableOpacity)

import { PieChart } from "react-native-gifted-charts";
const pieData = [
    {value: 54, color: '#177AD5', text: '54%'},
    {value: 30, color: '#79D2DE', text: '30%'},
    {value: 26, color: '#ED6665', text: '26%'},
    ];

export function Portfolio() {
    return(
        <NSafeAreaView className="flex flex-1 bg-dark-mode-gray">
            <Header type={'back'} title="Готовый портфель" />
            <NScrollView showsVerticalScrollIndicator={false} bounces={false}>
                <NView className="bg-dark-33 h-[40vh] w-full items-start justify-center">
                    <PieChart 
                        donut
                        innerRadius={80}
                        innerCircleColor='#121425'
                        data={pieData}
                     />
                </NView>
                <NView className=" bg-dark-mode-gray -mt-8 h-full rounded-t-3xl p-6">
                    <NText className="text-white text-center text-2xl -mt-3">
                        eBay
                    </NText>
                    <NView className='flex-row mt-3 mb-5'>
                        <NView className='bg-slate-200 w-16 h-16 rounded-full' />
                        <NView className="ml-4">
                            <NView className='flex-row'>
                                <NView className='bg-dark-33 px-3 py-2 rounded-2xl'>
                                    <NText className='text-xs text-white'>Ebay_KZ</NText>
                                </NView>
                                <NView className='bg-dark-33 px-3 py-2 rounded-2xl ml-3'>
                                    <NText className='text-xs text-white'>Ebay_KZ</NText>
                                </NView>
                            </NView>
                            <NView className='mt-4'>
                                <NText className='text-white text-xl mb-2'>40,72 $</NText>
                                <NView className='flex-row'>
                                    <NText className="text-white mr-2">+0,12 $  (4,07%)</NText>
                                    <NText className="text-white text-xs">за 3 месяца</NText>
                                </NView>
                                <NView className='flex-row mt-1'>
                                    <NText className="text-white mr-2">+0,12 $  (4,07%)</NText>
                                    <NText className="text-white text-xs">за 3 месяца</NText>
                                </NView>
                            </NView>
                        </NView>
                    </NView>

                    <NView>
                        <NView className='h-[20vh] w-screen bg-dark-33 -ml-6 mb-5'></NView>
                        <NView className='flex-row justify-between'>
                            <NPressable className='w-[48%] bg-dark-33 py-3 rounded-2xl items-center'>
                                <NText className='text-white'>Купить по</NText>
                                <NText className='text-body-xsmal text-gray-500 mt-1'>Best bid</NText>
                                <NText className="mt-1 text-white text-lg">+12.44%</NText>
                                <NText className='text-body-xsmal text-gray-500 mt-1'>x1 шт.</NText>
                            </NPressable>
                            <NPressable className='w-[48%] bg-dark-33 py-3 rounded-2xl items-center'>
                                <NText className='text-white'>Продать по</NText>
                                <NText className='text-body-xsmal text-gray-500 mt-1'>Best offer</NText>
                                <NText className="mt-1 text-white text-lg">+12.44%</NText>
                                <NText className='text-body-xsmal text-gray-500 mt-1'>x1 шт.</NText>
                            </NPressable>
                        </NView>

                        <NView className=" bg-dark-33 mx-8 py-3 mt-5 rounded-3xl items-center">
                            <NText className='text-white'>Посмотреть похожие акции</NText>
                        </NView>

                        <NView className=" bg-accent py-4 mt-5 rounded-3xl items-center">
                            <NText className='text-white'>Купить</NText>
                        </NView>
                    </NView>
                </NView>
            </NScrollView>
        </NSafeAreaView>
    )
}