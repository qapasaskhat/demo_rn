import React from "react";
import {
    TouchableOpacity
} from 'react-native'
import { StyledTouch, StyledText } from './index'
import { StyledComponent } from "nativewind";

type ButtonT = {
    title: string,
    onPress: any
}

const Button = ({ title, onPress }: ButtonT ): JSX.Element => {
    return(
        <StyledComponent 
            component={TouchableOpacity} 
            onPress={onPress} 
            className=""
        >
            <StyledText className='font-black text-slate-800'>
                {title}
            </StyledText>
        </StyledComponent>
        // <StyledTouch onPress={onPress} className="w-full h-9 bg-slate-50 p-2 items-center justify-center">
        //     <StyledText className='font-black text-slate-800'>
        //         {title}
        //     </StyledText>
        // </StyledTouch>
    )
}

export default Button