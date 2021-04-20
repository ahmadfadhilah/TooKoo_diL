import *as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Login, Register } from '../../containers/pages/Registrasions';

// Tob Tab 
const TopTab = createMaterialTopTabNavigator();

function TOB() {
  return (
    <TopTab.Navigator headerMode={'none'}>
      <TopTab.Screen name="Login" component={Login} />
      <TopTab.Screen name="Register" component={Register} />
    </TopTab.Navigator>
  );
}
export default TOB

