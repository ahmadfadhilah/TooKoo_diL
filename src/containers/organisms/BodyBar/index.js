import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import BodyBarIcon from '../../../components/molecules/bodybar'

export class BodyBar extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 16, marginTop: 9 }}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#5858FA', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 13}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Top Up</Text>
                <Image source={require('../../../assets/icon/add.png')} style={{marginRight: 130}}/>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Rp 999.999</Text>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#8181F7', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
                <BodyBarIcon body="bayar" img={require('../../../assets/icon/help.png')}/>
                <BodyBarIcon body="kemas" img={require('../../../assets/icon/help.png')}/>
                <BodyBarIcon body="kirim" img={require('../../../assets/icon/help.png')}/>
                <BodyBarIcon body="rating" img={require('../../../assets/icon/help.png')}/>
              </View>
            </View>
        )
    }
}

export default BodyBar
