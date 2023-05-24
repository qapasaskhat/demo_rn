import React from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  Platform,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native';

import { StyledComponent, styled, useColorScheme } from 'nativewind'

const { width, height } = Dimensions.get('screen')
const StyledText = styled(Text)
const StyledView = styled(View)
const StyledInput = styled(TextInput)

function Main(): JSX.Element {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const mtop = Platform.OS === 'ios' ? 14 : 0

  const [ value, setValue ] = React.useState(0)

  const offset = React.useRef(new Animated.Value(0)).current

  const headerHeight = __DEV__ ? height/3 : offset.interpolate({
    inputRange: [0, height/3 ],
    outputRange: [ height/3, 0 ],
    extrapolate: 'clamp'
  })

  const headerOpacity = offset.interpolate({
    inputRange: [0,height/7],
    outputRange: [1,0],
    extrapolate: 'extend'
  })

  return (
      <StyledView className='flex-1 bg-sky-700'>
        <Animated.View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          height: headerHeight,
        }}>
          <StyledView className={`w-full h-[100%] px-5 pt-12`}>
            <StyledView className=' w-screen py-4 mb-3'>
              <StyledText className=' text-white text-base font-semibold'>
                Header
              </StyledText>
            </StyledView>
            <StyledView className='flex flex-col justify-around flex-grow'>
              <StyledView>
                <StyledText className=' text-white text-xs'>
                  Your Balance
                </StyledText>
                <StyledText className=' text-white text-3xl my-px font-bold'>
                  SGD 129.22
                </StyledText>
              </StyledView>
              <Animated.View style={{ opacity: headerOpacity }}>
              <StyledView className=' flex-row justify-between mt-2'>
                {
                  data.map((item, index)=>{
                    return(
                      <StyledView className=' items-center' key={index.toString()}>
                        <StyledView className=' w-14 h-14 bg-slate-200 rounded-full' />
                        <StyledText className=' text-white text-xs font-bold mt-1'>
                          {item?.title}
                        </StyledText>
                      </StyledView>
                    )
                  })
                }
              </StyledView>
              </Animated.View>
            </StyledView>
          </StyledView>
        </Animated.View>
{/*         
        <Animated.View style={{
          marginTop: headerHeight,
          flex: 1,
          backgroundColor: colorScheme === 'light' ? '#fff' : '#000',
          borderRadius: 24,
          padding: 32
        }}> */}
        <StyledComponent 
          component={View} 
          className='flex-1 bg-white p-5 rounded-t-3xl pr-8 dark:bg-black' 
          style={{ marginTop: height/3 }}
        >
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              { useNativeDriver: false }
            )}
          >
          <StyledView className=' flex-row items-center justify-between'>
            <StyledView>
              <StyledText className='font-extrabold mb-2 text-xl dark:text-white'>
                Earn up 5.00% Discount
              </StyledText>
              <StyledText className=' dark:text-white'>
                Pay with Bitcoint and enjoy a limited {'\n'}time discount!
              </StyledText>
            </StyledView>
            <StyledView className=' flex bg-orange-100 w-11 h-11 rounded-full dark:bg-orange-50'/>
          </StyledView>
          <StyledView className=' w-full h-px bg-gray-300 my-5' />
          
          <StyledText className=' font-bold text-lg dark:text-white'>
            Wacthlist
          </StyledText>
          {
            coinData.map((item, index)=>{
              return(
                <StyledView key={index.toString()} className=' flex-row items-center justify-between mt-4'>
                  <StyledView className=' flex-row items-center w-1/3'>
                    <StyledView className=' w-10 h-10 rounded-full bg-green-100 mr-4' />
                    <StyledView>
                      <StyledText className=' font-semibold dark:text-white'>
                        {item?.name}
                      </StyledText>
                      <StyledText className=' dark:text-white'>
                        {item?.short}
                      </StyledText>
                    </StyledView>
                  </StyledView>
                  <StyledView>
                    <StyledText className=' dark:text-white'>
                      graph
                    </StyledText>
                  </StyledView>
                  <StyledView>
                    <StyledText className=' font-medium dark:text-white'>
                      SGD {item?.price}
                    </StyledText>
                    <StyledText className=' text-red-500 font-medium text-right'>
                      {item?.percent}%
                    </StyledText>
                  </StyledView>
                </StyledView>
              )
            })
          }
        </Animated.ScrollView>
        </StyledComponent>
        {/* </Animated.View> */}
      </StyledView>
  );
}

export default Main

const data = [
    {
      title: 'Buy'
    },{
      title: 'Sell'
    },{
      title: 'Send'
    },{
      title: 'Receive'
    },{
      title: 'Convert'
    },
  ]
  
const coinData = [
{
    id: 1,
    name: 'Bitcoin',
    short: 'BTC',
    price: '40.963',
    percent: '5.2'
},{
    id: 2,
    name: 'Ethereum',
    short: 'ETH',
    price: '40.963',
    percent: '5.2'
},{
    id: 3,
    name: 'Litecoin',
    short: 'LTC',
    price: '40.963',
    percent: '5.2'
},{
    id: 4,
    name: 'Ripple',
    short: 'XRP',
    price: '40.963',
    percent: '5.2'
},{
    id: 5,
    name: 'Bitcoin Cash',
    short: 'BCH',
    price: '40.963',
    percent: '5.2'
},{
    id: 6,
    name: 'Tether',
    short: 'USDT',
    price: '21.903',
    percent: '8.2'
},{
    id: 7,
    name: 'Uniswap',
    short: 'UNI',
    price: '13.003',
    percent: '10.28'
},{
    id: 7,
    name: 'Cardano',
    short: 'ADA',
    price: '5.930',
    percent: '0.2'
},{
    id: 8,
    name: 'Binance Coin',
    short: 'BNB',
    price: '5.930',
    percent: '0.2'
},{
    id: 7,
    name: 'Cardano',
    short: 'ADA',
    price: '5.930',
    percent: '0.2'
},{
    id: 8,
    name: 'Binance Coin',
    short: 'BNB',
    price: '5.930',
    percent: '0.2'
},{
    id: 7,
    name: 'Cardano',
    short: 'ADA',
    price: '5.930',
    percent: '0.2'
},{
    id: 8,
    name: 'Binance Coin',
    short: 'BNB',
    price: '5.930',
    percent: '0.2'
},{
    id: 7,
    name: 'Cardano',
    short: 'ADA',
    price: '5.930',
    percent: '0.2'
},{
    id: 8,
    name: 'Binance Coin',
    short: 'BNB',
    price: '5.930',
    percent: '0.2'
},{
  id: 7,
  name: 'Cardano',
  short: 'ADA',
  price: '5.930',
  percent: '0.2'
},{
  id: 8,
  name: 'Binance Coin',
  short: 'BNB',
  price: '5.930',
  percent: '0.2'
},{
  id: 7,
  name: 'Cardano',
  short: 'ADA',
  price: '5.930',
  percent: '0.2'
},{
  id: 8,
  name: 'Binance Coin',
  short: 'BNB',
  price: '5.930',
  percent: '0.2'
},{
  id: 7,
  name: 'Cardano',
  short: 'ADA',
  price: '5.930',
  percent: '0.2'
},{
  id: 8,
  name: 'Binance Coin',
  short: 'BNB',
  price: '5.930',
  percent: '0.2'
},{
  id: 7,
  name: 'Cardano',
  short: 'ADA',
  price: '5.930',
  percent: '0.2'
},{
  id: 8,
  name: 'Binance Coin',
  short: 'BNB',
  price: '5.930',
  percent: '0.2'
},
]