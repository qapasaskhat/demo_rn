import React from 'react';
import {
    Image, View, Text, TouchableOpacity, SafeAreaView
} from 'react-native';

import { styled, StyledComponent } from 'nativewind'

const StyledBtn = styled(TouchableOpacity)
const StyledView = styled(View)
const StyledText = styled(Text)

function Car(): JSX.Element{
    return(
        <StyledComponent component={SafeAreaView} className='flex-1'>
            <StyledView className=' w-full h-12 flex-row justify-between items-center px-6 bg-stone-800'>
                <StyledView />
                <StyledText className=' text-white font-bold tracking-widest text-base'>
                    Mclaren
                </StyledText>
                <StyledView />
            </StyledView>
            <StyledView className=' bg-stone-800 w-full h-1/2 rounded-b-3xl justify-center items-center'>
                <StyledComponent 
                        component={Image}
                        className='flex w-full h-52'
                        style={{ resizeMode: 'contain' }}
                        source={{ uri: 'https://www.freeiconspng.com/uploads/car-png-20.png' }}
                    />
            </StyledView>

            <StyledView className='flex flex-row flex-wrap m-6 justify-between'>
                <StyledView className='flex bg-stone-800 w-24 h-24 rounded-xl mb-5 items-center justify-center'>
                    <StyledText className='text-white text-xs'>Top Speed</StyledText>
                    <StyledText className='text-white text-xs font-bold'>341 Kmph</StyledText>
                </StyledView>
                <StyledView className='flex bg-stone-800 w-24 h-24 rounded-xl items-center justify-center'>
                    <StyledText className='text-white text-xs'>Power</StyledText>
                    <StyledText className='text-white text-xs font-bold'>490 HP</StyledText>
                </StyledView>
                <StyledView className='flex bg-stone-800 w-24 h-24 rounded-xl  items-center justify-center'>
                    <StyledText className='text-white text-xs'>Seat</StyledText>
                    <StyledText className='text-white text-xs font-bold'>2</StyledText>
                </StyledView>
                <StyledView className='flex bg-stone-800 w-24 h-24 rounded-xl  items-center justify-center'>
                    <StyledText className='text-white text-xs'>Emission</StyledText>
                    <StyledText className='text-white text-xs font-bold'>BS6</StyledText>
                </StyledView>
                <StyledView className='flex bg-stone-800 w-24 h-24 rounded-xl items-center justify-center' >
                    <StyledText className='text-white text-xs'>Fuel</StyledText>
                    <StyledText className='text-white text-xs font-bold'>72 L</StyledText>
                </StyledView>
                <StyledView className='flex bg-stone-800 w-24 h-24 rounded-xl items-center justify-center' >
                    <StyledText className='text-white text-xs'>Sensor</StyledText>
                    <StyledText className='text-white text-xs font-bold'>Available</StyledText>
                </StyledView>
            </StyledView>
            
            <StyledView className='flex flex-row px-6 justify-between mt-6 items-center'>
                <StyledView className='flex w-2/5'>
                    <StyledText className=' font-bold text-center'>
                        $300 / Day
                    </StyledText>
                </StyledView>
                
                <StyledBtn className='flex bg-orange-400 w-2/5 py-2 rounded-md'>
                    <StyledText className='flex font-bold text-white text-center'>
                        Book Now
                    </StyledText>
                </StyledBtn>
            </StyledView>
        </StyledComponent>
    )
}

export default Car