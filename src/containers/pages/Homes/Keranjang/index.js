import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Hhhh from 'react-native-vector-icons/Ionicons';

export default class Keranjang extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.iconBack}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <Hhhh name="arrow-back" size={24} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.text}>Keranjang saya</Text>
          </View>
          <TouchableOpacity
            style={styles.iconChat}
            onPress={() => this.props.navigation.navigate('Message')}>
            <Icon name="message1" size={25} />
          </TouchableOpacity>
        </View>
        <View style={{height: 10, backgroundColor: '#DBE8D8'}}></View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 16,
            paddingTop: 18,
            marginHorizontal: 14,
          }}>
          <View>
            <Image
              source={require('../../../../assets/icon/44.jpeg')}
              style={{width: 100, height: 100, borderRadius: 3}}
            />
          </View>
          <View style={{marginLeft: 16, flex: 1}}>
            <Text
              style={{
                fontSize: 14,
                color: '#2E2E2E',
                fontWeight: '600',
                marginBottom: 4,
              }}>
              Custom Men's Shoe
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#2E2E2E',
                fontWeight: 'bold',
                marginBottom: 26,
              }}>
              Nike Air Max 90 By You
            </Text>
            <Text
              style={{
                fontSize: 18,
                width: '80%',
                color: '#1C1C1C',
                backgroundColor: '#EFEBE0',
              }}>
              Rp 2,099,000
            </Text>
          </View>
        </View>
        <View style={{height: 10, backgroundColor: '#DBE8D8'}}></View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 16,
            paddingTop: 18,
            marginHorizontal: 14,
          }}>
          <View>
            <Image
              source={require('../../../../assets/icon/45.png')}
              style={{width: 100, height: 100, borderRadius: 3}}
            />
          </View>
          <View style={{marginLeft: 16, flex: 1}}>
            <Text
              style={{
                fontSize: 14,
                color: '#2E2E2E',
                fontWeight: '600',
                marginBottom: 4,
              }}>
              Custom Men's Shoe
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#2E2E2E',
                fontWeight: 'bold',
                marginBottom: 26,
              }}>
              Air Jordan 11 PS
            </Text>
            <Text
              style={{
                fontSize: 18,
                width: '80%',
                color: '#1C1C1C',
                backgroundColor: '#EFEBE0',
              }}>
              Rp 2,899,000
            </Text>
          </View>
        </View>
        <View style={{height: 10, backgroundColor: '#DBE8D8'}}></View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 16,
            paddingTop: 18,
            marginHorizontal: 14,
          }}>
          <View>
            <Image
              source={require('../../../../assets/icon/46.jpeg')}
              style={{width: 100, height: 100, borderRadius: 3}}
            />
          </View>
          <View style={{marginLeft: 16, flex: 1}}>
            <Text
              style={{
                fontSize: 14,
                color: '#2E2E2E',
                fontWeight: '600',
                marginBottom: 4,
              }}>
              Custom Men's Shoe
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#2E2E2E',
                fontWeight: 'bold',
                marginBottom: 26,
              }}>
              Air Jordan 1 Mid
            </Text>
            <Text
              style={{
                fontSize: 18,
                width: '80%',
                color: '#1C1C1C',
                backgroundColor: '#EFEBE0',
              }}>
              Rp 5,000,000
            </Text>
          </View>
        </View>
        <View style={{height: 10, backgroundColor: '#DBE8D8'}}></View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 16,
            paddingTop: 18,
            marginHorizontal: 14,
          }}>
          <View>
            <Image
              source={require('../../../../assets/icon/44.jpeg')}
              style={{width: 100, height: 100, borderRadius: 3}}
            />
          </View>
          <View style={{marginLeft: 16, flex: 1}}>
            <Text
              style={{
                fontSize: 14,
                color: '#2E2E2E',
                fontWeight: '600',
                marginBottom: 4,
              }}>
              Custom Men's Shoe
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#2E2E2E',
                fontWeight: 'bold',
                marginBottom: 26,
              }}>
              Nike Blazer Mid
            </Text>
            <Text
              style={{
                fontSize: 18,
                width: '80%',
                color: '#1C1C1C',
                backgroundColor: '#EFEBE0',
              }}>
              Rp 3,453,000
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 18,
    justifyContent: 'space-between',
    paddingBottom: 11,
    backgroundColor: '#FEDE00',
  },
  iconBack: {
    flexDirection: 'row',
  },
  back: {
    paddingRight: 23,
  },
  text: {
    fontSize: 20,
    bottom: 3,
    fontWeight: '800',
  },
});
