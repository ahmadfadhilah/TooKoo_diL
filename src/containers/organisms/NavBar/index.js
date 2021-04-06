import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import NavBarIcon from '../../../components/molecules/Navbar'

export class NavBar extends Component {
    render() {
        return (
            <View style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
              <NavBarIcon title="Home" img={require("../../../assets/icon/mohe.png")} active/>
              <NavBarIcon title="Order" img={require("../../../assets/icon/order.png")} active/>
              <NavBarIcon title="Help" img={require("../../../assets/icon/help.png")} active/>
              <NavBarIcon title="Pesan" img={require("../../../assets/icon/mail.png")}/>
              <NavBarIcon title="Account" img={require("../../../assets/icon/group.png")}/>
            </View>
        )
    }
}

export default NavBar
