import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import BodyBarIcon from '../../../components/molecules/bodybar'

export class BodyBar extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 16, marginTop: 18 }}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#021B79', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 13}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Top Up</Text>
                <Image source={require('../../../assets/icon/add.png')} style={{marginRight: 130}}/>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>Rp 999.999</Text>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#0575E6', borderBottomLeftRadius: 4, borderBottomRightRadius: 4, marginBottom: 15}}>
                <BodyBarIcon body="bayar" img={require('../../../assets/icon/donation.png')}/>
                <BodyBarIcon body="kemas" img={require('../../../assets/icon/box.png')}/>
                <BodyBarIcon body="kirim" img={require('../../../assets/icon/send.png')}/>
                <BodyBarIcon body="rating" img={require('../../../assets/icon/star.png')}/>
              </View>
            </View>
        )
    }
}

export default BodyBar
