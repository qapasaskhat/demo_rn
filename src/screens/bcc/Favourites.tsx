import React from "react";
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, FlatList } from 'react-native'

import { styled } from 'nativewind'
import { Header } from "./Main";

const NSafeAreaView = styled(SafeAreaView)
const NView = styled(View)
const NText = styled(Text)
const NScrollView = styled(ScrollView)
const NPressable = styled(TouchableOpacity)

export function Favourites(): JSX.Element{
    return(
        <NSafeAreaView className='flex-1 bg-dark-mode-gray'>
            <Header type={'back'} title="Избранное"/>
            <NView className='bg-dark-33 flex-1'>
                <NView className='my-3'>
                    <NScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            new Array(10).fill({ id: 1 }).map((_, index)=> {
                                return(
                                    <NPressable key={index.toString()} className='h-8 bg-dark-mode-gray ml-4 px-4 rounded-2xl justify-center'>
                                        <NText className='text-white text-xs'>Акции</NText>
                                    </NPressable>
                                )
                            })
                        }
                    </NScrollView>
                </NView>
                <FlatList 
                    data={new Array(10)}
                    ListHeaderComponent={
                        <NView className='px-5 flex-row justify-between mb-6'>
                            <NText className='text-white'>10 акции</NText>
                            <NView>
                                <NText className='text-white'>Цена</NText>
                            </NView>
                        </NView>
                    }
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index})=>{
                        return(
                            <NPressable key={index.toString()} className="flex flex-row mx-5 items-center">
                                <NView className=" w-8 h-8 rounded-full bg-slate-200 mr-3" />
                                <NView>
                                    <NText className='text-white text-base'>EBAY</NText>
                                    <NText className="text-white text-base">EBAY</NText>
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
                        )
                    }}
                    ItemSeparatorComponent={()=>{
                        return(
                            <NView className='h-px w-screen bg-dark-mode-gray my-3' />
                        )
                    }}
                />
            </NView>
        </NSafeAreaView>
    )
}