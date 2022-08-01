import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import BodyBarIcon from '../BodyBarIcon';

export class BodyBar extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 16, marginTop: 18}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#68BBE3',
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            padding: 13,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            Top Up
          </Text>
          <Image
            source={require('../../assets/Icon/add.png')}
            style={{marginRight: 130}}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            Rp 10.000
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: 20,
            paddingBottom: 14,
            backgroundColor: '#0476D0',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            marginBottom: 15,
          }}>
          <BodyBarIcon
            body="bayar"
            img={require('../../assets/Icon/donation.png')}
          />
          <BodyBarIcon
            body="kemas"
            img={require('../../assets/Icon/box.png')}
          />
          <BodyBarIcon
            body="kirim"
            img={require('../../assets/Icon/send.png')}
          />
          <BodyBarIcon
            body="rating"
            img={require('../../assets/Icon/star.png')}
          />
        </View>
      </View>
    );
  }
}

export default BodyBar;
