import { NavigationContainer } from '@react-navigation/native';
import *as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { Home, NewsDetail } from '../../containers/pages/Homes';
import { Login, Register, ForgotPw } from '../../containers/pages/Registrasions'
import { Account, NotAccount } from '../../containers/pages/Accounts';
import { Order, barOrder } from '../../containers/pages/Orders'
import { Notivikasi, barNotiv } from '../../containers/pages/Notifications'


const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="Home" component={Buttom} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Notivikasi" component={Notivikasi} />
        <Stack.Screen name="Account" component={Account} />
        {/* <Stack.Screen name="Login" component={Login}/> */}
        {/* <Stack.Screen name="Register" component={Register}/> */}
        <Stack.Screen name="NewsDetail" component={NewsDetail}/>
        {/* <Stack.Screen name="NotAccount" component={NotAccount} /> */}
        {/* <Stack.Screen name="ForgotPw" component={ForgotPw} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;


const Tab = createMaterialBottomTabNavigator();

function Buttom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="Notivikasi" component={Notivikasi} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}