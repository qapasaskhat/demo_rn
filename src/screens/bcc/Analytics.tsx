import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { styled } from 'nativewind'
import { Header } from "./Main";

const NSafeAreaView = styled(SafeAreaView)
const NView = styled(View)
const NText = styled(Text)
const NScrollView = styled(ScrollView)
const NPressable = styled(TouchableOpacity)

import { BarChart } from "react-native-gifted-charts";
import clsx from "clsx";

const barData = [
    {value: 250, label: 'M'},
    {value: 500, label: 'T', frontColor: '#177AD5'},
    {value: 745, label: 'W', frontColor: '#177AD5'},
    {value: 320, label: 'T'},
    {value: 600, label: 'F', frontColor: '#177AD5'},
    {value: 256, label: 'S'},
    {value: 300, label: 'S'},
];

const Balance = () => {
    return (
        <NView className='flex-1 bg-dark-33'></NView>
    )
}
const Portfolio = () => {
    return(
        <NView className='flex-1 bg-dark-33'>
            <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
            />
        </NView>
    )
}
const Predict = () => {
    return (
        <NView className='flex-1 bg-dark-33'></NView>
    )
}

export function Analytics():JSX.Element {
    const [ activeTab, setActiveTab ] = useState('portfolio') 

    return(
        <NSafeAreaView className='flex-1 bg-dark-mode-gray'>
            <Header type={'back'} title="Аналитика" />
            <NView className=" bg-dark-mode-gray flex-row justify-between">
                <NPressable 
                    onPress={()=> setActiveTab('portfolio') }
                    className={
                        clsx(
                            'w-1/3 items-center justify-center flex-grow py-4',
                            activeTab === 'portfolio' && 'border-b-2 border-b-accent'
                        )
                    }
                >
                    <NText className={clsx('text-white', activeTab === 'portfolio' && 'text-accent')}>
                        ПРОТФЕЛЬ
                    </NText>
                </NPressable>
                <NPressable 
                    onPress={()=> setActiveTab('balance') } 
                    className={
                        clsx(
                            'w-1/3 items-center justify-center flex-grow py-4',
                            activeTab === 'balance' && 'border-b-2 border-b-accent'
                        )
                    }
                >
                    <NText className={clsx('text-white', activeTab === 'balance' && 'text-accent')}>
                        БАЛАНС
                    </NText>
                </NPressable>
                <NPressable 
                    onPress={()=> setActiveTab('predict') } 
                    className={
                        clsx(
                            'w-1/3 items-center justify-center flex-grow py-4',
                            activeTab === 'predict' && 'border-b-2 border-b-accent'
                        )
                    }
                >
                    <NText className={clsx('text-white', activeTab === 'predict' && 'text-accent')}>
                        ПРОГНОЗЫ
                    </NText>
                </NPressable>
            </NView>
            { activeTab === 'portfolio' && <Portfolio /> }
            { activeTab === 'balance' && <Balance /> }
            { activeTab === 'predict' && <Predict /> }
        </NSafeAreaView>
    )
}