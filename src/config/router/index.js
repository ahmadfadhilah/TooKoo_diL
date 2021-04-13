import { NavigationContainer } from '@react-navigation/native';
import *as React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, NewsDetail, Register } from '../../containers/pages';
import Account from '../../containers/pages/account';
import NotAccount from '../../containers/pages/NotAccount';
import ForgotPw from '../../containers/pages/forgotpassword';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Login" component={Login}/>
        {/* <Stack.Screen name="Register" component={Register}/> */}
        {/* <Stack.Screen name="NewsDetail" component={NewsDetail}/> */}
        {/* <Stack.Screen name="Account" component={Account} /> */}
        {/* <Stack.Screen name="NotAccount" component={NotAccount} /> */}
        {/* <Stack.Screen name="ForgotPw" component={ForgotPw} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;