import React from "react";
import { Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'

import { styled, StyledComponent } from 'nativewind'
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../navigation/route";

const NView = styled(View)
const NText = styled(Text)
const NSafeAreaView = styled(SafeAreaView)
const NScrollView = styled(ScrollView)
const NPressable = styled(TouchableOpacity)

interface HeaderProps {
    type?: 'search'|null|'back',
    title?: string
}

export const Header = ({ type, title }: HeaderProps) => {
    const navigation = useNavigation()
    if(type === 'search'){
        return(
            <NView className='bg-dark-mode-gray h-20 justify-center'>
                <NView className='mx-5 bg-gray-dark rounded-40 py-2 px-4 flex-row items-center'>
                    <NView className='w-4 h-4 bg-slate-50 mr-2' />
                    <StyledComponent 
                        className='text-white h-8 py-0 w-[87%]'
                        component={TextInput}
                        placeholder="Поиск"
                        placeholderTextColor={'white'}
                        keyboardType='web-search'
                    />
                </NView>
            </NView>
        )
    }
    if(type === 'back'){
        return(
            <NView className=" bg-dark-mode-gray h-20 pb-4 px-5 justify-end">
                <NView className=" items-center flex-row  ">
                    <NPressable onPress={()=> navigation.goBack() } className='w-4 h-4 bg-slate-50 mr-4' />
                    <NText className='text-white text-lg'>
                        {title}
                    </NText>
                </NView>
            </NView>
        )
    }
    return(
        <NView>
            <NText></NText>
        </NView>
    )
}

export const Button = ({ title = 'Показать меньше', color }: { title?: string, color?: string }) => {
    return(
        <NPressable className=" bg-dark-mode-gray rounded-3xl">
            <NText className='text-center my-4 text-white'>
                {title}
            </NText>
        </NPressable>
    )
}

export function Main(): JSX.Element {
    const navigation = useNavigation<ScreenNavigationProp>()

    return(
        <NSafeAreaView className="flex-1 bg-dark-mode-gray">
            <NScrollView className='bg-dark-33' bounces={false} showsVerticalScrollIndicator={false}>
                <Header type={'search'} />
                <NView className='flex-1 flex-row px-5 mt-3 mb-5'>
                    <NPressable className='mr-4'>
                        <NText className="text-white text-lg">
                            Главная
                        </NText>
                    </NPressable>
                    <NPressable onPress={()=> navigation.navigate('Favourites') }>
                        <NText className="text-lg text-gray-500">
                            Избранное
                        </NText>
                    </NPressable>
                </NView>
                <NScrollView horizontal className='mb-4' showsHorizontalScrollIndicator={false}>
                    {
                        new Array(10).fill({ id: 1 }).map((_, index)=>{
                            return(
                                <NPressable key={index.toString()} className='ml-6'>
                                    <NView className='w-20 h-20 rounded-full border-2 border-blue-1 items-center justify-center'>
                                        <NText className='text-white text-body-xxsmall'>
                                            фича для{'\n'}инвестора
                                        </NText>
                                    </NView>
                                </NPressable>
                            )
                        })
                    }
                </NScrollView>

                <NView className="mx-5 bg-dark-mode-gray p-6 rounded-2xl">
                    <NView>
                        <NText className='text-white'>Ваш баланс</NText>
                        <NText className="text-white text-base my-1">3,12 $</NText>
                        <NView className='flex flex-row'>
                            <NView className="">
                                <NText className=" text-green-1">+0,12 $  4,07% </NText>
                            </NView>
                            <NText className=" text-white">за все время</NText>
                        </NView>
                        <NView className=' absolute right-0 top-0'>
                            <NText className="text-white text-2xl">$</NText>
                        </NView>

                        <NView className='flex-row items-center justify-around mt-9'>
                            <NPressable onPress={()=> navigation.navigate('Operations') }>
                                <NView className=" w-7 h-7 bg-white rounded-full self-center"></NView>
                                <NText className='text-white mt-3'>Операции</NText>
                            </NPressable>
                            <NPressable onPress={()=> navigation.navigate('Replenish') }>
                                <NView className=" w-7 h-7 bg-white rounded-full self-center"></NView>
                                <NText className='text-white mt-3'>Поплнение</NText>
                            </NPressable>
                            <NPressable onPress={()=> navigation.navigate('Analytics') }>
                                <NView className=" w-7 h-7 bg-white rounded-full self-center"></NView>
                                <NText className='text-white mt-3'>Аналитика</NText>
                            </NPressable>
                        </NView>
                    </NView>
                </NView>

                <NView className='p-5 mx-5 mt-6 border border-gray-dark rounded-2xl'>
                    <NView className="mb-8">
                        <NText className="text-white text-base">3,12 $</NText>
                        <NText className="text-white text-xs mt-2">{'Ваш брокерский счет >'}</NText>
                    </NView>
                    {
                        new Array(6).fill({ id: 1 }).map((_, index)=>{
                            return(
                                <NPressable onPress={()=> navigation.navigate('Account') } key={index.toString()} className="flex flex-row mb-6">
                                    <NView className=" w-8 h-8 rounded-full bg-slate-200 mr-3" />
                                    <NView>
                                        <NText className='text-white text-sm'>Доллар США</NText>
                                        <NText className="text-white text-xs">0.47 $  230 тг</NText>
                                    </NView>
                                    <NView className='absolute right-0'>
                                        <NText className='text-white'>
                                            460.06 тг.
                                        </NText>
                                    </NView>
                                </NPressable>
                            )
                        })
                    }
                    <Button />
                </NView>

                <NScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-6" bounces={false}>
                    {
                        new Array(6).fill({ id: 1 }).map((_, index)=> {
                            return(
                                <NPressable key={index.toString()} className='bg-dark-mode-gray ml-5 p-3 rounded-xl'>
                                    <NView className='w-28 h-24 rounded-xl bg-slate-300 mb-2' />
                                    <NText className='text-white'>allGA</NText>
                                    <NText className='text-white text-xs'>Акции</NText>
                                </NPressable>
                            )
                        })
                    }
                </NScrollView>

                <NView className="flex-row mt-5 justify-between items-center px-5">
                    <NText className='text-white text-base'>
                        Инвест идеи
                    </NText>
                    <NPressable className=" bg-dark-mode-gray rounded-xl px-3 py-1">
                        <NText className='text-white text-xs'>все</NText>
                    </NPressable>
                </NView>
                <NScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3" bounces={false}>
                    {
                        new Array(6).fill({ id: 1 }).map((_, index)=> {
                            return(
                                <NPressable key={index.toString()} className='bg-dark-mode-gray ml-5 p-3 rounded-xl'>
                                    <NView className='w-28 h-24 rounded-xl bg-slate-300 mb-2' />
                                    <NText className='text-white'>16.03.2023</NText>
                                    <NText className='text-white text-xs'>Энергетика</NText>
                                </NPressable>
                            )
                        })
                    }
                </NScrollView>

                <NView className="flex-row mt-5 justify-between items-center px-5">
                    <NText className='text-white text-base'>
                        Готовые портфели
                    </NText>
                    <NPressable className=" bg-dark-mode-gray rounded-xl px-3 py-1">
                        <NText className='text-white text-xs'>все</NText>
                    </NPressable>
                </NView>
                <NScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3" bounces={false}>
                    {
                        new Array(6).fill({ id: 1 }).map((_, index)=> {
                            return(
                                <NPressable onPress={()=> navigation.navigate('Portfolio') } key={index.toString()} className='bg-dark-mode-gray ml-5 p-3 rounded-xl'>
                                    <NView className='w-28 h-24 rounded-xl bg-slate-300 mb-2' />
                                    <NText className='text-white w-28 text-xs'>Портфель Уоррена Баффета</NText>
                                </NPressable>
                            )
                        })
                    }
                </NScrollView>
                <NView className='mt-6 mx-5'>
                    <Button title="Открыть новый счет" />
                </NView>
                <NView className='h-6' />
            </NScrollView>
            
        </NSafeAreaView>
    )
}