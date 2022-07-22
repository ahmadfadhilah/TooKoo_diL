import React from 'react'
import { View, Text, Image } from 'react-native'

const NavBarIcon = (props) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={props.img}/>
          <Text style={{fontSize: 10, color: props.active ? 'green' : '#545454', marginTop: 4}}>{props.title}</Text>
        </View>
    )
}

export default NavBarIcon
