import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { styled } from 'nativewind'

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledTouch = styled(TouchableOpacity)

const StyledInput = styled(TextInput)
const StyledList = styled(FlatList)

export {
    StyledInput, StyledText, StyledTouch, StyledList, StyledView
}