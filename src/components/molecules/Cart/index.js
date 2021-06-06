import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Keranjang = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.head}>
        <Icon
          name="chevron-back-circle-outline"
          size={33}
          style={Styles.icon}
        />
        <Image
          source={require('../../../assets/icon/125.jpeg')}
          style={Styles.image}
        />
      </View>
      <View>
        <View style={Styles.body}>
          <Image
            source={require('../../../assets/icon/nik.jpeg')}
            style={Styles.img}
          />
          <Text style={Styles.bodytext}>Nike Air Max 97 SE</Text>
        </View>
        <View style={Styles.body1}>
          <Text style={Styles.bodytext1}>Rp 2,729,000</Text>
        </View>
        <View style={Styles.border}>
          <Image
            source={require('../../../assets/icon/nike.jpeg')}
            style={Styles.imgborder}
          />
          <TouchableOpacity>
          <Text style={Styles.textborder}>Nike.Air.id</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <Text style={Styles.textkunjungi}>Kunjungi Toko</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 12, backgroundColor: '#F2F2F2'}}></View>
        <View style={Styles.catatan}>
            <Text style={Styles.catatantext}>
            Keeping the original ripple design inspired by Japanese bullet trains,
            the Nike Air Max 97 lets you push your style full-speed ahead.We took the revolutionary 
            full-length Nike Air unit that shook up the running world and added fresh denim textures and crisp 
            detailing to help you ride in first-class comfort.
            </Text>
            <Text style={Styles.catatantext1}>View Product Details</Text>
        </View>
      </View>
    </View>
  );
};
export default Keranjang;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEDE7',
  },
  head: {
    width: '100%',
    height: 230,
    position: 'relative',
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: '128%',
  },
  icon: {
    position: 'absolute',
  },
  body: {
    marginTop: 73,
    marginLeft: 12,
    flexDirection: 'row',
  },
  img: {
    width: 20,
    height: 20,
    borderRadius: 50,
    alignSelf: 'center',
  },
  bodytext: {
    left: 9,
    fontSize: 19,
  },
  body1: {
    marginTop: 12,
    marginLeft: 12,
  },
  bodytext1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E8BC0',
  },
  border: {
    height: 60,
    backgroundColor: 'skyblue',
    marginTop: 8,
    flexDirection: 'row',
    paddingTop: 12,
    marginBottom: 10
  },
  imgborder: {
    width: 40,
    height: 40,
    marginLeft: 12,
    borderRadius: 50,
  },
  textborder: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 9
  },
  textkunjungi: {
    paddingLeft: 110,
    fontSize: 16,
    paddingTop: 9,
    fontWeight: '600'
  },
  catatan: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  catatantext1: {
    borderBottomWidth: 1,
    marginTop: 8
  }
});
