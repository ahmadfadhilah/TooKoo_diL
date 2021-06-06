import * as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { BelumBayar, Dikemas, Dikirim, Selesai } from '../../containers/pages/Orders'
import Animated from 'react-native-reanimated';

// TobTabOrder
const TobOrder = createMaterialTopTabNavigator();

function TobOrders() {
    return(
    <TobOrder.Navigator
        tabBarOptions={{
            activeTintColor: 'black',
            labelStyle: {fontSize: 12, fontWeight: 'bold'},
            style: {backgroundColor: 'yellow'}
        }}
        >
        <TobOrder.Screen 
        name="Bayar" 
        component={BelumBayar}
        
        />
        <TobOrder.Screen 
        name="Dikemas" 
        component={Dikemas}
        
        />
        <TobOrder.Screen 
        name="Dikirim" 
        component={Dikirim}
        
        />
        <TobOrder.Screen 
        name="Selesai" 
        component={Selesai}
        
        />
    </TobOrder.Navigator>
    )
}

export default TobOrders