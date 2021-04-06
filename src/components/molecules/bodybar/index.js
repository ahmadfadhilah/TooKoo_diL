import React from 'react';
import { View, Text, Image} from 'react-native'

const BodyBarIcon = (props) => {
    return(
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image source={props.img}/>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 11}}>{props.body}</Text>
      </View>
    )
  }
export default BodyBarIcon