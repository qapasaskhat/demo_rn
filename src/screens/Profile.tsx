import React from "react";
import {
    SafeAreaView, View, Text
} from 'react-native'

import { styled } from 'nativewind'

const StyledSave = styled(SafeAreaView)
const StylefView = styled(View)
const StyledText = styled(Text)


export function Profile():JSX.Element{
    return(
        <StyledSave className="flex flex-1">
            <StylefView className='flex-row items-center justify-center'>
                <StyledText>
                    Profile Screen
                </StyledText>
            </StylefView>
        </StyledSave>
    )
}