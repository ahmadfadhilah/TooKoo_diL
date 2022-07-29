import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Login, Register} from '../../containers/pages/Registrasions';
import Animated from 'react-native-reanimated';

// Tob Tab Register
const TopTab = createMaterialTopTabNavigator();

function TOB() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        activeTinyColor: 'black',
        labelStyle: {fontSize: 15, fontWeight: 'bold'},
        style: {backgroundColor: 'white'},
      }}>
      <TopTab.Screen name="Sign In" component={Login} />
      <TopTab.Screen name="Sign Up" component={Register} />
    </TopTab.Navigator>
  );
}
export default TOB;
