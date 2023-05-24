import React from "react";
import {
    SafeAreaView, View, Text, Switch, Animated, FlatList, useWindowDimensions, TouchableOpacity
} from 'react-native';

import VectorImage from "react-native-vector-image";
import LinearGradient from 'react-native-linear-gradient';

const img = require('../assets/icons/logo.svg')
const load_img = require('../assets/icons/loading.svg')

const stepfour = require('../assets/icons/stepfour.svg')
const step4 = require('../assets/icons/step4.svg')
const stepthree = require('../assets/icons/stepthree.svg')

const StyledView = styled(View)
const StyledText = styled(Text)

import { styled, StyledComponent, useColorScheme } from 'nativewind'
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../navigation";

const FadeInView = (props: any) => {
    const spinValue = new Animated.Value(0)

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: [ '0deg', '360deg' ]
    })

    React.useEffect(()=>{
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        ).start()
    })

    return(
        <Animated.View style={{
            justifyContent: 'center',
            alignItems: 'center',
            transform: [ { rotate: spin } ]
        }}>
            {props.children}
        </Animated.View>
    )
}

const DATA = [
    {
        id: 1,
        title: 'Welcome to Cronex 👋 ',
        text: 'The best app to invest in various crypto stocks in the world today!',
        image: stepfour
    },{
        id: 2,
        title: 'Get Better Returns 🚀',
        text: 'Invest in the biggest crypto market & unlock amazing returns of invesment.',
        image: stepfour
    },{
        id: 3,
        title: 'Start with Just $1.00 💰',
        text: 'You don’t have to buy a whole share, you can buy a fraction.',
        image: stepthree
    },{
        id: 4,
        title: 'Your Safety is First 🛡',
        text: 'Your brokerage account is maintained by Cronex LTD',
        image: step4
    },{
        id: 5,
        title: 'No Commissions ⚡️',
        text: 'No commissions ever, just invest for free and maximize your returns.',
        image: stepfour
    },
]

function OnBoarding(): JSX.Element {

    const navigation = useNavigation<ScreenNavigationProp>()
    const { width, height } = useWindowDimensions()

    const { colorScheme, toggleColorScheme } = useColorScheme() 
    const [ currentIndex, setCurrentIndex ] = React.useState(0)

    const scrollX = React.useRef(new Animated.Value(0)).current;
    const slidesRef = React.useRef(null)

    const viewableItemsChanged = React.useRef(({ viewableItems }: any) =>{
        setCurrentIndex(viewableItems[0].index)
    } ).current

    const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return(
        <StyledComponent component={SafeAreaView} className="flex flex-1 bg-white dark:bg-dark-1">
            <StyledView className="flex h-[65%]">
                <Animated.FlatList 
                    data={DATA}
                    horizontal
                    pagingEnabled
                    keyExtractor={(_, i) => i.toString()}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                    bounces={false}
                    onScroll={
                        Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX }} }],
                            { useNativeDriver: false }
                        )
                    }
                    renderItem={({item, index})=>{
                        return(
                            <StyledView key={index.toString()} className="flex w-screen">
                                <StyledComponent 
                                    component={VectorImage}
                                    source={item.image}
                                    style={{ width: '100%', height: height*0.65/2, resizeMode: 'contain' }} 
                                    className="flex my-4"
                                />
                                <StyledView className="flex mt-10">
                                    <StyledText className="flex text-center dark:text-white text-heading-3 font-u-bold">
                                        {item.title}
                                    </StyledText>
                                    <StyledText className="flex text-center mx-6 mt-3 text-lg dark:text-white font-u-medium">
                                        {item.text}
                                    </StyledText>
                                </StyledView>
                            </StyledView>
                        )
                    }}
                />
                    
            </StyledView>
            <StyledView className="flex flex-row self-center ">
                    {
                        DATA.map((_, index)=>{
                            const inputRange = [(index-1) * width, index * width, (index+1) * width]

                            const dotWidth = scrollX.interpolate({ inputRange, outputRange: [8, 32, 8], extrapolate: 'clamp' })
                            const dColor = colorScheme === 'dark' ? '#35383F' : '#E0E0E0'
                            const dotColor = scrollX.interpolate({ inputRange, outputRange: [ dColor, '#12D18E', dColor ], extrapolate: 'clamp' })
                            return (
                                <Animated.View 
                                    key={index.toString()} 
                                    style={[
                                        {   height: 8, borderRadius: 10, marginHorizontal: 4 },
                                        {   width: dotWidth, backgroundColor: dotColor }
                                    ]}
                                />
                            )
                        })
                    }
                </StyledView>
            <StyledView className="flex h-[35%] justify-center">
                <StyledComponent 
                    component={TouchableOpacity} className="flex mx-6 bg-white dark:border-d-light dark:bg-d-medium py-4 rounded-full border-gray-scale-200 border">
                    <StyledText className="flex text-center text-gray-scale-900 dark:text-white text-body-large font-u-semibold">
                        Continue with Google
                    </StyledText>
                </StyledComponent>
                <StyledComponent 
                    onPress={()=> navigation.navigate('SignUp') }
                    component={TouchableOpacity} className="flex mx-6 bg-primary py-4 rounded-full my-3 ">
                    <StyledText className="flex text-center text-white text-body-large font-u-bold">
                        Sign up
                    </StyledText>
                </StyledComponent>
                <StyledComponent 
                    onPress={()=>{ navigation.navigate('SignIn') }} 
                    component={TouchableOpacity} className="flex mx-6 bg-primary-100 dark:bg-d-light py-4 rounded-full"
                >
                    <StyledText className="flex text-center text-primary text-body-large font-u-bold dark:text-white">
                        Sign in
                    </StyledText>
                </StyledComponent>
            </StyledView>
        </StyledComponent>
    )
}

export default OnBoarding;