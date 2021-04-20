import *as React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BelumBayar from '../../containers/pages/Accounts/PesananSaya/BelumBayar';
import Dikemas from '../../containers/pages/Accounts/PesananSaya/Dikemas';
import Dikirim from '../../containers/pages/Accounts/PesananSaya/Dikirim';
import Selesai from '../../containers/pages/Accounts/PesananSaya/Selesai';

// tobtab daftar pesanan 
const Tobbar = createMaterialTopTabNavigator();

function Tabb() {
  return (
    <Tobbar.Navigator
      tabBarOptions={{
        activeTinyColor: "black",
        labelStyle: {fontSize: 15, fontWeight: 'bold'},
        style: {backgroundColor: 'white', },
      }}
      
      >
      <Tobbar.Screen 
        name="Belum Bayar"
        component={BelumBayar}
        />
      <Tobbar.Screen 
        name="Dikemas" 
        component={Dikemas} 
        />
      <Tobbar.Screen 
        name="Dikirim" 
        component={Dikirim} 
        />
      <Tobbar.Screen 
        name="Selesai" 
        component={Selesai} 
        />

    </Tobbar.Navigator>
  )
}
export default Tabb