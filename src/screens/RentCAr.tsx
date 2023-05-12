import React from "react";
import {
    View, Text, Image, TouchableOpacity
} from 'react-native';

import { styled, StyledComponent } from 'nativewind'

const car = require('../assets/car1.png')

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledBtn = styled(TouchableOpacity)

function RentCar(): JSX.Element {
    return(
        <StyledView className="flex-1 bg-orange-500 flex-col justify-around">
            <StyledView className=" px-6">
                <StyledText className="flex text-4xl font-bold text-slate-50">
                    Rental{'\n'}Luxury Cars
                </StyledText>
                <StyledText className=" text-slate-50 mt-3">
                    Take the best Cars for rent
                </StyledText>
            </StyledView>
            <StyledView >
                <StyledComponent 
                    component={Image} 
                    source={{ uri: 'https://www.freeiconspng.com/uploads/car-png-20.png' }} 
                    className=" w-full h-52" 
                    style={{ resizeMode: 'contain' }} 
                />
            </StyledView>

            <StyledView className=" px-6">
                <StyledBtn className="flex bg-white rounded-lg w-full h-12 items-center justify-center">
                    <StyledText className="flex font-bold text-lg">
                        Book Now
                    </StyledText>
                </StyledBtn>
            </StyledView>
        </StyledView>
    )
}

export default RentCar