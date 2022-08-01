import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Scrollitem from '../../../components/molecules/Scrolitem';

class ScrolProduct extends Component {
  render() {
    return (
      <View style={{paddingTop: 16}}>
        <View style={{height: 30, width: 120, marginLeft: 16}}>
          <Image
            source={require('../../assets/Image/logo.jpg')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
              marginBottom: 8,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            marginHorizontal: 16,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>Sneakers Store</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'green'}}>
            See All
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          style={{flexDirection: 'row', paddingLeft: 16}}>
          <TouchableOpacity>
            <Scrollitem
              title="Nike Air Max"
              img={require('../../assets/Image/44.jpeg')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Scrollitem
              title="Air Jordan 11 PS"
              img={require('../../assets/Image/45.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Scrollitem
              title="Air Jordan 1 Mid"
              img={require('../../assets/Image/46.jpeg')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Scrollitem
              title="Nike Blazer Mid"
              img={require('../../assets/Image/125.jpeg')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Scrollitem
              title="Nike Air MaxG"
              img={require('../../assets/Image/127.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Scrollitem
              title="Air Jordan Retro"
              img={require('../../assets/Image/128.png')}
            />
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
            marginBottom: 14,
            marginHorizontal: 16,
            marginTop: 20,
          }}></View>
      </View>
    );
  }
}
export default ScrolProduct;
