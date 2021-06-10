import *as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Keranjang, Message, NewsDetail, Chat, Kontak } from '../../containers/pages/Homes';
import { Login, Register, ForgotPw, SplashScreen, NavTobTab } from '../../containers/pages/Registrasions'
import { Account, NotAccount, SettingAccount, SettingProfile, Pembeda, PesananSaya } from '../../containers/pages/Accounts';
import { Order, barOrder, BelumBayar, Dikemas, Dikirim, Selesai, NavTobOrder } from '../../containers/pages/Orders'
import { Notivikasi, barNotiv } from '../../containers/pages/Notifications'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TOB from './Tobtab';
import TobOrders from './TobtabOrder'

// Stack Navigatior
const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="SplashScreeen" component={SplashScreen}/>
        {/* Home */}
        <Stack.Screen name="Home" component={Buttom} />
        <Stack.Screen name="NewsDetail" component={NewsDetail}/>
        <Stack.Screen name="Message" component={Message}/>
        <Stack.Screen name="Keranjang" component={Keranjang}/>
        <Stack.Screen name="Chat" component={Chat}/>
        <Stack.Screen name="Kontak" component={Kontak}/>
        {/* Order */}
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="BelumBayar" component={BelumBayar} />
        <Stack.Screen name="Dikemas" component={Dikemas} />
        <Stack.Screen name="Dikirim" component={Dikirim} />
        <Stack.Screen name="Selesai" component={Selesai} />
        {/* Notivikasi */}
        <Stack.Screen name="Notivikasi" component={Notivikasi} />
        {/* Account */}
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="NotAccount" component={NotAccount} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="ForgotPw" component={ForgotPw} />
        <Stack.Screen name="SettingAccount" component={SettingAccount} />
        <Stack.Screen name="SettingProfile" component={SettingProfile} />
        <Stack.Screen name="PesananSaya" component={PesananSaya} />
        {/* Nav New Screen */}
        <Stack.Screen name="NavTopTab" component={NavTobTab} />
        <Stack.Screen name="NavTobOrder" component={NavTobOrder} />
        {/* Tob Tab Navigator */}
        <Stack.Screen name="TOB" component={TOB} />
        <Stack.Screen name="TobOrders" component={TobOrders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

// Bottom Tab
const Tab = createBottomTabNavigator();

function Buttom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
      component={Home} />
      <Tab.Screen name="Order" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="shopping" color={color} size={size} />
        ),
      }}
      component={Order} />
      <Tab.Screen name="Notification"
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="email" color={color} size={size} />
        ),
      }}
      component={Notivikasi} />
      <Tab.Screen name="Account" 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-group" color={color} size={size} />
        ),
      }}
      component={Pembeda} />
    </Tab.Navigator>
  );
}