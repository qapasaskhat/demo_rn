import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Animated } from 'react-native';

import Modal from 'react-native-modal'

import { styled, StyledComponent } from 'nativewind'
import VectorImage from "react-native-vector-image";
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledInput = styled(TextInput)

const success = require('../assets/icons/modal-successful.svg')
const load_img = require('../assets/icons/loading.svg')
const goBack = require('../assets/icons/goBack.svg')

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

function SignUp(): JSX.Element {


    const [ name, setName ] = React.useState('')
    const [ code, setCode ] = React.useState('')

    const [ isVisible, setVisible ] = React.useState(false)

    const [confirm, setConfirm] = useState<ICode>();

    return(
        <StyledComponent component={SafeAreaView} className='flex flex-1 bg-white dark:bg-dark-1'>
            <Modal 
                isVisible={isVisible}
                onBackdropPress={()=>{ setVisible(false) }}
            >
                {
                    confirm ? (
                        <StyledView className="flex  justify-center bg-white rounded-2xl p-6">
                            <StyledInput 
                                value={code}
                                onChangeText={value=>setCode(value)}
                                placeholder='enter code'
                                className='border-b'
                            />
                            <StyledComponent 
                                component={TouchableOpacity}
                                className='flex bg-primary mt-4 w-full h-12 rounded-lg justify-center items-center'
                            >
                                <StyledText>
                                    Send
                                </StyledText>
                            </StyledComponent>
                        </StyledView>
                    ) : (
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
                    )
                }
                
            </Modal>
            <StyledView className='flex h-12 mx-6 flex-row items-center justify-between'>
                <StyledComponent 
                    component={VectorImage}
                    source={goBack}
                    style={{ width: 19, height: 28, resizeMode: 'contain' }}
                />
                <StyledView className='flex h-3 rounded-full w-52 bg-gray-scale-200 dark:bg-dark-3'>
                    <StyledView className='flex h-full bg-primary w-3 rounded-full' />
                </StyledView>
                <StyledView></StyledView>
            </StyledView>
            <StyledView className='flex flex-1'>
                <StyledText className='flex text-gray-scale-900  text-heading-3 mx-6 font-u-bold dark:text-white'>
                    What is your name?🧑👩
                </StyledText>
                <StyledView className='flex mx-6 mt-6'>
                    <StyledText className='flex text-dark-1 text-body-large font-u-bold mb-4 dark:text-white'>
                        Full name
                    </StyledText>
                    <StyledInput 
                        placeholder='Enter your name'
                        className='flex border-b border-b-primary pb-2 text-dark-1 dark:text-white text-heading-5 font-u-bold'
                        value={name}
                        onChangeText={value=>setName(value)}
                    />
                </StyledView>
                
            </StyledView>
            <StyledView className='flex h-[12%] border-t border-t-gray-scale-100 justify-center dark:border-t-dark-3'>
                <StyledComponent 
                    onPress={()=>{ 
                        // setVisible(true) 
                    }}
                    component={TouchableOpacity} className='flex mx-6 bg-primary py-4 rounded-full'>
                    <StyledText className='flex text-center text-white text-body-large font-u-bold'>
                        Continue
                    </StyledText>
                </StyledComponent>
            </StyledView>
        </StyledComponent>
    )
}

export default SignUp