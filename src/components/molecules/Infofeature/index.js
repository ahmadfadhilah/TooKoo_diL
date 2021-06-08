import React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';


const NewsBar = () => {
    return(
    <View style={{padding: 16}}>
        <View style={{height: 30, width: 120,}}>
            <Image source={require('../../../assets/icon/logo.jpg')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15, marginBottom: 18}}>Nike.Just Do It. Nike ID</Text>
        <View style={{flexDirection: 'row', marginBottom: 16}}>
          <View>
            <Image source={require('../../../assets/icon/nike.jpeg')} style={{width: 100, height: 100, borderRadius: 3}}/>
          </View>
          <View style={{marginLeft: 16, flex: 1}}>
            <Text style={{fontSize: 15, color: '#2E2E2E', fontWeight: 'bold'}}>Free Delivery</Text>
            <Text style={{fontSize: 15, width: '80%', color: '#1C1C1C'}}>Applies to orders of Rp3.000.000 or more</Text>
          </View>
        </View>
            <TouchableOpacity style={{backgroundColor: 'green', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'flex-end', borderRadius: 5}}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Visit</Text>
            </TouchableOpacity>
        <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 18}}></View>
    </View>
    )
}
export default NewsBar