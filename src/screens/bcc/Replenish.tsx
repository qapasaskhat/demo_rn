import React from "react";
import { 
    SafeAreaView, ScrollView, Text, TouchableOpacity, View, TextInput 
} from 'react-native'

import { styled, StyledComponent } from 'nativewind'
import { Button, Header } from "./Main";

const NSafeAreaView = styled(SafeAreaView)
const NView = styled(View)
const NText = styled(Text)
const NScrollView = styled(ScrollView)
const NPressable = styled(TouchableOpacity)

export function Replenish():JSX.Element {
    return(
        <NSafeAreaView className='flex-1 bg-dark-mode-gray'>
            <Header type={'back'} title="Пополнить" />
            <NView className='flex-1 bg-dark-33'>
                <NView className='mt-3 flex-row'>
                    {/* <NScrollView horizontal showsHorizontalScrollIndicator={false} > */}
                        <NView className="w-[82%] h-24 rounded-xl bg-slate-400 p-4 ml-6">
                            <NText className='text-white'>с BCC Bank </NText>
                            <NText className=" text-white text-2xl">2 735,56 $</NText>
                        </NView>
                        <NView className="w-[82%] h-24 rounded-xl bg-slate-400 p-4 ml-6">
                            <NText className='text-white'>с BCC Bank </NText>
                            <NText className=" text-white text-2xl">2 735,56 $</NText>
                        </NView>
                    {/* </NScrollView> */}
                </NView>
                <NView className=' mt-7 flex-row'>
                    <NView className="w-[82%] h-24 rounded-xl p-4 ml-6 bg-slate-600">
                        <NText className='text-white'>с BCC Bank </NText>
                        <NText className=" text-white text-2xl">2 735,56 $</NText>
                    </NView>
                    <NView className="w-[82%] h-24 rounded-xl p-4 ml-6 bg-slate-600">
                        <NText className='text-white'>с BCC Bank </NText>
                        <NText className=" text-white text-2xl">2 735,56 $</NText>
                    </NView>
                </NView>
                <NView className="mx-5 mt-16">
                    <StyledComponent 
                        component={TextInput}
                        placeholder="Введите сумму"
                        placeholderTextColor={'#969696'}
                        className=" border-b-2 border-b-dark-mode-gray mb-6 text-base pb-2 text-white"
                        keyboardType='number-pad'
                    />
                    <Button title="Пополнить" />
                </NView>
            </NView>
        </NSafeAreaView>
    )
}