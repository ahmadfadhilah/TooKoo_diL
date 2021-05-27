import * as React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Semua" component={Semua} />
      <Tab.Screen name="Sudahdibaca" component={Sudahdibaca} />
    </Tab.Navigator>
  );
}

export default App