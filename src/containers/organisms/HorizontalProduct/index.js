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
                  <Scrollitem title="RM bu yanti" img={require('../../../assets/icon/macam.png')}/>
                  <Scrollitem title="RM Pak Karno" img={require('../../../assets/icon/foods.jpeg')}/>
                  <Scrollitem title="RM Bu Kumis" img={require('../../../assets/icon/indomie.jpeg')}/>
                  <Scrollitem title="RM Pak Bambang" img={require('../../../assets/icon/sopikan.jpeg')}/>
                  <Scrollitem title="RM Pak Narso" img={require('../../../assets/icon/kue.jpeg')}/>
              </ScrollView>
              <View style={{borderBottomWidth: 1, borderBottomColor: 'grey', marginBottom: 14, marginHorizontal: 16, marginTop: 20}}></View>
            </View>
        )
    }
}
export default ScrolProduct