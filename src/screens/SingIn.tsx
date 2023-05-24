import React, { useState, useEffect } from "react";
import {
    View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, Animated
} from 'react-native'

import { styled, StyledComponent } from 'nativewind'
import VectorImage from "react-native-vector-image";
import Modal from 'react-native-modal'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledInput = styled(TextInput)

const goBack = require('../assets/icons/goBack.svg')

const success = require('../assets/icons/modal-successful.svg')
const load_img = require('../assets/icons/loading.svg')

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
                duration: 1400,
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


interface ICode {
    confirm: any
}


function SingIn(): JSX.Element {
    
    const [ email, setEmail ] = React.useState('')

    const [ phone, setPhone ] = React.useState('')

    const [ isVisible, setVisible ] = React.useState(false)

    const [confirm, setConfirm] = useState<ICode>();

    const validateEmail = (email: string) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    if(!confirm){
        return(
            <StyledComponent component={SafeAreaView} className="flex-1 bg-white dark:bg-dark-1">
                <StyledView className="flex h-12 mx-6 flex-row items-center justify-between">
                    <StyledComponent 
                        component={VectorImage}
                        source={goBack}
                        style={{ width: 19, height: 28, resizeMode: 'contain' }}
                    />
                    <StyledView />
                    <StyledView />
                </StyledView>
                <StyledView className='flex flex-1 justify-around'>
                    <StyledView>
                        <StyledText className='flex text-gray-scale-900  text-heading-3 mx-6 font-u-bold dark:text-white'>
                            You’ve got SMS 📩
                        </StyledText>
                        <StyledText className="flex text-body-xlarge font-u-regular text-gray-scale-900 dark:text-white mx-6 mt-3">
                            We have sent the OTP verification code to your phone number. 
                            Check your sms and enter the code below.
                        </StyledText>
                    </StyledView>
                    <StyledView className="flex flex-row justify-between mx-4">
                        {
                            new Array(6).fill({ id: 1 }).map((_, index)=>{
                                return(
                                    <StyledView key={index.toString()} className="flex h-14 w-[15%] bg-gray-scale-50 border border-gray-scale-200 rounded-2xl items-center justify-center dark:bg-dark-2">
                                        <StyledText className="flex text-heading-4 text-gray-scale-900 dark:text-white font-u-bold" >
                                            1
                                        </StyledText>
                                    </StyledView>
                                )
                            })
                        }
                    </StyledView>
                    <StyledView>
                        <StyledText className="flex text-center text-gray-scale-900 dark:text-white text-body-xlarge font-u-medium mb-4">
                            Didn't receive email? 
                        </StyledText>
                        <StyledText className="flex text-center text-gray-scale-900 dark:text-white text-body-xlarge font-u-medium">
                            You can resend code in 55 s
                        </StyledText>
                    </StyledView>
                    <StyledComponent 
                        onPress={()=>{ }}
                        component={TouchableOpacity} className='flex mx-6 bg-primary py-4 rounded-full shadow shadow-primary-200 dark:shadow-primary-300'
                    >
                        <StyledText className='flex text-center text-white text-body-large font-u-bold'>
                            Continue
                        </StyledText>
                    </StyledComponent>
                </StyledView>
                <StyledView className="flex bg-gray-scale-50 dark:bg-dark-2">
                    <FlatList 
                        data={[1,2,3,4,5,6,7,8,9,'*',0,12]}
                        numColumns={3}
                        bounces={false}
                        renderItem={({item, index})=>{
                            return(
                                <StyledComponent component={TouchableOpacity} className="flex w-1/3 h-16 items-center justify-center">
                                    <StyledText className="flex text-gray-scale-900 dark:text-white font-u-medium text-2xl">
                                        {item}
                                    </StyledText>
                                </StyledComponent>
                            )
                        }}
                    />
                </StyledView>
            </StyledComponent>
        )
    }

    return(
        <StyledComponent component={SafeAreaView} className="flex flex-1 bg-white dark:bg-dark-1">
            <Modal 
                isVisible={isVisible}
                onBackdropPress={()=>{ setVisible(false) }}
            >
                <StyledView className='flex bg-white dark:bg-dark-2 h-2/3 rounded-40 items-center justify-center'>
                    <StyledComponent component={VectorImage} source={success} style={{ width: 160, height: 160, resizeMode: 'contain' }}/>
                    <StyledText className='flex text-heading-4 text-primary my-4 font-u-bold'>
                        Successful!
                    </StyledText>
                    <StyledText className='flex text-body-large mx-8 text-center font-u-regular mb-8 dark:text-white'>
                        Your account has been created.
                        Please wait a moment, we are preparing for you...
                    </StyledText>
                    <FadeInView>
                        <StyledComponent 
                            component={VectorImage}
                            source={load_img}
                            style={{ width: 36, height: 36, resizeMode: 'cover' }}
                        />
                    </FadeInView>
                </StyledView>
            </Modal>
            <StyledView className='flex h-12 mx-6 flex-row items-center justify-between'>
                <StyledComponent 
                    component={VectorImage}
                    source={goBack}
                    style={{ width: 19, height: 28, resizeMode: 'contain' }}
                />
                <StyledView />
                <StyledView></StyledView>
            </StyledView>
            <StyledView className='flex flex-1'>
                <StyledText className='flex text-gray-scale-900  text-heading-3 mx-6 font-u-bold dark:text-white'>
                    Hello there 👋
                </StyledText>
                <StyledText className="flex text-body-xlarge font-u-regular text-gray-scale-900 dark:text-white mx-6 mt-3">
                    Please enter your account phone number. 
                    We will send an OTP code for verification in the next step.
                </StyledText>
                <StyledView className='flex mx-6 mt-6'>
                    <StyledText className='flex text-dark-1 text-body-large font-u-bold mb-4 dark:text-white'>
                        Phone
                    </StyledText>
                    <StyledInput 
                        placeholder='Enter your phone number'
                        className={`flex border-b border-b-primary pb-2 text-dark-1 dark:text-white text-heading-5 ${validateEmail(email) ? '' : ''} text-heading-5 font-u-bold`}
                        value={phone}
                        autoComplete="cc-number"
                        inputMode="tel"
                        keyboardType="phone-pad"
                        textContentType="telephoneNumber"
                        onChangeText={value=>setPhone(value)}
                    />
                </StyledView>
            </StyledView>

            <StyledComponent component={View} className='flex h-[12%] border-t border-t-gray-scale-100 justify-center dark:border-t-dark-3'>
                <StyledComponent 
                    component={TouchableOpacity} className='flex mx-6 bg-primary py-4 rounded-full'>
                    <StyledText className='flex text-center text-white text-body-large font-u-bold'>
                        Continue
                    </StyledText>
                </StyledComponent>
            </StyledComponent>

        </StyledComponent>
    )
}

export default SingIn