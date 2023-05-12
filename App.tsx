import React from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  Platform,
  ScrollView,
  TouchableOpacity,
  Animated
} from 'react-native';

import { styled } from 'nativewind'
import { Motion } from "@legendapp/motion"

const StyledText = styled(Text)
const StyledView = styled(View)
const StyledInput = styled(TextInput)

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
  },
]

function App(): JSX.Element {
  const mtop = Platform.OS === 'ios' ? 14 : 0

  const [ value, setValue ] = React.useState(0)
  return (
      <StyledView className='flex-1 bg-sky-700'>
        <StyledView className={`w-full h-1/3 pt-${mtop} px-5`}>
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
          </StyledView>
        </StyledView>

        <StyledView className='flex-1 bg-white p-5 rounded-t-3xl pr-8'>
          <Animated.ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            onScroll={event=>{
              // console.log(event.nativeEvent.contentOffset.y)
            }}
          >
          <StyledView className=' flex-row items-center justify-between'>
            <StyledView className=''>
              <StyledText className='font-extrabold mb-2 text-xl'>
                Earn up 5.00% Discount
              </StyledText>
              <StyledText>
                Pay with Bitcoint and enjoy a limited {'\n'}time discount!
              </StyledText>
            </StyledView>
            <StyledView className=' flex bg-orange-100 w-11 h-11 rounded-full'/>
          </StyledView>
          <StyledView className=' w-full h-px bg-gray-300 my-5' />
          
          <StyledText className=' font-bold text-lg'>
            Wacthlist
          </StyledText>
          {
            coinData.map((item, index)=>{
              return(
                <StyledView key={index.toString()} className=' flex-row items-center justify-between mt-4'>
                  <StyledView className=' flex-row items-center w-1/3'>
                    <StyledView className=' w-10 h-10 rounded-full bg-green-100 mr-4' />
                    <StyledView>
                      <StyledText className=' font-semibold'>
                        {item?.name}
                      </StyledText>
                      <StyledText>
                        {item?.short}
                      </StyledText>
                    </StyledView>
                  </StyledView>
                  <StyledView>
                    <StyledText>
                      graph
                    </StyledText>
                  </StyledView>
                  <StyledView>
                    <StyledText className=' font-medium'>
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
        </StyledView>
      </StyledView>
  );
}
export default App;
