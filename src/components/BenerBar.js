import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native';

const BenerBar = (props) => {
    return(
        <View style={{padding: 16, paddingBottom: 0}}>
            <View style={{position: 'relative'}}>
              <Image source={require('../../../assets/icon/24.webp')} style={{height: 170, width: '100%', borderRadius: 6}}/>
              <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6}}></View>
              <View style={{height: 30, width: 117, position: 'absolute', top: 12, left: 16}}>
                <Image source={require('../../../assets/icon/logo.jpg')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
              </View>
              <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                <View>
                  <Text style={{fontSize: 18, fontWeight: 'bold' ,color: 'white', marginBottom: 8}}>Just Dropped</Text>
                  <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>Classics. With a natural twist       </Text>
                </View>
                <View style={{flex: 1, paddingLeft: 14,}}>
                  <TouchableOpacity style={{backgroundColor: 'green', paddingHorizontal: 12, paddingVertical: 11, alignSelf: 'stretch', borderRadius: 5}}>
                    <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Visit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{borderBottomColor: 'grey', borderBottomWidth: 1, paddingBottom: 16, marginnTop: 16}}></View>
          </View>
    )
}
export default BenerBar