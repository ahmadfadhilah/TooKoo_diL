import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Dashboard,
  Keranjang,
  Message,
  NewsDetail,
  Chat,
  Kontak,
} from '../screens';
import {
  Login,
  Register,
  ForgotPassword,
  SplashScreen,
  NavTobTab,
} from '../screens';
import {
  Account,
  NotAccount,
  Setting,
  SettingUser,
  pembeda,
  Pesanan,
} from '../screens';
import {Order, barOrder, BelumBayar, Dikirim, NavTobOrder} from '../screens';
import {Notivikasi, barNotiv} from '../screens';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TOB from './Tobtab';
import TobOrders from './TobtabOrder';

// Stack Navigatior
const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="SplashScreeen" component={SplashScreen} />
        {/* Dashboard */}
        <Stack.Screen name="Dashboard" component={Buttom} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Keranjang" component={Keranjang} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Kontak" component={Kontak} />
        {/* Order */}
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="barOrder" component={barOrder} />
        <Stack.Screen name="BelumBayar" component={BelumBayar} />
        <Stack.Screen name="Dikirim" component={Dikirim} />
        {/* Notivikasi */}
        <Stack.Screen name="Notivikasi" component={Notivikasi} />
        <Stack.Screen name="barNotiv" component={barNotiv} />
        {/* Account */}
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="NotAccount" component={NotAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPw" component={ForgotPassword} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="SettingUser" component={SettingUser} />
        <Stack.Screen name="Pesanan" component={Pesanan} />
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
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="Dashboard"
              color={color}
              size={size}
            />
          ),
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name="Order"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
        component={Order}
      />
      <Tab.Screen
        name="Notification"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="email" color={color} size={size} />
          ),
        }}
        component={Notivikasi}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
        component={pembeda}
      />
    </Tab.Navigator>
  );
}
