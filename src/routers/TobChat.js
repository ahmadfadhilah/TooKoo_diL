import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Chat, Kontak} from '../../containers/pages/Homes';

const TobChat = createMaterialTopTabNavigator();

function Tobchat() {
  return (
    <TobChat.Navigator
      tabBarOptions={{
        activeTintColor: 'grey',
        labelStyle: {fontSize: 15, fontWeight: '600', color: 'blue'},
        style: {backgroundColor: 'white'},
      }}>
      <TobChat.Screen name="Chat" component={Chat} />
      <TobChat.Screen name="Kontak" component={Kontak} />
    </TobChat.Navigator>
  );
}

export default Tobchat;
