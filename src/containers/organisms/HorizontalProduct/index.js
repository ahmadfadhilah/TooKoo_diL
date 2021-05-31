import React, { Component } from 'react'
import { View, Text, ScrollView, Image,  } from 'react-native'
import Scrollitem from '../../../components/molecules/Scrolitem'

class ScrolProduct extends Component {
    render() {
        return(
            <View style={{paddingTop: 16}}>
              <View style={{height: 30, width: 55, marginLeft: 16}}> 
                <Image source={require('../../../assets/icon/gambar.jpeg')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1, marginBottom: 8}}/>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, marginHorizontal: 16}}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>Referense Food</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'green'}}>See All</Text>
              </View>
              <ScrollView horizontal={true} style={{flexDirection: 'row', paddingLeft: 16}}>
                  <Scrollitem title="Nike Air Max" img={require('../../../assets/icon/12.jpg')}/>
                  <Scrollitem title="Nike React" img={require('../../../assets/icon/123.jpg')}/>
                  <Scrollitem title="Nike Air Force" img={require('../../../assets/icon/124.jpg')}/>
                  <Scrollitem title="Nike Blazer Mid" img={require('../../../assets/icon/125.jpeg')}/>
                  <Scrollitem title="Nike Air MaxG" img={require('../../../assets/icon/127.png')}/>
                  <Scrollitem title="Custom Nike air" img={require('../../../assets/icon/128.png')}/>
              </ScrollView>
              <View style={{borderBottomWidth: 1, borderBottomColor: 'grey', marginBottom: 14, marginHorizontal: 16, marginTop: 20}}></View>
            </View>
        )
    }
}
export default ScrolProduct