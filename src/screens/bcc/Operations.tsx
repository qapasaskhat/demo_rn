import React from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { styled } from 'nativewind'
import { Button, Header } from "./Main";

const NSafeAreaView = styled(SafeAreaView)
const NView = styled(View)
const NText = styled(Text)
const NScrollView = styled(ScrollView)
const NPressable = styled(TouchableOpacity)

const Empty = () => {
    return(
        <NView className='flex-1 justify-center px-6'>
            <NView className='bg-slate-50 w-4/6 h-52 self-center' />
            <NText className='text-white text-center my-4'>
                Активные заявки отоброжаются здесь. пока не будут исполнены либо отменены
            </NText>
            <Button title="Начать торговать" />
        </NView>
    )
}

export function Operations():JSX.Element {
    return(
        <NSafeAreaView className='flex-1 bg-dark-mode-gray'>
            <Header type={'back'} title="Операции" />
            <NView className='flex-1 bg-dark-33'>
                <NView className='my-3 flex-row'>
                    <NPressable className='h-8 bg-dark-mode-gray ml-4 px-5 rounded-2xl justify-center'>
                        <NText className='text-white text-xs'>События</NText>
                    </NPressable>
                    <NPressable className='h-8 bg-dark-mode-gray ml-4 px-5 rounded-2xl justify-center'>
                        <NText className='text-white text-xs'>Активные заявки</NText>
                    </NPressable>
                </NView>
                <Empty />
            </NView>
        </NSafeAreaView>
    )
}